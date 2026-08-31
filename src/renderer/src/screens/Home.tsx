import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Check,
  BookOpen,
  Radio,
  Settings,
  UserRound,
  Play,
  Lock,
  Flame,
  Zap,
  Battery,
  Target
} from 'lucide-react'
import type { CareerPathId, DailyQuest, Progress, Stage } from '../../../shared/types'
import { Avatar } from '../components/Avatar'
import { Mascot } from '../components/Mascot'
import { useApp } from '../store'
import { sound } from '../lib/sound'

export function Home(): React.JSX.Element {
  const { t } = useTranslation()
  const {
    activeProfile,
    isGuest,
    guestName,
    guestPath,
    setGuestPath,
    guestProgress,
    streak,
    xp,
    energy,
    go,
    exitSession
  } = useApp()
  const [stages, setStages] = useState<Stage[]>([])
  const [progress, setProgress] = useState<Record<string, Progress>>({})
  const [_path, setPath] = useState<CareerPathId | null>(null)
  const [quests, setQuests] = useState<DailyQuest[]>([])

  const activePath: CareerPathId | null = isGuest
    ? (guestPath as CareerPathId | null)
    : (activeProfile?.careerPath ?? null)

  useEffect(() => {
    void window.api.stages.list().then(setStages)
  }, [])

  useEffect(() => {
    if (isGuest) return
    if (activeProfile) {
      void window.api.progress.listForProfile(activeProfile.id).then(setProgress)
      void window.api.quests.get(activeProfile.id).then(setQuests)
    }
  }, [activeProfile, isGuest])

  const pathStages = useMemo(
    () =>
      activePath
        ? stages.filter((s) => s.path === activePath).sort((a, b) => a.index - b.index)
        : [],
    [stages, activePath]
  )

  const resolvedProgress: Record<string, Progress> = isGuest ? guestProgress : progress

  const nextIncompleteIndex = useMemo(() => {
    const sorted = [...pathStages].sort((a, b) => a.index - b.index)
    return sorted.findIndex((s) => resolvedProgress[s.key]?.status !== 'complete')
  }, [pathStages, resolvedProgress])

  const completedCount = pathStages.filter(
    (s) => resolvedProgress[s.key]?.status === 'complete'
  ).length

  const openStage = (stage: Stage): void => {
    const idx = pathStages.findIndex((s) => s.key === stage.key)
    if (idx > nextIncompleteIndex) return
    sound.click()
    go({
      name: 'stage',
      stageKey: stage.key
    })
  }

  if (!activePath) {
    return (
      <div
        className="col"
        role="main"
        aria-label={t('home.title')}
        style={{
          gap: 20
        }}
      >
        <h2>{t('profile.choosePath')}</h2>
        <div className="path-grid">
          {(['web', 'game', 'data', 'embedded', 'mobile'] as CareerPathId[]).map((id) => (
            <button
              key={id}
              className="path-card"
              aria-label={t(`paths.${id}.name`)}
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
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 24
                  }}
                >
                  {id === 'web'
                    ? 'W'
                    : id === 'game'
                      ? 'G'
                      : id === 'data'
                        ? 'D'
                        : id === 'embedded'
                          ? 'E'
                          : 'M'}
                </span>
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
            </button>
          ))}
        </div>
        <button
          className="btn btn-ghost"
          style={{
            alignSelf: 'flex-start'
          }}
          onClick={() =>
            go({
              name: 'welcome'
            })
          }
        >
          {t('common.back')}
        </button>
      </div>
    )
  }

  return (
    <div
      className="col"
      role="main"
      aria-label={t('home.title')}
      style={{
        gap: 24
      }}
    >
      <div
        className="row spread wrap"
        style={{
          alignItems: 'center'
        }}
      >
        <div
          className="row"
          style={{
            gap: 14
          }}
        >
          <Avatar id={isGuest ? 'panda' : (activeProfile?.avatar ?? 'panda')} size={56} />
          {!isGuest && streak && streak.currentDailyStreak >= 7 && (
            <Mascot mood="celebrate" size={40} />
          )}
          {!isGuest && streak && streak.currentDailyStreak > 0 && streak.currentDailyStreak < 7 && (
            <Mascot mood="excited" size={40} />
          )}
          <div
            className="col"
            style={{
              gap: 2
            }}
          >
            <h2>{isGuest ? guestName || t('common.guest') : activeProfile?.name}</h2>
            <span className="muted">
              {t(`paths.${activePath}.name`)} · {t(`paths.${activePath}.description`)}
            </span>
          </div>
        </div>
        <div
          className="row wrap"
          style={{
            gap: 8
          }}
        >
          <button
            className="btn btn-info"
            onClick={() =>
              go({
                name: 'resources'
              })
            }
          >
            <BookOpen size={18} /> {t('home.resources')}
          </button>
          <button
            className="btn btn-primary"
            onClick={() =>
              go({
                name: 'multiplayer'
              })
            }
          >
            <Radio size={18} /> {t('home.multiplayer')}
          </button>
          {!isGuest && (
            <button
              className="btn btn-ghost"
              onClick={() =>
                go({
                  name: 'settings'
                })
              }
            >
              <Settings size={18} /> {t('home.settings')}
            </button>
          )}
          <button className="btn btn-ghost" onClick={exitSession}>
            <UserRound size={18} /> {t('home.switchProfile')}
          </button>
        </div>
      </div>

      <div className="card">
        <div
          className="row spread"
          style={{
            marginBottom: 10
          }}
        >
          <h3>{t('home.pathProgress')}</h3>
          <span className="muted">
            {completedCount} / {pathStages.length} {t('home.stagesComplete')}
          </span>
        </div>
        <div className="progress">
          <div
            className="progress-fill"
            style={{
              width: `${pathStages.length ? (completedCount / pathStages.length) * 100 : 0}%`
            }}
          />
        </div>
      </div>

      {!isGuest &&
        streak &&
        (streak.currentDailyStreak > 0 || streak.currentCompletionStreak > 0) && (
          <div
            className="card"
            style={{
              background: 'var(--surface-warm)'
            }}
          >
            <div
              className="row"
              style={{
                gap: 16,
                alignItems: 'center'
              }}
            >
              {streak.currentDailyStreak > 0 && (
                <div
                  className="row"
                  style={{
                    gap: 8,
                    alignItems: 'center'
                  }}
                >
                  <Flame size={28} color="var(--accent-coral)" />
                  <div
                    className="col"
                    style={{
                      gap: 0
                    }}
                  >
                    <strong
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 24
                      }}
                    >
                      {streak.currentDailyStreak}
                    </strong>
                    <span
                      className="muted"
                      style={{
                        fontSize: 13
                      }}
                    >
                      {t('home.dailyStreak')}
                    </span>
                  </div>
                </div>
              )}
              {streak.currentCompletionStreak > 0 && (
                <div
                  className="row"
                  style={{
                    gap: 8,
                    alignItems: 'center'
                  }}
                >
                  <Check size={28} color="var(--accent-green)" />
                  <div
                    className="col"
                    style={{
                      gap: 0
                    }}
                  >
                    <strong
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 24
                      }}
                    >
                      {streak.currentCompletionStreak}
                    </strong>
                    <span
                      className="muted"
                      style={{
                        fontSize: 13
                      }}
                    >
                      {t('home.completionStreak')}
                    </span>
                  </div>
                </div>
              )}
              <div
                className="col"
                style={{
                  gap: 0,
                  marginLeft: 'auto'
                }}
              >
                <span
                  className="muted"
                  style={{
                    fontSize: 12
                  }}
                >
                  {t('home.bestDailyStreak')}: {streak.bestDailyStreak}
                </span>
                <span
                  className="muted"
                  style={{
                    fontSize: 12
                  }}
                >
                  {t('home.bestCompletionStreak')}: {streak.bestCompletionStreak}
                </span>
              </div>
            </div>
          </div>
        )}

      {!isGuest && xp && (
        <div
          className="card"
          aria-label={`${t('home.level')} ${xp.level}, ${xp.totalXp} ${t('home.xp')}`}
          style={{
            background: 'var(--surface-warm)'
          }}
        >
          <div
            className="row spread"
            style={{
              alignItems: 'center'
            }}
          >
            <div
              className="row"
              style={{
                gap: 12,
                alignItems: 'center'
              }}
            >
              <Zap size={28} color="var(--accent-yellow)" />
              <div
                className="col"
                style={{
                  gap: 0
                }}
              >
                <span
                  className="muted"
                  style={{
                    fontSize: 13
                  }}
                >
                  {t('home.level')} {xp.level}
                </span>
                <strong
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 20
                  }}
                >
                  {xp.totalXp} {t('home.xp')}
                </strong>
              </div>
            </div>
            <div
              className="col"
              style={{
                gap: 0,
                alignItems: 'flex-end'
              }}
            >
              <span
                className="muted"
                style={{
                  fontSize: 12
                }}
              >
                {xp.levelXp} / {100 + (xp.level - 1) * 50} {t('home.toNextLevel')}
              </span>
              <div
                className="progress"
                style={{
                  width: 120,
                  height: 6,
                  marginTop: 4
                }}
              >
                <div
                  className="progress-fill"
                  style={{
                    width: `${(xp.levelXp / (100 + (xp.level - 1) * 50)) * 100}%`,
                    background: 'var(--accent-yellow)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {!isGuest && energy && (
        <div
          className="card"
          aria-label={`${t('home.energy')} ${energy.currentEnergy} / ${energy.maxEnergy}`}
        >
          <div
            className="row spread"
            style={{
              alignItems: 'center'
            }}
          >
            <div
              className="row"
              style={{
                gap: 8,
                alignItems: 'center'
              }}
            >
              <Battery
                size={22}
                color={energy.currentEnergy <= 5 ? 'var(--accent-coral)' : 'var(--accent-green)'}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600
                }}
              >
                {energy.currentEnergy} / {energy.maxEnergy}
              </span>
              <span
                className="muted"
                style={{
                  fontSize: 13
                }}
              >
                {t('home.energy')}
              </span>
            </div>
            {streak && streak.streakFreezes > 0 && (
              <span
                className="muted"
                style={{
                  fontSize: 13
                }}
              >
                {streak.streakFreezes} {t('home.streakFreezes')}
              </span>
            )}
          </div>
        </div>
      )}

      {!isGuest && quests.length > 0 && (
        <div className="card">
          <h3
            style={{
              marginBottom: 10,
              fontFamily: 'var(--font-display)'
            }}
          >
            <Target
              size={18}
              style={{
                verticalAlign: 'middle',
                marginRight: 6
              }}
            />
            {t('home.dailyQuests')}
          </h3>
          <div
            className="col"
            style={{
              gap: 8
            }}
          >
            {quests.map((q) => (
              <div
                key={q.id}
                className="row spread"
                style={{
                  alignItems: 'center',
                  padding: '6px 0'
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    flex: 1
                  }}
                >
                  {t(q.descriptionKey)}
                </span>
                {q.completed && !q.claimed && (
                  <button
                    className="btn btn-success"
                    style={{
                      fontSize: 13,
                      padding: '4px 12px'
                    }}
                    onClick={async () => {
                      if (!activeProfile) return
                      await window.api.quests.claim(activeProfile.id, q.id)
                      setQuests(await window.api.quests.get(activeProfile.id))
                      sound.success()
                    }}
                  >
                    +{q.rewardXp} XP
                  </button>
                )}
                {q.completed && q.claimed && (
                  <span
                    className="badge badge-success"
                    style={{
                      fontSize: 12
                    }}
                  >
                    {t('home.claimed')}
                  </span>
                )}
                {!q.completed && (
                  <span
                    className="muted"
                    style={{
                      fontSize: 13
                    }}
                  >
                    {q.progress}/{q.target}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {nextIncompleteIndex >= 0 && (
        <button
          className="btn btn-primary btn-lg"
          style={{
            alignSelf: 'flex-start'
          }}
          onClick={() => openStage(pathStages[nextIncompleteIndex])}
        >
          <Play size={20} />{' '}
          {completedCount === 0 ? t('home.startFirstStage') : t('home.continueLearning')}
        </button>
      )}

      <div
        className="col"
        style={{
          gap: 10
        }}
      >
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
              aria-label={`${stage.titleKey}. ${complete ? t('explain.verified') : locked ? t('stage.locked') : current ? t('home.nextUp') : ''}`}
              aria-current={current && !complete ? 'step' : undefined}
              onClick={() => openStage(stage)}
              onKeyDown={(e) => e.key === 'Enter' && !locked && openStage(stage)}
            >
              <span className="stage-index">
                {complete ? <Check size={20} /> : locked ? <Lock size={16} /> : stage.index + 1}
              </span>
              <div
                className="col grow"
                style={{
                  gap: 2
                }}
              >
                <strong
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: 16
                  }}
                >
                  {stage.titleKey}
                </strong>
                <span
                  className="muted"
                  style={{
                    fontSize: 14
                  }}
                >
                  {t(stage.conceptKey)} ·{' '}
                  {stage.kind === 'block'
                    ? t('block.print')
                    : stage.kind === 'code'
                      ? t('stage.yourCode')
                      : t('stage.reference')}
                </span>
              </div>
              {current && !complete && (
                <span className="badge badge-primary">{t('home.nextUp')}</span>
              )}
              {complete && <span className="badge badge-success">{t('explain.verified')}</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
