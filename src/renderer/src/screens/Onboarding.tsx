import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { AgeBand, CareerPathId, LanguageCode } from '../../../shared/types'
import { AVATARS, Avatar } from '../components/Avatar'
import { Mascot } from '../components/Mascot'
import { useApp } from '../store'
import { sound } from '../lib/sound'
import { Select } from '../components/Select'
import { SUPPORTED_LANGS } from '../i18n'

const INTERESTS = ['sports', 'music', 'art', 'space', 'animals', 'robots', 'magic', 'dinosaurs']
const INTEREST_LABELS: Record<string, string> = {
  sports: 'Sports',
  music: 'Music',
  art: 'Art',
  space: 'Space',
  animals: 'Animals',
  robots: 'Robots',
  magic: 'Magic',
  dinosaurs: 'Dinosaurs'
}

export function Onboarding(): React.JSX.Element {
  const { t } = useTranslation()
  const { go, setActiveProfile, setLang, lang, refreshProfiles } = useApp()
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState<string>(AVATARS[0])
  const [ageBand, setAgeBand] = useState<AgeBand>('9-13')
  const [path, setPath] = useState<CareerPathId | null>(null)
  const [interests, setInterests] = useState<string[]>([])
  const [font, setFont] = useState<'default' | 'lexend' | 'atkinson'>('default')
  const [reducedMotion, setReducedMotion] = useState(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const [reducedSound, setReducedSound] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [creating, setCreating] = useState(false)

  const canNext = step === 0 ? name.trim().length > 0 : step === 2 ? path !== null : true

  const toggleInterest = (id: string): void => {
    setInterests((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const finish = async (): Promise<void> => {
    if (!path || creating) return
    setCreating(true)
    const profile = await window.api.profiles.create({
      name: name.trim(),
      avatar,
      ageBand,
      careerPath: path,
      interests,
      settings: {
        readingFont: font,
        reducedMotion,
        reducedSound,
        highContrast,
        textScale: 1
      }
    })
    await refreshProfiles()
    setActiveProfile(profile)
    sound.success()
    go({
      name: 'home'
    })
  }

  const steps = [
    {
      title: t('profile.name'),
      body: (
        <div
          className="col"
          style={{
            gap: 20
          }}
        >
          <div className="field">
            <label className="field-label" htmlFor="onboard-name">
              {t('profile.name')}
            </label>
            <input
              id="onboard-name"
              className="input"
              value={name}
              autoFocus
              placeholder={t('profile.namePlaceholder')}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && canNext && setStep(1)}
            />
          </div>
          <div className="field">
            <span className="field-label">{t('profile.ageBand')}</span>
            <div className="row wrap">
              {(['6-8', '9-13', '14+'] as AgeBand[]).map((band) => (
                <button
                  key={band}
                  className={`chip ${ageBand === band ? 'selected' : ''}`}
                  aria-label={t(`profile.age${band === '14+' ? '14' : band}`)}
                  aria-pressed={ageBand === band}
                  onClick={() => setAgeBand(band)}
                >
                  {t(`profile.age${band === '14+' ? '14' : band}`)}
                </button>
              ))}
            </div>
          </div>
          <div className="field">
            <span className="field-label">{t('common.appName')}</span>
            <div className="avatar-grid">
              {AVATARS.map((id) => (
                <Avatar
                  key={id}
                  id={id}
                  size={64}
                  className={`avatar ${avatar === id ? 'selected' : ''}`}
                  aria-label={`Avatar ${id}`}
                  onClick={() => setAvatar(id)}
                />
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: t('profile.choosePath'),
      body: (
        <div className="path-grid">
            {(['web', 'game', 'data', 'embedded', 'mobile'] as CareerPathId[]).map((id) => (
            <button
              key={id}
              className={`path-card ${path === id ? 'selected' : ''}`}
              aria-label={t(`paths.${id}.name`)}
              aria-pressed={path === id}
              onClick={() => setPath(id)}
            >
              <span
                className="path-icon"
                style={{
                  background:
                    id === 'web'
                      ? 'var(--accent-blue)'
                      : id === 'game'
                        ? 'var(--accent-purple)'
                        : id === 'data'
                          ? 'var(--accent-green)'
                          : id === 'embedded'
                            ? 'var(--accent-orange)'
                            : 'var(--accent-coral)'
                }}
              >
                {pathIcon(id)}
              </span>
              <strong
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 18
                }}
              >
                {t(`paths.${id}.name`)}
              </strong>
              <span
                className="muted"
                style={{
                  fontSize: 14
                }}
              >
                {t(`paths.${id}.description`)}
              </span>
              <span className="path-langs">
                {langsFor(id).map((l) => (
                  <span key={l} className="lang-tag">
                    {l}
                  </span>
                ))}
              </span>
            </button>
          ))}
        </div>
      )
    },
    {
      title: t('profile.interests'),
      body: (
        <div className="field">
          <span className="muted">{t('profile.interestsHint')}</span>
          <div
            className="row wrap"
            style={{
              gap: 10
            }}
          >
            {INTERESTS.map((id) => (
              <button
                key={id}
                className={`chip ${interests.includes(id) ? 'selected' : ''}`}
                aria-label={INTEREST_LABELS[id]}
                aria-pressed={interests.includes(id)}
                onClick={() => toggleInterest(id)}
              >
                {INTEREST_LABELS[id]}
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      title: t('settings.title'),
      body: (
        <div
          className="col"
          style={{
            gap: 18
          }}
        >
          <div className="field">
            <span className="field-label">{t('settings.language')}</span>
            <Select
              id="onboard-lang"
              value={lang}
              onChange={(v) => setLang(v as LanguageCode)}
              options={SUPPORTED_LANGS.map((l) => ({
                value: l.code,
                label: l.label
              }))}
              style={{
                maxWidth: 240
              }}
            />
          </div>
          <div className="field">
            <span className="field-label">{t('settings.readingFont')}</span>
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
                  onClick={() => setFont(val)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div
            className="col"
            style={{
              gap: 12
            }}
          >
            <label className="toggle">
              <input
                type="checkbox"
                checked={reducedMotion}
                aria-label={t('settings.reducedMotion')}
                onChange={(e) => setReducedMotion(e.target.checked)}
              />
              {t('settings.reducedMotion')}
            </label>
            <label className="toggle">
              <input
                type="checkbox"
                checked={reducedSound}
                aria-label={t('settings.reducedSound')}
                onChange={(e) => setReducedSound(e.target.checked)}
              />
              {t('settings.reducedSound')}
            </label>
            <label className="toggle">
              <input
                type="checkbox"
                checked={highContrast}
                aria-label={t('settings.highContrast')}
                onChange={(e) => setHighContrast(e.target.checked)}
              />
              {t('settings.highContrast')}
            </label>
          </div>
        </div>
      )
    }
  ]

  return (
    <div
      className="col center"
      style={{
        height: '100%',
        gap: 24
      }}
    >
      <Mascot mood={step === 3 ? 'happy' : 'idle'} size={90} />
      <div
        className="card"
        style={{
          width: '100%',
          maxWidth: 640
        }}
      >
        <div
          className="col"
          style={{
            gap: 20
          }}
        >
          <h2>{steps[step].title}</h2>
          {steps[step].body}
          <div className="row spread">
            <button
              className="btn btn-ghost"
              onClick={() =>
                step === 0
                  ? go({
                      name: 'welcome'
                    })
                  : setStep(step - 1)
              }
            >
              {t('common.back')}
            </button>
            {step < steps.length - 1 ? (
              <button
                className="btn btn-primary"
                disabled={!canNext}
                onClick={() => setStep(step + 1)}
              >
                {t('common.next')}
              </button>
            ) : (
              <button
                className="btn btn-success"
                disabled={!canNext || creating}
                onClick={() => void finish()}
              >
                {t('profile.finish')}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function pathIcon(id: CareerPathId): React.JSX.Element {
  const glyph =
    id === 'web' ? 'W' : id === 'game' ? 'G' : id === 'data' ? 'D' : id === 'embedded' ? 'E' : 'M'
  return (
    <span
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 24
      }}
    >
      {glyph}
    </span>
  )
}

function langsFor(id: CareerPathId): string[] {
  switch (id) {
    case 'web':
      return ['JavaScript', 'HTML', 'CSS']
    case 'game':
      return ['Python']
    case 'data':
      return ['Python', 'SQL']
    case 'embedded':
      return ['C']
    case 'mobile':
      return ['Dart']
  }
}
