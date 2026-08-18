// Main-process IPC handlers. All AI writes follow generate -> persist -> render.

import { BrowserWindow, ipcMain } from 'electron'
import { IPC } from '../shared/ipc'
import type {
  AISession,
  CareerPath,
  DiscoveryHost,
  Profile,
  ProfileInput,
  RoomSettings,
  Stage
} from '../shared/types'
import * as repo from './db/repo'
import { getSetting, setSetting } from './db/index'
import { allStages, getStage, PATHS } from './curriculum/data'
import { allResources, resourcesForPath } from './resources/data'
import { checkExplanation, isOnline, requestHint } from './ai/groq'
import { ClientSession, discoverRooms, HostSession, randomRoomCode } from './multiplayer/room'
import { hasGroqKey } from './env'

let hostSession: HostSession | null = null
let clientSession: ClientSession | null = null

function broadcast(channel: string, payload: unknown): void {
  for (const win of BrowserWindow.getAllWindows()) {
    win.webContents.send(channel, payload)
  }
}

export function registerIpc(): void {
  // Profiles
  ipcMain.handle(IPC.profiles.list, (): Profile[] => repo.listProfiles())
  ipcMain.handle(IPC.profiles.get, (_e, id: number): Profile | undefined => repo.getProfile(id))
  ipcMain.handle(IPC.profiles.create, (_e, input: ProfileInput): Profile => repo.createProfile(input))
  ipcMain.handle(
    IPC.profiles.update,
    (_e, id: number, patch: Partial<ProfileInput>): Profile | undefined => repo.updateProfile(id, patch)
  )
  ipcMain.handle(IPC.profiles.remove, (_e, id: number): void => {
    repo.deleteProfile(id)
    if (hostSession) closeHost()
  })

  // Curriculum
  ipcMain.handle(IPC.stages.list, (): Stage[] => allStages())
  ipcMain.handle(IPC.stages.get, (_e, key: string): Stage | undefined => getStage(key))
  ipcMain.handle(IPC.stages.paths, (): CareerPath[] => PATHS)

  // Progress
  ipcMain.handle(
    IPC.progress.get,
    (_e, profileId: number, stageKey: string) => repo.getProgress(profileId, stageKey)
  )
  ipcMain.handle(IPC.progress.listForProfile, (_e, profileId: number) => repo.listProgress(profileId))
  ipcMain.handle(
    IPC.progress.upsert,
    (_e, profileId: number, stageKey: string, patch: Record<string, unknown>) =>
      repo.upsertProgress(profileId, stageKey, patch)
  )

  // AI
  ipcMain.handle(
    IPC.ai.getSession,
    (_e, profileId: number, stageKey: string): AISession => {
      const existing = repo.getAISession(profileId, stageKey)
      if (existing && existing.status === 'in_progress') return existing
      return repo.createAISession(profileId, stageKey)
    }
  )

  ipcMain.handle(
    IPC.ai.requestHint,
    async (_e, profileId: number, stageKey: string, failedAttempts: number): Promise<string> => {
      const stage = getStage(stageKey)
      if (!stage) return 'This stage is missing. Try restarting the app.'
      let session = repo.getAISession(profileId, stageKey)
      if (!session || session.status !== 'in_progress') session = repo.createAISession(profileId, stageKey)
      // generate
      const content = await requestHint(session, stage, failedAttempts)
      // persist (generate -> persist -> render)
      const history = [
        ...session.interactionHistory,
        {
          timestamp: new Date().toISOString(),
          userRequested: true,
          tier: Math.min(session.currentHintTier + 1, 3),
          content
        }
      ]
      const status = session.currentHintTier >= 2 ? 'stuck' : session.status
      repo.updateAISession(profileId, stageKey, {
        status,
        currentHintTier: Math.min(session.currentHintTier + 1, 3),
        interactionHistory: history
      })
      return content
    }
  )

  ipcMain.handle(
    IPC.ai.recordAttempt,
    (_e, profileId: number, stageKey: number | string, ok: boolean): void => {
      const stageKeyStr = String(stageKey)
      const stage = getStage(stageKeyStr)
      const session = repo.getAISession(profileId, stageKeyStr)
      if (!session) return
      const struggles = session.conceptStruggles.slice()
      if (!ok) {
        const concept = stage?.conceptKey.replace('concept.', '') ?? 'unknown'
        if (!struggles.includes(concept)) struggles.push(concept)
      }
      const status: AISession['status'] = ok
        ? 'completed'
        : session.conceptStruggles.length >= 2
          ? 'stuck'
          : session.status
      repo.updateAISession(profileId, stageKeyStr, { conceptStruggles: struggles, status })
      if (ok) repo.completeAISession(profileId, stageKeyStr)
    }
  )

  ipcMain.handle(
    IPC.ai.checkExplanation,
    async (
      _e,
      profileId: number,
      stageKey: string,
      explanation: string,
      source: string
    ): Promise<{ passed: boolean; feedback: string }> => {
      const stage = getStage(stageKey)
      if (!stage) return { passed: false, feedback: 'This stage is missing.' }
      let session = repo.getAISession(profileId, stageKey)
      if (!session || session.status !== 'in_progress') session = repo.createAISession(profileId, stageKey)
      const result = await checkExplanation(session, stage, explanation, source)
      const history = [
        ...session.interactionHistory,
        {
          timestamp: new Date().toISOString(),
          userRequested: true,
          tier: 3,
          content: `Explanation check (${result.passed ? 'passed' : 'needs work'}): ${result.feedback}`
        }
      ]
      repo.updateAISession(profileId, stageKey, {
        interactionHistory: history,
        status: result.passed ? 'completed' : session.status
      })
      return result
    }
  )

  // Resources
  ipcMain.handle(IPC.resources.list, (_e, path?: string) => (path ? resourcesForPath(path as never) : allResources()))

  // Multiplayer
  ipcMain.handle(
    IPC.multi.host,
    (_e, settings: RoomSettings, hostName: string): RoomState => {
      closeHost()
      const code = settings.hostCode || randomRoomCode()
      const merged = { ...settings, hostCode: code }
      hostSession = new HostSession(
        merged,
        hostName,
        (state) => broadcast(IPC.multi.state, state),
        (message) => broadcast(IPC.multi.state, { type: 'error', message })
      )
      const st = hostSession.getState()
      return {
        roomCode: code,
        hostId: st.hostId,
        settings: merged,
        players: st.players
      }
    }
  )
  ipcMain.handle(IPC.multi.stopHosting, (): void => {
    closeHost()
  })
  ipcMain.handle(IPC.multi.discover, async (): Promise<DiscoveryHost[]> => discoverRooms())
  ipcMain.handle(
    IPC.multi.join,
    (_e, host: DiscoveryHost, name: string, roomCode: string): void => {
      closeClient()
      clientSession = new ClientSession(
        host,
        name,
        roomCode,
        (state) => broadcast(IPC.multi.state, state),
        (message) => broadcast(IPC.multi.state, { type: 'error', message })
      )
    }
  )
  ipcMain.handle(IPC.multi.leave, (): void => {
    closeClient()
  })
  ipcMain.handle(IPC.multi.startMatch, (): void => {
    clientSession?.startMatch()
    hostSession?.start()
  })
  ipcMain.handle(IPC.multi.endMatch, (): void => {
    clientSession?.endMatch()
  })
  ipcMain.handle(IPC.multi.reportStage, (_e, finished: boolean): void => {
    if (finished) {
      clientSession?.reportFinished()
      hostSession?.playerFinished()
    } else {
      clientSession?.reportCompleted()
      hostSession?.playerCompleted()
    }
  })

  // App
  ipcMain.handle(IPC.app.getLang, (): string => getSetting('lang', 'en'))
  ipcMain.handle(IPC.app.setLang, (_e, lang: string): void => setSetting('lang', lang))
  ipcMain.handle(IPC.app.online, async (): Promise<boolean> => isOnline())
  ipcMain.handle(IPC.app.getInfo, (): { version: string; groq: boolean } => {
    return { version: '0.1.0', groq: hasGroqKey() }
  })
}

function closeHost(): void {
  hostSession?.close()
  hostSession = null
}

function closeClient(): void {
  clientSession?.close()
  clientSession = null
}
