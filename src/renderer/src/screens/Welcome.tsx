import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mascot } from '../components/Mascot'
import { Avatar } from '../components/Avatar'
import { useApp } from '../store'

export function Welcome(): React.JSX.Element {
  const { t } = useTranslation()
  const { profiles, go, enterGuest, setActiveProfile } = useApp()
  const [guestMode, setGuestMode] = useState(false)
  const [guestName, setGuestName] = useState('')

  const startGuest = (): void => {
    enterGuest(guestName.trim() || t('common.guest'))
    go({
      name: 'home'
    })
  }

  return (
    <div
      className="col center"
      role="main"
      aria-label={t('welcome.title')}
      style={{
        gap: 28,
        height: '100%'
      }}
    >
      <div
        className="col center"
        style={{
          gap: 8
        }}
      >
        <Mascot size={140} />
        <h1>{t('common.appName')}</h1>
        <p
          className="muted"
          style={{
            fontSize: 17
          }}
        >
          {t('common.tagline')}
        </p>
      </div>

      {profiles.length > 0 && !guestMode && (
        <div
          className="col"
          style={{
            width: '100%',
            maxWidth: 460,
            gap: 16
          }}
        >
          <div
            className="col"
            style={{
              gap: 12
            }}
          >
            <h3>{t('welcome.existing')}</h3>
            {profiles.map((p) => (
              <button
                key={p.id}
                className="card-flat row spread"
                aria-label={`${p.name}, ${t(`paths.${p.careerPath}.name`)}. ${t('common.continue')}`}
                style={{
                  cursor: 'pointer',
                  border: 'none',
                  textAlign: 'left',
                  width: '100%'
                }}
                onClick={() => {
                  setActiveProfile(p)
                  go({
                    name: 'home'
                  })
                }}
              >
                <div
                  className="row"
                  style={{
                    gap: 12
                  }}
                >
                  <Avatar id={p.avatar} size={48} />
                  <div
                    className="col"
                    style={{
                      gap: 2
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: 17
                      }}
                    >
                      {p.name}
                    </span>
                    <span className="muted">{t(`paths.${p.careerPath}.name`)}</span>
                  </div>
                </div>
                <span className="muted">{t('common.continue')}</span>
              </button>
            ))}
          </div>
          <div className="row spread">
            <button
              className="btn"
              onClick={() =>
                go({
                  name: 'onboarding'
                })
              }
            >
              {t('welcome.createProfile')}
            </button>
            <button className="btn btn-ghost" onClick={() => setGuestMode(true)}>
              {t('welcome.guestMode')}
            </button>
          </div>
        </div>
      )}

      {profiles.length === 0 && !guestMode && (
        <div
          className="row wrap center"
          style={{
            gap: 16
          }}
        >
          <button
            className="btn btn-primary btn-lg"
            onClick={() =>
              go({
                name: 'onboarding'
              })
            }
          >
            {t('welcome.createProfile')}
          </button>
          <button className="btn btn-lg" onClick={() => setGuestMode(true)}>
            {t('welcome.guestMode')}
          </button>
        </div>
      )}

      {guestMode && (
        <div
          className="card col"
          style={{
            width: '100%',
            maxWidth: 420,
            gap: 16
          }}
        >
          <p>{t('welcome.guestDescription')}</p>
          <input
            className="input"
            aria-label={t('profile.namePlaceholder')}
            placeholder={t('profile.namePlaceholder')}
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && startGuest()}
            autoFocus
          />
          <div className="row spread">
            <button className="btn btn-ghost" onClick={() => setGuestMode(false)}>
              {t('common.cancel')}
            </button>
            <button className="btn btn-primary" onClick={startGuest}>
              {t('common.continue')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
