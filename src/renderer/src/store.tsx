// App-wide store: active profile, guest mode, language, and settings applied to the document.

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { applyLangDirection, changeLang, initI18n, SUPPORTED_LANGS } from './i18n'
import type {
  Achievement,
  DailyQuest,
  EnergyState,
  LanguageCode,
  Profile,
  ProfileSettings,
  Progress,
  QuestType,
  Streak,
  XPWallet
} from '../../shared/types'
import { setAudioSpeed, setSoundEnabled } from './lib/sound'

export interface Route {
  name: 'welcome' | 'onboarding' | 'home' | 'stage' | 'resources' | 'multiplayer' | 'settings'
  stageKey?: string
}

interface AppStoreValue {
  ready: boolean
  route: Route
  go: (route: Route) => void
  lang: string
  setLang: (lang: LanguageCode) => void
  profiles: Profile[]
  refreshProfiles: () => Promise<void>
  activeProfile: Profile | null
  streak: Streak | null
  refreshStreak: () => Promise<void>
  xp: XPWallet | null
  refreshXP: () => Promise<void>
  energy: EnergyState | null
  refreshEnergy: () => Promise<void>
  achievements: Achievement[]
  refreshAchievements: () => Promise<void>
  isGuest: boolean
  guestName: string
  guestPath: string | null
  setGuestPath: (path: string) => void
  guestProgress: Record<string, Progress>
  updateGuestProgress: (stageKey: string, patch: Partial<Progress>) => void
  setActiveProfile: (p: Profile | null) => void
  enterGuest: (name: string) => void
  exitSession: () => void
  updateProfile: (id: number, patch: Partial<Profile>) => Promise<void>
  getSetting: () => ProfileSettings
}

const AppStoreContext = createContext<AppStoreValue | null>(null)

function defaultSettings(): ProfileSettings {
  return {
    readingFont: 'default',
    reducedMotion: false,
    reducedSound: false,
    highContrast: false,
    colorBlind: false,
    audioSpeed: 1,
    textScale: 1
  }
}

const QUEST_TEMPLATES: {
  type: QuestType
  descriptionKey: string
  target: number
  rewardXp: number
}[] = [
  {
    type: 'complete_stages',
    descriptionKey: 'quest.completeStages',
    target: 3,
    rewardXp: 15
  },
  {
    type: 'no_hints',
    descriptionKey: 'quest.noHints',
    target: 2,
    rewardXp: 20
  },
  {
    type: 'first_try',
    descriptionKey: 'quest.firstTry',
    target: 1,
    rewardXp: 25
  }
]

