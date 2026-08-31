// Per-profile settings: language, reading font, accessibility toggles,
// and text scale. Applied to the document immediately via CSS attributes.

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, Save } from 'lucide-react'
import type { LanguageCode } from '../../../shared/types'
import { applySettingsToDocument, useApp } from '../store'
import { sound } from '../lib/sound'
import { Select } from '../components/Select'
import { SUPPORTED_LANGS } from '../i18n'

export function SettingsScreen(): React.JSX.Element {
  const { t } = useTranslation()
  const { activeProfile, go, lang, setLang, updateProfile, getSetting } = useApp()
  const [font, setFont] = useState<NonNullable<ReturnType<typeof getSetting>['readingFont']>>(
    getSetting().readingFont
  )
  const [reducedMotion, setReducedMotion] = useState(getSetting().reducedMotion)
  const [reducedSound, setReducedSound] = useState(getSetting().reducedSound)
  const [highContrast, setHighContrast] = useState(getSetting().highContrast)
  const [colorBlind, setColorBlind] = useState(getSetting().colorBlind)
  const [audioSpeed, setAudioSpeed] = useState(getSetting().audioSpeed)
  const [textScale, setTextScale] = useState(getSetting().textScale)
  const [saved, setSaved] = useState(false)

  if (!activeProfile) {
    return (
      <div
        className="col center"
        style={{
          height: '100%',
          gap: 16
        }}
      >
        <h2>{t('settings.title')}</h2>
        <p className="muted">{t('welcome.guestDescription')}</p>
        <button
          className="btn btn-ghost"
          aria-label={t('common.back')}
          onClick={() =>
            go({
              name: 'home'
            })
          }
        >
          <ArrowLeft size={18} /> {t('common.back')}
        </button>
      </div>
    )
  }

  const preview = (): void => {
    applySettingsToDocument({
      readingFont: font,
      reducedMotion,
      reducedSound,
      highContrast,
      colorBlind,
      audioSpeed,
      textScale
    })
  }

  const save = async (): Promise<void> => {
    if (!activeProfile) return
    sound.click()
    await updateProfile(activeProfile.id, {
      settings: {
        readingFont: font,
        reducedMotion,
        reducedSound,
        highContrast,
        colorBlind,
        audioSpeed,
        textScale
      }
    })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div
      className="col"
      role="main"
      aria-label={t('settings.title')}
      style={{
        gap: 20
      }}
    >
      <div className="row spread wrap">
        <button
          className="btn btn-ghost"
          aria-label={t('common.back')}
          onClick={() =>
            go({
              name: 'home'
            })
          }
        >
          <ArrowLeft size={18} /> {t('common.back')}
        </button>
        <h2>{t('settings.title')}</h2>
        <button className="btn btn-success" aria-label={saved ? t('explain.checkPassed') : t('common.continue')} onClick={() => void save()}>
          <Save size={18} /> {saved ? t('explain.checkPassed') : t('common.continue')}
        </button>
      </div>

      <div
        className="card col"
        style={{
          gap: 20,
          maxWidth: 640
        }}
      >
        <div className="field">
          <label className="field-label">{t('settings.language')}</label>
          <Select
            id="settings-lang"
            value={lang}
            onChange={(v) => {
              setLang(v as LanguageCode)
              sound.click()
            }}
            options={SUPPORTED_LANGS.map((l) => ({
              value: l.code,
              label: l.label
            }))}
            style={{
              maxWidth: 260
            }}
          />
        </div>

        <div className="field">
          <label className="field-label">{t('settings.readingFont')}</label>
          <div className="row wrap">
            {(
              [
                ['default', t('settings.defaultFont')],
                ['lexend', t('settings.lexend')],
                ['atkinson', t('settings.atkinson')]
              ] as const
            ).map(([val, label]) => (
              <button
                key={val}
                className={`chip ${font === val ? 'selected' : ''}`}
                aria-label={label}
                aria-pressed={font === val}
                onClick={() => {
                  setFont(val)
                  preview()
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="field">
          <label className="field-label">
            {t('settings.textScale')}: {Math.round(textScale * 100)}%
          </label>
          <input
            type="range"
            min={0.9}
            max={1.5}
            step={0.1}
            value={textScale}
            aria-label={t('settings.textScale')}
            onChange={(e) => {
              setTextScale(Number(e.target.value))
              preview()
            }}
          />
        </div>

        <div className="divider" />

        <div
          className="col"
          style={{
            gap: 12
          }}
        >
          {(
            [
              ['reducedMotion', reducedMotion, setReducedMotion, t('settings.reducedMotion')],
              ['reducedSound', reducedSound, setReducedSound, t('settings.reducedSound')],
              ['highContrast', highContrast, setHighContrast, t('settings.highContrast')],
              ['colorBlind', colorBlind, setColorBlind, t('settings.colorBlind')]
            ] as const
          ).map(([key, value, setter, label]) => (
            <label key={key} className="toggle">
              <input
                type="checkbox"
                checked={value}
                aria-label={label}
                onChange={(e) => {
                  setter(e.target.checked)
                  preview()
                }}
              />
              {label}
            </label>
          ))}
        </div>

        <div className="field">
          <label className="field-label">
            {t('settings.audioSpeed')}: {audioSpeed.toFixed(1)}x
          </label>
          <input
            type="range"
            min={0.5}
            max={2.0}
            step={0.1}
            value={audioSpeed}
            aria-label={t('settings.audioSpeed')}
            onChange={(e) => {
              setAudioSpeed(Number(e.target.value))
              preview()
            }}
          />
        </div>
      </div>
    </div>
  )
}
