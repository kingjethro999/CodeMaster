import { ElectronAPI } from '@electron-toolkit/preload'
import type {
  Achievement,
  AISession,
  CareerPath,
  DailyQuest,
  DiscoveryHost,
  EnergyState,
  Profile,
  ProfileInput,
  Progress,
  QuestType,
  RoomSettings,
  RoomState,
  Stage,
  Streak,
  XPWallet
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
    upsert: (
      profileId: number,
      stageKey: string,
      patch: Record<string, unknown>
    ) => Promise<Progress>
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
    ) => Promise<{
      passed: boolean
      feedback: string
    }>
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
  streak: {
    get: (profileId: number) => Promise<Streak>
    recordCompletion: (profileId: number) => Promise<Streak>
    increment: (profileId: number) => Promise<Streak>
    reset: (profileId: number) => Promise<Streak>
    useFreeze: (profileId: number) => Promise<Streak>
    addFreeze: (profileId: number, count: number) => Promise<Streak>
  }
  xp: {
    get: (profileId: number) => Promise<XPWallet>
    add: (profileId: number, amount: number) => Promise<XPWallet>
  }
  energy: {
    get: (profileId: number) => Promise<EnergyState>
    spend: (profileId: number) => Promise<EnergyState>
    refund: (profileId: number) => Promise<EnergyState>
    refillIfDue: (profileId: number) => Promise<EnergyState>
  }
  quests: {
    get: (profileId: number, date?: string) => Promise<DailyQuest[]>
    upsert: (profileId: number, quests: Omit<DailyQuest, 'profileId' | 'date'>[]) => Promise<void>
    updateProgress: (
      profileId: number,
      questType: QuestType,
      increment: number
    ) => Promise<DailyQuest[]>
    claim: (profileId: number, questId: string) => Promise<DailyQuest | undefined>
  }
  achievements: {
    list: (profileId: number) => Promise<Achievement[]>
    grant: (profileId: number, achievementId: string) => Promise<boolean>
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
    getInfo: () => Promise<{
      version: string
      groq: boolean
    }>
  }
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: Api
  }
}
