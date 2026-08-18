import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Check, BookOpen, Radio, Settings, UserRound, Play, Lock } from 'lucide-react'
import type { CareerPathId, Progress, Stage } from '../../../shared/types'
import { Avatar } from '../components/Avatar'
import { useApp } from '../store'
import { sound } from '../lib/sound'

export function Home(): React.JSX.Element {
  const { t } = useTranslation()
  const { activeProfile, isGuest, guestPath, setGuestPath, guestProgress, go, exitSession } = useApp()
  const [stages, setStages] = useState<Stage[]>([])
  const [progress, setProgress] = useState<Record<string, Progress>>({})
  const [path, setPath] = useState<CareerPathId | null>(null)

  const activePath: CareerPathId | null = isGuest ? (guestPath as CareerPathId | null) : (activeProfile?.careerPath ?? null)

  useEffect(() => {
    void window.api.stages.list().then(setStages)
  }, [])

  useEffect(() => {
    if (isGuest) return
    if (activeProfile) {
      void window.api.progress.listForProfile(activeProfile.id).then(setProgress)
    }
  }, [activeProfile, isGuest])

  const pathStages = useMemo(
    () => (activePath ? stages.filter((s) => s.path === activePath).sort((a, b) => a.index - b.index) : []),
    [stages, activePath]
  )

  const resolvedProgress: Record<string, Progress> = isGuest ? guestProgress : progress

  const nextIncompleteIndex = useMemo(() => {
    const sorted = [...pathStages].sort((a, b) => a.index - b.index)
    return sorted.findIndex((s) => resolvedProgress[s.key]?.status !== 'complete')
  }, [pathStages, resolvedProgress])

  const completedCount = pathStages.filter((s) => resolvedProgress[s.key]?.status === 'complete').length

  const openStage = (stage: Stage): void => {
    const idx = pathStages.findIndex((s) => s.key === stage.key)
    if (idx > nextIncompleteIndex) return
    sound.click()
    go({ name: 'stage', stageKey: stage.key })
  }

  if (!activePath) {
    return (
      <div className="col" style={{ gap: 20 }}>
        <h2>{t('profile.choosePath')}</h2>
        <div className="path-grid">
          {(['web', 'game', 'data', 'embedded', 'mobile'] as CareerPathId[]).map((id) => (
            <button
              key={id}
              className="path-card"
              onClick={() => {
                setGuestPath(id)
                setPath(id)
              }}
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
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24 }}>
                  {id === 'web' ? 'W' : id === 'game' ? 'G' : id === 'data' ? 'D' : id === 'embedded' ? 'E' : 'M'}
                </span>
              </span>
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: 18 }}>{t(`paths.${id}.name`)}</strong>
              <span className="muted" style={{ fontSize: 14 }}>
                {t(`paths.${id}.description`)}
              </span>
            </button>
          ))}
        </div>
        <button className="btn btn-ghost" style={{ alignSelf: 'flex-start' }} onClick={() => go({ name: 'welcome' })}>
          {t('common.back')}
        </button>
      </div>
    )
  }

  return (
    <div className="col" style={{ gap: 24 }}>
      <div className="row spread wrap">
        <div className="row" style={{ gap: 14 }}>
          <Avatar id={isGuest ? 'panda' : (activeProfile?.avatar ?? 'panda')} size={56} />
          <div className="col" style={{ gap: 2 }}>
            <h2>{isGuest ? (guestName || t('common.guest')) : activeProfile?.name}</h2>
            <span className="muted">
              {t(`paths.${activePath}.name`)} · {t(`paths.${activePath}.description`)}
            </span>
          </div>
        </div>
        <div className="row">
          {!isGuest && (
            <button className="btn btn-ghost" onClick={() => go({ name: 'settings' })}>
              <Settings size={18} /> {t('home.settings')}
            </button>
          )}
          <button className="btn btn-ghost" onClick={exitSession}>
            <UserRound size={18} /> {t('home.switchProfile')}
          </button>
        </div>
      </div>

      <div className="card">
        <div className="row spread" style={{ marginBottom: 10 }}>
          <h3>{t('home.pathProgress')}</h3>
          <span className="muted">
            {completedCount} / {pathStages.length} {t('home.stagesComplete')}
          </span>
        </div>
        <div className="progress">
          <div
            className="progress-fill"
            style={{ width: `${pathStages.length ? (completedCount / pathStages.length) * 100 : 0}%` }}
          />
        </div>
      </div>

      {nextIncompleteIndex >= 0 && (
        <button
          className="btn btn-primary btn-lg"
          style={{ alignSelf: 'flex-start' }}
          onClick={() => openStage(pathStages[nextIncompleteIndex])}
        >
          <Play size={20} /> {completedCount === 0 ? t('home.startFirstStage') : t('home.continueLearning')}
        </button>
      )}

      <div className="col" style={{ gap: 10 }}>
        {pathStages.map((stage) => {
          const p = resolvedProgress[stage.key]
          const complete = p?.status === 'complete'
          const locked = stage.index > nextIncompleteIndex
          const current = stage.index === nextIncompleteIndex
          return (
            <div
              key={stage.key}
              className={`stage-card ${locked ? 'locked' : ''} ${complete ? 'complete' : ''}`}
              role={locked ? undefined : 'button'}
              tabIndex={locked ? -1 : 0}
              onClick={() => openStage(stage)}
              onKeyDown={(e) => e.key === 'Enter' && !locked && openStage(stage)}
            >
              <span className="stage-index">
                {complete ? <Check size={20} /> : locked ? <Lock size={16} /> : stage.index + 1}
              </span>
              <div className="col grow" style={{ gap: 2 }}>
                <strong style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16 }}>
                  {stage.titleKey}
                </strong>
                <span className="muted" style={{ fontSize: 14 }}>
                  {t(stage.conceptKey)} · {stage.kind === 'block' ? t('block.print') : stage.kind === 'code' ? t('stage.yourCode') : t('stage.reference')}
                </span>
              </div>
              {current && !complete && <span className="badge badge-primary">{t('home.nextUp')}</span>}
              {complete && <span className="badge badge-success">{t('explain.verified')}</span>}
            </div>
          )
        })}
      </div>

      <div className="row wrap" style={{ gap: 12 }}>
        <button className="btn btn-info" onClick={() => go({ name: 'resources' })}>
          <BookOpen size={18} /> {t('home.resources')}
        </button>
        <button className="btn" onClick={() => go({ name: 'multiplayer' })}>
          <Radio size={18} /> {t('home.multiplayer')}
        </button>
      </div>
    </div>
  )
}
