// The explain-it-back gate: a stage is only complete when the kid can explain
// their own solution in their own words, and the explanation matches the code.

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { Stage } from '../../../shared/types'
import { useApp } from '../store'
import { sound } from '../lib/sound'

export function ExplainGate({
  stage,
  source,
  onComplete,
  onSkip
}: {
  stage: Stage
  source: string
  onComplete: () => void
  onSkip: () => void
}): React.JSX.Element {
  const { t } = useTranslation()
  const { activeProfile, isGuest, updateGuestProgress } = useApp()
  const [explanation, setExplanation] = useState('')
  const [checking, setChecking] = useState(false)
  const [result, setResult] = useState<{
    passed: boolean
    feedback: string
  } | null>(null)

  const check = async (): Promise<void> => {
    if (explanation.trim().length < 5 || checking) return
    setChecking(true)
    const profileId = activeProfile?.id ?? 0
    const res = await window.api.ai.checkExplanation(profileId, stage.key, explanation, source)
    setResult(res)
    setChecking(false)
    if (res.passed) {
      sound.finish()
      if (isGuest) {
        updateGuestProgress(stage.key, {
          status: 'complete',
          explanation,
          explanationCheck: 'pass',
          completedAt: new Date().toISOString()
        })
      } else if (activeProfile) {
        await window.api.progress.upsert(activeProfile.id, stage.key, {
          status: 'complete',
          explanation,
          explanationCheck: 'pass',
          completedAt: new Date().toISOString()
        })
        await window.api.ai.recordAttempt(activeProfile.id, stage.key, true)
      }
      onComplete()
    }
  }

  return (
    <div
      className="col"
      role="region"
      aria-label={t('explain.title')}
      style={{
        gap: 16
      }}
    >
      <h3>{t('explain.title')}</h3>
      <p>{t('explain.prompt')}</p>
      <p
        className="muted"
        style={{
          fontSize: 14
        }}
      >
        {t('explain.hint')}
      </p>
      <textarea
        className="textarea"
        aria-label={t('explain.placeholder')}
        placeholder={t('explain.placeholder')}
        value={explanation}
        onChange={(e) => setExplanation(e.target.value)}
        autoFocus
        disabled={result?.passed === true}
      />
      {result && (
        <div className={`notice ${result.passed ? 'notice-success' : 'notice-error'}`} role={result.passed ? 'status' : 'alert'}>
          {result.passed ? t('explain.checkPassed') : t('explain.checkFailed')}
          {!result.passed && result.feedback && <span> — {result.feedback}</span>}
        </div>
      )}
      <div className="row spread">
        <button className="btn btn-ghost" aria-label={t('explain.explainLater')} onClick={onSkip} disabled={checking}>
          {t('explain.explainLater')}
        </button>
        <button
          className="btn btn-success"
          aria-label={t('explain.submit')}
          onClick={() => void check()}
          disabled={explanation.trim().length < 5 || checking || result?.passed === true}
        >
          {checking ? t('common.loading') : t('explain.submit')}
        </button>
      </div>
    </div>
  )
}
