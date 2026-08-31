import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import es from './es'
import fr from './fr'
import de from './de'
import ar from './ar'
import sw from './sw'
import type { LanguageCode } from '../../../shared/types'

export const SUPPORTED_LANGS: {
  code: LanguageCode
  label: string
  rtl: boolean
}[] = [
  {
    code: 'en',
    label: 'English',
    rtl: false
  },
  {
    code: 'es',
    label: 'Español',
    rtl: false
  },
  {
    code: 'fr',
    label: 'Français',
    rtl: false
  },
  {
    code: 'de',
    label: 'Deutsch',
    rtl: false
  },
  {
    code: 'ar',
    label: 'العربية',
    rtl: true
  },
  {
    code: 'sw',
    label: 'Kiswahili',
    rtl: false
  }
]

export async function initI18n(savedLang?: string): Promise<void> {
  await i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      },
      fr: {
        translation: fr
      },
      de: {
        translation: de
      },
      ar: {
        translation: ar
      },
      sw: {
        translation: sw
      }
    },
    lng: savedLang ?? 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })
  applyLangDirection(i18n.language as LanguageCode)
}

export function applyLangDirection(lang: string): void {
  const isRtl = lang === 'ar'
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
  document.documentElement.lang = lang
}

export function changeLang(lang: LanguageCode): void {
  void i18n.changeLanguage(lang)
  applyLangDirection(lang)
  void window.api.app.setLang(lang)
}

export default i18n