function todayStr(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

async function ensureDailyQuests(profileId: number): Promise<void> {
  const existing = await window.api.quests.get(profileId)
  if (existing.length > 0) return
  const date = todayStr()
  const templates = [...QUEST_TEMPLATES].sort(() => Math.random() - 0.5).slice(0, 3)
  const quests: Omit<DailyQuest, 'profileId' | 'date'>[] = templates.map((t, i) => ({
    id: `${date}-${profileId}-${i}`,
    questType: t.type,
    descriptionKey: t.descriptionKey,
    target: t.target,
    progress: 0,
    completed: false,
    claimed: false,
    rewardXp: t.rewardXp
  }))
  await window.api.quests.upsert(profileId, quests)
}

export function applySettingsToDocument(s: ProfileSettings): void {
  const root = document.documentElement
  root.setAttribute('data-font', s.readingFont)
  root.setAttribute('data-scale', String(s.textScale))
  root.setAttribute('data-motion', s.reducedMotion ? 'reduced' : 'full')
  root.setAttribute('data-contrast', s.highContrast ? 'high' : 'normal')
  root.setAttribute('data-colorblind', s.colorBlind ? 'on' : 'off')
  root.style.setProperty('--audio-speed', String(s.audioSpeed))
  setAudioSpeed(s.audioSpeed)
  setSoundEnabled(!s.reducedSound)
}

export function AppProvider({ children }: { children: ReactNode }): React.JSX.Element {
  const [ready, setReady] = useState(false)
  const [route, setRoute] = useState<Route>({
    name: 'welcome'
  })
  const [lang, setLangState] = useState<string>('en')
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [activeProfile, setActiveProfileState] = useState<Profile | null>(null)
  const [isGuest, setIsGuest] = useState(false)
  const [guestName, setGuestName] = useState('')
  const [guestPath, setGuestPathState] = useState<string | null>(null)
  const [guestProgress, setGuestProgress] = useState<Record<string, Progress>>({})
  const [streak, setStreak] = useState<Streak | null>(null)
  const [xp, setXP] = useState<XPWallet | null>(null)
  const [energy, setEnergy] = useState<EnergyState | null>(null)
  const [achievements, setAchievements] = useState<Achievement[]>([])

  useEffect(() => {
    let cancelled = false
    void (async () => {
      const saved = await window.api.app.getLang()
      const savedLang = SUPPORTED_LANGS.some((l) => l.code === saved) ? saved : 'en'
      await initI18n(savedLang)
      if (cancelled) return
      setLangState(savedLang)
      applyLangDirection(savedLang)
      await refreshProfilesInternal()
      setReady(true)
    })()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function refreshProfilesInternal(): Promise<void> {
    const list = await window.api.profiles.list()
    setProfiles(list)
    const lastId = Number(localStorage.getItem('codemaster:active') ?? 0)
    if (lastId) {
      const found = list.find((p) => p.id === lastId)
      if (found) {
        setActiveProfileState(found)
        applySettingsToDocument(found.settings)
        const s = await window.api.streak.get(found.id)
        setStreak(s)
        const w = await window.api.xp.get(found.id)
        setXP(w)
        const e = await window.api.energy.get(found.id)
        setEnergy(e)
        const a = await window.api.achievements.list(found.id)
        setAchievements(a)
        await ensureDailyQuests(found.id)
      }
    }
  }

  async function refreshStreakInternal(): Promise<void> {
    if (!activeProfile) {
      setStreak(null)
      return
    }
    const s = await window.api.streak.get(activeProfile.id)
    setStreak(s)
  }

  async function refreshXPInternal(): Promise<void> {
    if (!activeProfile) {
      setXP(null)
      return
    }
    const w = await window.api.xp.get(activeProfile.id)
    setXP(w)
  }

  async function refreshEnergyInternal(): Promise<void> {
    if (!activeProfile) {
      setEnergy(null)
      return
    }
    const e = await window.api.energy.get(activeProfile.id)
    setEnergy(e)
  }

  async function refreshAchievementsInternal(): Promise<void> {
    if (!activeProfile) {
      setAchievements([])
      return
    }
    const a = await window.api.achievements.list(activeProfile.id)
    setAchievements(a)
  }

  const value = useMemo<AppStoreValue>(
    () => ({
      ready,
      route,
      go: setRoute,
      lang,
      setLang: (l) => {
        changeLang(l)
        setLangState(l)
      },
      profiles,
      refreshProfiles: refreshProfilesInternal,
      activeProfile,
      streak,
      refreshStreak: refreshStreakInternal,
      xp,
      refreshXP: refreshXPInternal,
      energy,
      refreshEnergy: refreshEnergyInternal,
      achievements,
      refreshAchievements: refreshAchievementsInternal,
      isGuest,
      guestName,
      guestPath,
      setGuestPath: setGuestPathState,
      guestProgress,
      updateGuestProgress: (stageKey, patch) => {
        setGuestProgress((prev) => ({
          ...prev,
          [stageKey]: {
            ...(prev[stageKey] ?? {
              stageKey,
              status: 'not_started',
              attempts: 0
            }),
            ...patch
          }
        }))
      },
      setActiveProfile: (p) => {
        if (p) {
          localStorage.setItem('codemaster:active', String(p.id))
          applySettingsToDocument(p.settings)
          void window.api.streak.get(p.id).then(setStreak)
          void window.api.xp.get(p.id).then(setXP)
          void window.api.energy.get(p.id).then(setEnergy)
          void window.api.achievements.list(p.id).then(setAchievements)
        } else {
          localStorage.removeItem('codemaster:active')
          setStreak(null)
          setXP(null)
          setEnergy(null)
          setAchievements([])
        }
        setIsGuest(false)
        setGuestPathState(null)
        setGuestProgress({})
        setActiveProfileState(p)
      },
      enterGuest: (name) => {
        setIsGuest(true)
        setGuestName(name)
        setGuestPathState(null)
        setGuestProgress({})
        setActiveProfileState(null)
        setStreak(null)
        setXP(null)
        setEnergy(null)
        setAchievements([])
        localStorage.removeItem('codemaster:active')
      },
      exitSession: () => {
        setIsGuest(false)
        setGuestName('')
        setGuestPathState(null)
        setGuestProgress({})
        setActiveProfileState(null)
        setStreak(null)
        setXP(null)
        setEnergy(null)
        setAchievements([])
        localStorage.removeItem('codemaster:active')
      },
      updateProfile: async (id, patch) => {
        await window.api.profiles.update(id, patch)
        const updated = await window.api.profiles.get(id)
        if (updated) {
          setProfiles((prev) => prev.map((p) => (p.id === id ? updated : p)))
          setActiveProfileState((cur) => (cur?.id === id ? updated : cur))
          applySettingsToDocument(updated.settings)
        }
      },
      getSetting: () => activeProfile?.settings ?? defaultSettings()
    }),
    [
      ready,
      route,
      lang,
      profiles,
      activeProfile,
      streak,
      xp,
      energy,
      achievements,
      isGuest,
      guestName,
      guestPath,
      guestProgress
    ]
  )

  return <AppStoreContext.Provider value={value}>{children}</AppStoreContext.Provider>
}

export function useApp(): AppStoreValue {
  const ctx = useContext(AppStoreContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
