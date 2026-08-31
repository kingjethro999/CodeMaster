// Reward cards — post-completion celebration showing XP, streak, quest, and achievement rewards.
// Card-based UI inspired by Duolingo's swipeable reward cards.

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Zap, Flame, Target, Trophy, ChevronRight, Star } from 'lucide-react'
import { ACHIEVEMENT_DEFS } from '../../../shared/types'
import type { Achievement, DailyQuest, Streak, XPWallet } from '../../../shared/types'

interface RewardCardsProps {
  xp: XPWallet | null
  xpEarned: number
  streak: Streak | null
  quests: DailyQuest[]
  newAchievements: Achievement[]
  onDone: () => void
}

export function RewardCards({
  xp,
  xpEarned,
  streak,
  quests,
  newAchievements,
  onDone
}: RewardCardsProps): React.JSX.Element {
  const { t } = useTranslation()
  const [cardIndex, setCardIndex] = useState(0)

  const cards: { key: string; content: React.JSX.Element }[] = []

  if (xpEarned > 0) {
    cards.push({
      key: 'xp',
      content: (
        <div className="col center" style={{ gap: 12, textAlign: 'center' }}>
          <div className="reward-icon reward-icon-xp">
            <Zap size={36} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20 }}>
            {t('reward.xpEarned')}
          </h3>
          <strong style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--accent-yellow)' }}>
            +{xpEarned}
          </strong>
          {xp && (
            <span className="muted" style={{ fontSize: 14 }}>
              {t('home.level')} {xp.level} · {xp.totalXp} {t('home.xp')}
            </span>
          )}
        </div>
      )
    })
  }

  if (streak && streak.currentDailyStreak > 0) {
    cards.push({
      key: 'streak',
      content: (
        <div className="col center" style={{ gap: 12, textAlign: 'center' }}>
          <div className="reward-icon reward-icon-streak">
            <Flame size={36} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20 }}>
            {t('home.streakTitle')}
          </h3>
          <strong style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--accent-coral)' }}>
            {streak.currentDailyStreak}
          </strong>
          <span className="muted" style={{ fontSize: 14 }}>
            {t('home.dailyStreak')}
          </span>
        </div>
      )
    })
  }

  const activeQuests = quests.filter((q) => q.completed && !q.claimed)
  if (activeQuests.length > 0) {
    cards.push({
      key: 'quest',
      content: (
        <div className="col center" style={{ gap: 12, textAlign: 'center' }}>
          <div className="reward-icon reward-icon-quest">
            <Target size={36} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20 }}>
            {t('home.dailyQuests')}
          </h3>
          <div className="col" style={{ gap: 8, width: '100%' }}>
            {activeQuests.map((q) => (
              <div key={q.id} className="row spread" style={{ padding: '6px 0' }}>
                <span style={{ fontSize: 14 }}>{t(q.descriptionKey)}</span>
                <span className="badge badge-success">+{q.rewardXp} XP</span>
              </div>
            ))}
          </div>
        </div>
      )
    })
  }

  if (newAchievements.length > 0) {
    cards.push({
      key: 'achievements',
      content: (
        <div className="col center" style={{ gap: 12, textAlign: 'center' }}>
          <div className="reward-icon reward-icon-achievement">
            <Trophy size={36} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20 }}>
            {t('reward.achievementsUnlocked')}
          </h3>
          <div className="col" style={{ gap: 8, width: '100%' }}>
            {newAchievements.map((a) => {
              const def = ACHIEVEMENT_DEFS.find((d) => d.id === a.achievementId)
              return (
                <div key={a.achievementId} className="row" style={{ gap: 12, padding: '6px 0' }}>
                  <Star size={20} color="var(--accent-yellow)" />
                  <div className="col" style={{ gap: 2 }}>
                    <strong style={{ fontSize: 14 }}>{def?.nameKey ? t(def.nameKey) : a.achievementId}</strong>
                    <span className="muted" style={{ fontSize: 13 }}>
                      {def?.descriptionKey ? t(def.descriptionKey) : ''}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    })
  }

  if (cards.length === 0) {
    onDone()
    return <></>
  }

  const current = cards[cardIndex]
  const isLast = cardIndex >= cards.length - 1

  return (
    <div
      className="col center"
      style={{ gap: 20, textAlign: 'center', minHeight: 280 }}
      role="region"
      aria-label={t('reward.title')}
    >
      <div className="reward-card" style={{ width: '100%', maxWidth: 380 }}>
        {current.content}
      </div>
      <div className="row" style={{ gap: 8 }}>
        {cards.map((_, i) => (
          <span
            key={i}
            className="reward-dot"
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: i === cardIndex ? 'var(--accent-orange)' : 'var(--bg-cream-deep)',
              transition: 'background 200ms ease'
            }}
          />
        ))}
      </div>
      <button
        className="btn btn-primary"
        onClick={() => (isLast ? onDone() : setCardIndex((i) => i + 1))}
        aria-label={isLast ? t('common.done') : t('common.next')}
      >
        {isLast ? t('common.done') : t('common.next')} <ChevronRight size={18} />
      </button>
    </div>
  )
}
