// App-wide store: active profile, guest mode, language, and settings applied to the document.

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Profile, ProfileSettings } from '../../../shared/types'
import { applyLangDirection, changeLang, initI18n, SUPPORTED_LANGS } from './i18n'
import type { LanguageCode, Progress } from '../../../shared/types'

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
    textScale: 1
  }
}

export function applySettingsToDocument(s: ProfileSettings): void {
  const root = document.documentElement
  root.setAttribute('data-font', s.readingFont)
  root.setAttribute('data-scale', String(s.textScale))
  root.setAttribute('data-motion', s.reducedMotion ? 'reduced' : 'full')
  root.setAttribute('data-contrast', s.highContrast ? 'high' : 'normal')
}

export function AppProvider({ children }: { children: ReactNode }): React.JSX.Element {
  const [ready, setReady] = useState(false)
  const [route, setRoute] = useState<Route>({ name: 'welcome' })
  const [lang, setLangState] = useState<string>('en')
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [activeProfile, setActiveProfileState] = useState<Profile | null>(null)
  const [isGuest, setIsGuest] = useState(false)
  const [guestName, setGuestName] = useState('')
  const [guestPath, setGuestPathState] = useState<string | null>(null)
  const [guestProgress, setGuestProgress] = useState<Record<string, Progress>>({})

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
      }
    }
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
      isGuest,
      guestName,
      guestPath,
      setGuestPath: setGuestPathState,
      guestProgress,
      updateGuestProgress: (stageKey, patch) => {
        setGuestProgress((prev) => ({
          ...prev,
          [stageKey]: { ...(prev[stageKey] ?? { stageKey, status: 'not_started', attempts: 0 }), ...patch }
        }))
      },
      setActiveProfile: (p) => {
        if (p) {
          localStorage.setItem('codemaster:active', String(p.id))
          applySettingsToDocument(p.settings)
        } else {
          localStorage.removeItem('codemaster:active')
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
        localStorage.removeItem('codemaster:active')
      },
      exitSession: () => {
        setIsGuest(false)
        setGuestName('')
        setGuestPathState(null)
        setGuestProgress({})
        setActiveProfileState(null)
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
    [ready, route, lang, profiles, activeProfile, isGuest, guestName, guestPath, guestProgress]
  )

  return <AppStoreContext.Provider value={value}>{children}</AppStoreContext.Provider>
}

export function useApp(): AppStoreValue {
  const ctx = useContext(AppStoreContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
