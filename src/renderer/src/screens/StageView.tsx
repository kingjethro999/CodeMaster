// Stage runner: instructions + editor (block/code/reference) + run + console +
// turtle canvas + hint ladder + explain-it-back completion gate.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Lightbulb,
  Play,
  BookOpen,
  ExternalLink,
  Zap
} from 'lucide-react'
import type { Achievement, BlockNode, DailyQuest, RunResult, Stage } from '../../../shared/types'
import { checkKeywords, runMasterScript, validateRun } from '../../../shared/interpreter'
import { collectTypes, BlockEditor } from '../components/BlockEditor'
import { CodeEditor } from '../components/CodeEditor'
import { TurtleCanvas } from '../components/TurtleCanvas'
import { Mascot } from '../components/Mascot'
import { useConfetti } from '../components/Confetti'
import { ExplainGate } from './ExplainGate'
import { RewardCards } from '../components/RewardCards'
import { useApp } from '../store'
import { sound } from '../lib/sound'

export function StageView({ stage }: { stage: Stage }): React.JSX.Element {
  const { t } = useTranslation()
  const {
    go,
    activeProfile,
    isGuest,
    updateGuestProgress,
    guestProgress,
    refreshProfiles,
    refreshStreak,
    refreshXP,
    refreshEnergy,
    refreshAchievements,
    energy
  } = useApp()
  const [source, setSource] = useState(stage.starterCode ?? '')
  const [blocks, setBlocks] = useState<BlockNode[]>([])
  const [result, setResult] = useState<RunResult | null>(null)
  const [lastRunSource, setLastRunSource] = useState('')
  const [hint, setHint] = useState<string | null>(null)
  const [hintLoading, setHintLoading] = useState(false)
  const [passed, setPassed] = useState(false)
  const [feedback, setFeedback] = useState<string[]>([])
  const [attempts, setAttempts] = useState(0)
  const [showExplain, setShowExplain] = useState(false)
  const [stageComplete, setStageComplete] = useState(false)
  const [xpEarned, setXpEarned] = useState(0)
  const [hintUsed, setHintUsed] = useState(false)
  const [showRewards, setShowRewards] = useState(false)
  const [newAchievements, setNewAchievements] = useState<Achievement[]>([])
  const [completedQuests, setCompletedQuests] = useState<DailyQuest[]>([])
  const { fire } = useConfetti()
  const rafRef = useRef(0)

  const isReference = stage.kind === 'reference'

  useEffect(() => {
    setSource(stage.starterCode ?? '')
    setBlocks([])
    setResult(null)
    setHint(null)
    setPassed(false)
    setFeedback([])
    setAttempts(0)
    setShowExplain(false)
    setStageComplete(false)
    setXpEarned(0)
    setHintUsed(false)
    if (activeProfile) {
      void window.api.progress.get(activeProfile.id, stage.key).then((p) => {
        if (p) {
          setAttempts(p.attempts)
          if (p.status === 'complete') setStageComplete(true)
        }
      })
    } else {
      const gp = guestProgress[stage.key]
      if (gp?.status === 'complete') setStageComplete(true)
    }
  }, [stage.key, activeProfile, guestProgress])

  const persistedAttempts = useMemo(
    () => (isGuest ? (guestProgress[stage.key]?.attempts ?? 0) : attempts),
    [isGuest, guestProgress, stage.key, attempts]
  )

  const persistInProgress = useCallback(async (): Promise<void> => {
    if (isGuest) {
      updateGuestProgress(stage.key, {
        status: 'in_progress',
        attempts: persistedAttempts + 1
      })
    } else if (activeProfile) {
      await window.api.progress.upsert(activeProfile.id, stage.key, {
        status: 'in_progress',
        attempts: persistedAttempts + 1
      })
    }
  }, [isGuest, activeProfile, stage.key, persistedAttempts, updateGuestProgress])

  const evaluate = useCallback(
    (src: string, blockList: BlockNode[]): RunResult => {
      const res = runMasterScript(src)
      setResult(res)
      setLastRunSource(src)
      if (isGuest)
        updateGuestProgress(stage.key, {
          attempts: persistedAttempts + 1
        })
      if (res.ok) {
        const missingKeywords = stage.validation.requireKeywords
          ? checkKeywords(src, stage.validation.requireKeywords)
          : []
        const missingBlocks = stage.validation.requireBlockTypes
          ? stage.validation.requireBlockTypes.filter(
              (type) => !collectTypes(blockList).includes(type)
            )
          : []
        const v = validateRun(res, stage.validation)
        const allMessages = [...v.messages]
        if (missingKeywords.length) {
          allMessages.push(`${t('stage.uses')} ${missingKeywords.join(', ')}`)
        }
        if (missingBlocks.length) {
          allMessages.push(`${t('stage.uses')} ${missingBlocks.join(', ')}`)
        }
        const ok = v.passed && missingKeywords.length === 0 && missingBlocks.length === 0
        setPassed(ok)
        setFeedback(allMessages)
        if (ok) {
          sound.success()
          setShowExplain(true)
          void window.api.ai.recordAttempt(activeProfile?.id ?? 0, stage.key, true)
        } else {
          sound.fail()
          setAttempts((a) => a + 1)
          void window.api.ai.recordAttempt(activeProfile?.id ?? 0, stage.key, false)
          if (activeProfile) void window.api.streak.reset(activeProfile.id)
        }
      } else {
        setPassed(false)
        setFeedback([res.error ?? ''])
        sound.fail()
        setAttempts((a) => a + 1)
        void window.api.ai.recordAttempt(activeProfile?.id ?? 0, stage.key, false)
        if (activeProfile) void window.api.streak.reset(activeProfile.id)
      }
      return res
    },
    [stage, isGuest, persistedAttempts, updateGuestProgress, activeProfile, t]
  )

  const run = async (): Promise<void> => {
    if (activeProfile && energy && energy.currentEnergy <= 0) return
    if (activeProfile) {
      await window.api.energy.spend(activeProfile.id)
      await refreshEnergy()
    }
    void persistInProgress()
    const res = evaluate(source, blocks)
    void res
  }

  const requestHint = async (): Promise<void> => {
    setHintLoading(true)
    setHintUsed(true)
    sound.hint()
    const content = await window.api.ai.requestHint(
      activeProfile?.id ?? 0,
      stage.key,
      persistedAttempts
    )
    setHint(content)
    setHintLoading(false)
  }

  const markComplete = useCallback(async (): Promise<void> => {
    setStageComplete(true)
    setShowExplain(false)
    fire()
    sound.finish()
    if (!isGuest && activeProfile) {
      await window.api.streak.increment(activeProfile.id)
      await window.api.streak.recordCompletion(activeProfile.id)
      // XP: base 10, first-try bonus 5, no-hint bonus 5, streak multiplier
      let xpAmount = 10
      if (attempts === 0) xpAmount += 5
      if (!hintUsed) xpAmount += 5
      const streakVal = await window.api.streak.get(activeProfile.id)
      if (streakVal.currentDailyStreak >= 7) xpAmount = Math.floor(xpAmount * 1.5)
      else if (streakVal.currentDailyStreak >= 3) xpAmount = Math.floor(xpAmount * 1.25)
      const wallet = await window.api.xp.add(activeProfile.id, xpAmount)
      setXpEarned(xpAmount)
      // Energy refund on success
      await window.api.energy.refund(activeProfile.id)
      // Quest progress
      await window.api.quests.updateProgress(activeProfile.id, 'complete_stages', 1)
      if (!hintUsed) await window.api.quests.updateProgress(activeProfile.id, 'no_hints', 1)
      if (attempts === 0) await window.api.quests.updateProgress(activeProfile.id, 'first_try', 1)
      // Achievements check
      const achieved = await window.api.achievements.list(activeProfile.id)
      const achievedIds = new Set(achieved.map((a) => a.achievementId))
      const newlyEarned: Achievement[] = []
      const checkAchievement = async (id: string): Promise<void> => {
        if (!achievedIds.has(id)) {
          const granted = await window.api.achievements.grant(activeProfile.id, id)
          if (granted) {
            const a = await window.api.achievements.list(activeProfile.id)
            const match = a.find((x) => x.achievementId === id)
            if (match) newlyEarned.push(match)
          }
        }
      }
      await checkAchievement('first_stage')
      if (wallet.level >= 10) await checkAchievement('explainer')
      if (streakVal.currentDailyStreak >= 3) await checkAchievement('streak_3')
      if (streakVal.currentDailyStreak >= 7) await checkAchievement('streak_7')
      if (streakVal.currentDailyStreak >= 30) await checkAchievement('streak_30')
      if (wallet.totalXp >= 100) await checkAchievement('xp_100')
      if (wallet.totalXp >= 500) await checkAchievement('xp_500')
      if (wallet.totalXp >= 1000) await checkAchievement('xp_1000')
      await refreshProfiles()
      await refreshStreak()
      await refreshXP()
      await refreshEnergy()
      await refreshAchievements()
      // Collect completed quests for reward display
      const allQuests = await window.api.quests.get(activeProfile.id)
      const justCompleted = allQuests.filter((q) => q.completed && !q.claimed)
      setNewAchievements(newlyEarned)
      setCompletedQuests(justCompleted)
      setShowRewards(true)
    }
    // report race progress if a LAN match is active
    const race = localStorage.getItem('codemaster:race')
    if (race) {
      try {
        const parsed = JSON.parse(race) as {
          stageKey: string
          mode: string
        }
        if (parsed.stageKey === stage.key) {
          if (parsed.mode === 'most_completed') {
            void window.api.multiplayer.reportStage(false)
          } else {
            void window.api.multiplayer.reportStage(true)
          }
        }
      } catch {
        // ignore
      }
    }
    cancelAnimationFrame(rafRef.current)
  }, [
    stage.key,
    isGuest,
    activeProfile,
    fire,
    refreshProfiles,
    refreshStreak,
    refreshXP,
    refreshEnergy,
    refreshAchievements,
    attempts,
    hintUsed
  ])

  const goNext = (): void => {
    const nextKey = nextStageKey(stage.key)
    if (nextKey) {
      go({
        name: 'stage',
        stageKey: nextKey
      })
    } else {
      go({
        name: 'home'
      })
    }
  }

  const skipExplanation = (): void => {
    // Mark explaining so the kid can return, but don't mark complete.
    if (!isGuest && activeProfile) {
      void window.api.progress.upsert(activeProfile.id, stage.key, {
        status: 'explaining'
      })
    }
    setShowExplain(false)
  }

  if (stageComplete && !showRewards) {
    return (
      <div
        className="col center"
        role="main"
        aria-label={t('stage.stageComplete')}
        style={{
          height: '100%',
          gap: 20,
          textAlign: 'center'
        }}
      >
        <Mascot mood={xpEarned >= 20 ? 'celebrate' : 'excited'} size={150} />
        <h2>{t('stage.stageComplete')}</h2>
        {xpEarned > 0 && (
          <div
            className="row"
            style={{
              gap: 8,
              alignItems: 'center',
              color: 'var(--accent-yellow)'
            }}
          >
            <Zap size={22} />
            <strong
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 22
              }}
            >
              +{xpEarned} XP
            </strong>
          </div>
        )}
        <p className="muted">{t('explain.checkPassed')}</p>
        <div
          className="row"
          style={{
            gap: 12
          }}
        >
          <button
            className="btn btn-ghost"
            aria-label={t('common.back')}
            onClick={() =>
              go({
                name: 'home'
              })
            }
          >
            {t('common.back')}
          </button>
          <button className="btn btn-success btn-lg" aria-label={nextStageKey(stage.key) ? t('stage.nextStage') : t('common.done')} onClick={goNext}>
            {nextStageKey(stage.key) ? t('stage.nextStage') : t('common.done')}{' '}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    )
  }

  if (stageComplete && showRewards) {
    return (
      <div className="col center" role="main" aria-label={t('reward.title')} style={{ height: '100%', gap: 20 }}>
        <RewardCards
          xp={xp}
          xpEarned={xpEarned}
          streak={streak}
          quests={completedQuests}
          newAchievements={newAchievements}
          onDone={() => {
            setShowRewards(false)
            goNext()
          }}
        />
      </div>
    )
  }

  return (
    <div
      className="col"
      role="main"
      aria-label={stage.titleKey}
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
        <div
          className="col center"
          style={{
            gap: 2
          }}
        >
          <h2>{stage.titleKey}</h2>
          <span className="muted">{t(stage.conceptKey)}</span>
        </div>
        <div
          className="row"
          style={{
            gap: 10
          }}
        >
          <button className="btn" aria-label={t('stage.hint')} onClick={() => void requestHint()} disabled={hintLoading}>
            <Lightbulb size={18} /> {hintLoading ? t('common.loading') : t('stage.hint')}
          </button>
          <button className="btn btn-primary" aria-label={t('stage.run')} onClick={run}>
            <Play size={18} /> {t('stage.run')}
          </button>
        </div>
      </div>

      {hint && (
        <div className="notice notice-info" role="status">
          <Mascot mood="think" size={28} />
          <HelpCircle
            size={18}
            style={{
              flexShrink: 0
            }}
          />
          <span>{hint}</span>
        </div>
      )}

      <div className="card">
        <h3
          style={{
            marginBottom: 8
          }}
        >
          {t('stage.instructions')}
        </h3>
        <p
          style={{
            fontSize: 17
          }}
        >
          {stage.instructionsKey}
        </p>
        {stage.kind === 'reference' && stage.reference && (
          <div
            className="col"
            style={{
              gap: 10,
              marginTop: 14
            }}
          >
            <div className="row">
              <BookOpen size={18} /> <strong>{stage.reference.title}</strong>
            </div>
            <a
              className="btn btn-info"
              href={stage.reference.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t('stage.openResource')}: ${stage.reference.title}`}
              onClick={() => sound.click()}
            >
              <ExternalLink size={18} /> {t('stage.openResource')}
            </a>
            <p
              className="muted"
              style={{
                fontSize: 14
              }}
            >
              {t('reference.why', {
                why: stage.reference.whyKey
              })}
            </p>
          </div>
        )}
        {isReference && (
          <div
            className="row"
            style={{
              marginTop: 16
            }}
          >
            <button className="btn btn-primary" aria-label={t('common.done')} onClick={() => setShowExplain(true)}>
              {t('common.done')}
            </button>
          </div>
        )}
      </div>

      {!isReference && (
        <div className="stage-run-layout">
          <div
            className="col"
            style={{
              gap: 16
            }}
          >
            {stage.kind === 'block' ? (
              <BlockEditor
                stage={stage}
                onChange={(src, bl) => {
                  setSource(src)
                  setBlocks(bl)
                }}
              />
            ) : (
              <CodeEditor
                starter={stage.starterCode ?? ''}
                value={source}
                onChange={setSource}
                onSubmit={run}
              />
            )}
          </div>
          <div
            className="col"
            style={{
              gap: 16
            }}
          >
            <TurtleCanvas result={result} />
            <div
              className="col"
              style={{
                gap: 8
              }}
            >
              <span className="field-label">{t('stage.console')}</span>
              <div className="console" aria-live="polite">
                {!result && <span className="console-hint">{t('stage.outputEmpty')}</span>}
                {result &&
                  result.console.map((line, i) => (
                    <div key={i} className={result.ok ? '' : 'console-error'}>
                      {line}
                    </div>
                  ))}
                {result && result.error && <div className="console-error">{result.error}</div>}
              </div>
            </div>
            {feedback.length > 0 && passed && (
              <div className="notice notice-success" role="status">
                <Mascot mood="excited" size={32} />
                <span>{t('stage.correct')}</span>
              </div>
            )}
            {feedback.length > 0 && !passed && (
              <div className="notice notice-error" role="alert">
                <Mascot mood="sad" size={32} />
                <div
                  className="col"
                  style={{
                    gap: 4
                  }}
                >
                  <span>{t('stage.needsWork')}</span>
                  {feedback.map((f, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: 14
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showExplain && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={t('explain.title')} onClick={() => {}}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <ExplainGate
              stage={stage}
              source={isReference ? (stage.reference?.url ?? '') : lastRunSource || source}
              onComplete={() => void markComplete()}
              onSkip={skipExplanation}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export function nextStageKey(key: string): string | undefined {
  const match = key.match(/^(\w+)-(\d+)$/)
  if (!match) return undefined
  const [, path, num] = match
  return `${path}-${Number(num) + 1}`
}
