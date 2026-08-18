import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { IPC } from '../shared/ipc'
import type {
  AISession,
  CareerPath,
  DiscoveryHost,
  Profile,
  ProfileInput,
  Progress,
  RoomSettings,
  RoomState,
  Stage
} from '../shared/types'

const api = {
  profiles: {
    list: (): Promise<Profile[]> => ipcRenderer.invoke(IPC.profiles.list),
    get: (id: number): Promise<Profile | undefined> => ipcRenderer.invoke(IPC.profiles.get, id),
    create: (input: ProfileInput): Promise<Profile> => ipcRenderer.invoke(IPC.profiles.create, input),
    update: (id: number, patch: Partial<ProfileInput>): Promise<Profile | undefined> =>
      ipcRenderer.invoke(IPC.profiles.update, id, patch),
    remove: (id: number): Promise<void> => ipcRenderer.invoke(IPC.profiles.remove, id)
  },
  stages: {
    list: (): Promise<Stage[]> => ipcRenderer.invoke(IPC.stages.list),
    get: (key: string): Promise<Stage | undefined> => ipcRenderer.invoke(IPC.stages.get, key),
    paths: (): Promise<CareerPath[]> => ipcRenderer.invoke(IPC.stages.paths)
  },
  progress: {
    get: (profileId: number, stageKey: string): Promise<Progress | undefined> =>
      ipcRenderer.invoke(IPC.progress.get, profileId, stageKey),
    listForProfile: (profileId: number): Promise<Record<string, Progress>> =>
      ipcRenderer.invoke(IPC.progress.listForProfile, profileId),
    upsert: (profileId: number, stageKey: string, patch: Record<string, unknown>): Promise<Progress> =>
      ipcRenderer.invoke(IPC.progress.upsert, profileId, stageKey, patch)
  },
  ai: {
    getSession: (profileId: number, stageKey: string): Promise<AISession> =>
      ipcRenderer.invoke(IPC.ai.getSession, profileId, stageKey),
    requestHint: (profileId: number, stageKey: string, failedAttempts: number): Promise<string> =>
      ipcRenderer.invoke(IPC.ai.requestHint, profileId, stageKey, failedAttempts),
    recordAttempt: (profileId: number, stageKey: string, ok: boolean): Promise<void> =>
      ipcRenderer.invoke(IPC.ai.recordAttempt, profileId, stageKey, ok),
    checkExplanation: (
      profileId: number,
      stageKey: string,
      explanation: string,
      source: string
    ): Promise<{ passed: boolean; feedback: string }> =>
      ipcRenderer.invoke(IPC.ai.checkExplanation, profileId, stageKey, explanation, source)
  },
  resources: {
    list: (path?: string): Promise<unknown[]> => ipcRenderer.invoke(IPC.resources.list, path)
  },
  multiplayer: {
    host: (settings: RoomSettings, hostName: string): Promise<RoomState> =>
      ipcRenderer.invoke(IPC.multi.host, settings, hostName),
    stopHosting: (): Promise<void> => ipcRenderer.invoke(IPC.multi.stopHosting),
    discover: (): Promise<DiscoveryHost[]> => ipcRenderer.invoke(IPC.multi.discover),
    join: (host: DiscoveryHost, name: string, roomCode: string): Promise<void> =>
      ipcRenderer.invoke(IPC.multi.join, host, name, roomCode),
    leave: (): Promise<void> => ipcRenderer.invoke(IPC.multi.leave),
    startMatch: (): Promise<void> => ipcRenderer.invoke(IPC.multi.startMatch),
    endMatch: (): Promise<void> => ipcRenderer.invoke(IPC.multi.endMatch),
    reportStage: (finished: boolean): Promise<void> => ipcRenderer.invoke(IPC.multi.reportStage, finished),
    onState: (cb: (state: RoomState) => void): (() => void) => {
      const listener = (_e: Electron.IpcRendererEvent, state: RoomState): void => cb(state)
      ipcRenderer.on(IPC.multi.state, listener)
      return () => ipcRenderer.removeListener(IPC.multi.state, listener)
    }
  },
  app: {
    getLang: (): Promise<string> => ipcRenderer.invoke(IPC.app.getLang),
    setLang: (lang: string): Promise<void> => ipcRenderer.invoke(IPC.app.setLang, lang),
    online: (): Promise<boolean> => ipcRenderer.invoke(IPC.app.online),
    getInfo: (): Promise<{ version: string; groq: boolean }> => ipcRenderer.invoke(IPC.app.getInfo)
  }
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
