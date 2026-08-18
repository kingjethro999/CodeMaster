import { ElectronAPI } from '@electron-toolkit/preload'
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

export interface Api {
  profiles: {
    list: () => Promise<Profile[]>
    get: (id: number) => Promise<Profile | undefined>
    create: (input: ProfileInput) => Promise<Profile>
    update: (id: number, patch: Partial<ProfileInput>) => Promise<Profile | undefined>
    remove: (id: number) => Promise<void>
  }
  stages: {
    list: () => Promise<Stage[]>
    get: (key: string) => Promise<Stage | undefined>
    paths: () => Promise<CareerPath[]>
  }
  progress: {
    get: (profileId: number, stageKey: string) => Promise<Progress | undefined>
    listForProfile: (profileId: number) => Promise<Record<string, Progress>>
    upsert: (profileId: number, stageKey: string, patch: Record<string, unknown>) => Promise<Progress>
  }
  ai: {
    getSession: (profileId: number, stageKey: string) => Promise<AISession>
    requestHint: (profileId: number, stageKey: string, failedAttempts: number) => Promise<string>
    recordAttempt: (profileId: number, stageKey: string, ok: boolean) => Promise<void>
    checkExplanation: (
      profileId: number,
      stageKey: string,
      explanation: string,
      source: string
    ) => Promise<{ passed: boolean; feedback: string }>
  }
  resources: {
    list: (path?: string) => Promise<
      {
        id: string
        path: string
        kind: 'book' | 'video' | 'docs'
        title: string
        creator: string
        url: string
        why: string
        tags: string[]
      }[]
    >
  }
  multiplayer: {
    host: (settings: RoomSettings, hostName: string) => Promise<RoomState>
    stopHosting: () => Promise<void>
    discover: () => Promise<DiscoveryHost[]>
    join: (host: DiscoveryHost, name: string, roomCode: string) => Promise<void>
    leave: () => Promise<void>
    startMatch: () => Promise<void>
    endMatch: () => Promise<void>
    reportStage: (finished: boolean) => Promise<void>
    onState: (cb: (state: RoomState) => void) => () => void
  }
  app: {
    getLang: () => Promise<string>
    setLang: (lang: string) => Promise<void>
    online: () => Promise<boolean>
    getInfo: () => Promise<{ version: string; groq: boolean }>
  }
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: Api
  }
}
