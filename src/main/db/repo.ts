// Typed data access for profiles, progress, and AI sessions.

import type {
  Achievement,
  AISession,
  AISessionStatus,
  AIHintEntry,
  DailyQuest,
  EnergyState,
  Profile,
  ProfileInput,
  ProfileSettings,
  Progress,
  QuestType,
  StageStatus,
  Streak,
  XPWallet
} from '../../shared/types'
import { getConn } from './index'

interface ProfileRow {
  id: number
  name: string
  avatar: string
  age_band: string
  career_path: string
  interests: string
  settings: string
  created_at: string
}

interface ProgressRow {
  stage_key: string
  status: string
  attempts: number
  explanation: string | null
  explanation_check: string | null
  completed_at: string | null
}

interface AISessionRow {
  session_id: string
  profile_id: number
  stage_key: string
  status: string
  current_hint_tier: number
  interaction_history: string
  concept_struggles: string
  variant_payload: string | null
  updated_at: string
}

const DEFAULT_SETTINGS: ProfileSettings = {
  readingFont: 'default',
  reducedMotion: false,
  reducedSound: false,
  highContrast: false,
  colorBlind: false,
  audioSpeed: 1,
  textScale: 1
}

function toProfile(r: ProfileRow): Profile {
  let settings: ProfileSettings
  try {
    settings = {
      ...DEFAULT_SETTINGS,
      ...JSON.parse(r.settings)
    }
  } catch {
    settings = DEFAULT_SETTINGS
  }
  let interests: string[] = []
  try {
    interests = JSON.parse(r.interests)
  } catch {
    interests = []
  }
  return {
    id: r.id,
    name: r.name,
    avatar: r.avatar,
    ageBand: r.age_band as Profile['ageBand'],
    careerPath: r.career_path as Profile['careerPath'],
    interests,
    settings,
    createdAt: r.created_at
  }
}

function toProgress(r: ProgressRow): Progress {
  return {
    stageKey: r.stage_key,
    status: r.status as StageStatus,
    attempts: r.attempts,
    explanation: r.explanation ?? undefined,
    explanationCheck: (r.explanation_check as Progress['explanationCheck']) ?? undefined,
    completedAt: r.completed_at ?? undefined
  }
}

export function listProfiles(): Profile[] {
  const rows = getConn()
    .prepare('SELECT * FROM profiles ORDER BY created_at ASC')
    .all() as ProfileRow[]
  return rows.map(toProfile)
}

export function getProfile(id: number): Profile | undefined {
  const row = getConn().prepare('SELECT * FROM profiles WHERE id = ?').get(id) as
    ProfileRow | undefined
  return row ? toProfile(row) : undefined
}

export function createProfile(input: ProfileInput): Profile {
  const info = getConn()
    .prepare(
      'INSERT INTO profiles (name, avatar, age_band, career_path, interests, settings) VALUES (?, ?, ?, ?, ?, ?)'
    )
    .run(
      input.name,
      input.avatar,
      input.ageBand,
      input.careerPath,
      JSON.stringify(input.interests),
      JSON.stringify(input.settings)
    )
  return getProfile(Number(info.lastInsertRowid)) as Profile
}

export function updateProfile(id: number, patch: Partial<ProfileInput>): Profile | undefined {
  const existing = getProfile(id)
  if (!existing) return undefined
  const merged: ProfileInput = {
    name: patch.name ?? existing.name,
    avatar: patch.avatar ?? existing.avatar,
    ageBand: patch.ageBand ?? existing.ageBand,
    careerPath: patch.careerPath ?? existing.careerPath,
    interests: patch.interests ?? existing.interests,
    settings: {
      ...existing.settings,
      ...patch.settings
    }
  }
  getConn()
    .prepare(
      'UPDATE profiles SET name = ?, avatar = ?, age_band = ?, career_path = ?, interests = ?, settings = ? WHERE id = ?'
    )
    .run(
      merged.name,
      merged.avatar,
      merged.ageBand,
      merged.careerPath,
      JSON.stringify(merged.interests),
      JSON.stringify(merged.settings),
      id
    )
  return getProfile(id)
}

export function deleteProfile(id: number): void {
  const tx = getConn().transaction(() => {
    getConn().prepare('DELETE FROM progress WHERE profile_id = ?').run(id)
    getConn().prepare('DELETE FROM ai_exercise_sessions WHERE profile_id = ?').run(id)
    getConn().prepare('DELETE FROM streaks WHERE profile_id = ?').run(id)
    getConn().prepare('DELETE FROM xp_wallet WHERE profile_id = ?').run(id)
    getConn().prepare('DELETE FROM energy WHERE profile_id = ?').run(id)
    getConn().prepare('DELETE FROM daily_quests WHERE profile_id = ?').run(id)
    getConn().prepare('DELETE FROM achievements WHERE profile_id = ?').run(id)
    getConn().prepare('DELETE FROM profiles WHERE id = ?').run(id)
  })
  tx()
}

export function getProgress(profileId: number, stageKey: string): Progress | undefined {
  const row = getConn()
    .prepare('SELECT * FROM progress WHERE profile_id = ? AND stage_key = ?')
    .get(profileId, stageKey) as ProgressRow | undefined
  return row ? toProgress(row) : undefined
}

export function listProgress(profileId: number): Record<string, Progress> {
  const rows = getConn()
    .prepare('SELECT * FROM progress WHERE profile_id = ?')
    .all(profileId) as ProgressRow[]
  const map: Record<string, Progress> = {}
  for (const r of rows) map[r.stage_key] = toProgress(r)
  return map
}

export function upsertProgress(
  profileId: number,
  stageKey: string,
  patch: Partial<
    Pick<Progress, 'status' | 'attempts' | 'explanation' | 'explanationCheck' | 'completedAt'>
  >
): Progress {
  const existing = getProgress(profileId, stageKey)
  const status = patch.status ?? existing?.status ?? 'not_started'
  const attempts = patch.attempts ?? existing?.attempts ?? 0
  const explanation = patch.explanation ?? existing?.explanation ?? null
  const check = patch.explanationCheck ?? existing?.explanationCheck ?? null
  const completedAt = patch.completedAt ?? existing?.completedAt ?? null
  getConn()
    .prepare(
      `INSERT INTO progress (profile_id, stage_key, status, attempts, explanation, explanation_check, completed_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(profile_id, stage_key) DO UPDATE SET
         status = excluded.status,
         attempts = excluded.attempts,
         explanation = excluded.explanation,
         explanation_check = excluded.explanation_check,
         completed_at = excluded.completed_at`
    )
    .run(profileId, stageKey, status, attempts, explanation, check, completedAt)
  return getProgress(profileId, stageKey) as Progress
}

function toAISession(r: AISessionRow): AISession {
  let history: AIHintEntry[] = []
  let struggles: string[] = []
  let variant: unknown = null
  try {
    history = JSON.parse(r.interaction_history)
  } catch {
    history = []
  }
  try {
    struggles = JSON.parse(r.concept_struggles)
  } catch {
    struggles = []
  }
  try {
    variant = r.variant_payload ? JSON.parse(r.variant_payload) : null
  } catch {
    variant = null
  }
  return {
    sessionId: r.session_id,
    profileId: r.profile_id,
    stageKey: r.stage_key,
    status: r.status as AISessionStatus,
    currentHintTier: r.current_hint_tier,
    interactionHistory: history,
    conceptStruggles: struggles,
    variantPayload: variant,
    updatedAt: r.updated_at
  }
}

export function getAISession(profileId: number, stageKey: string): AISession | undefined {
  const row = getConn()
    .prepare(
      'SELECT * FROM ai_exercise_sessions WHERE profile_id = ? AND stage_key = ? ORDER BY updated_at DESC LIMIT 1'
    )
    .get(profileId, stageKey) as AISessionRow | undefined
  return row ? toAISession(row) : undefined
}

export function createAISession(profileId: number, stageKey: string): AISession {
  const sessionId = crypto.randomUUID()
  const now = new Date().toISOString()
  getConn()
    .prepare(
      'INSERT INTO ai_exercise_sessions (session_id, profile_id, stage_key, updated_at) VALUES (?, ?, ?, ?)'
    )
    .run(sessionId, profileId, stageKey, now)
  return getAISession(profileId, stageKey) as AISession
}

export function updateAISession(
  profileId: number,
  stageKey: string,
  patch: Partial<{
    status: AISessionStatus
    currentHintTier: number
    interactionHistory: AIHintEntry[]
    conceptStruggles: string[]
    variantPayload: unknown
  }>
): AISession | undefined {
  const existing = getAISession(profileId, stageKey)
  if (!existing) return undefined
  const status = patch.status ?? existing.status
  const tier = patch.currentHintTier ?? existing.currentHintTier
  const history = patch.interactionHistory ?? existing.interactionHistory
  const struggles = patch.conceptStruggles ?? existing.conceptStruggles
  const variant =
    patch.variantPayload !== undefined ? patch.variantPayload : existing.variantPayload
  getConn()
    .prepare(
      `UPDATE ai_exercise_sessions SET
        status = ?, current_hint_tier = ?, interaction_history = ?, concept_struggles = ?,
        variant_payload = ?, updated_at = ?
       WHERE profile_id = ? AND stage_key = ?`
    )
    .run(
      status,
      tier,
      JSON.stringify(history),
      JSON.stringify(struggles),
      variant === null || variant === undefined ? null : JSON.stringify(variant),
      new Date().toISOString(),
      profileId,
      stageKey
    )
  return getAISession(profileId, stageKey)
}

export function completeAISession(profileId: number, stageKey: string): void {
  updateAISession(profileId, stageKey, {
    status: 'completed'
  })
}

export function abandonAISessionsForProfile(profileId: number): void {
  getConn()
    .prepare(
      "UPDATE ai_exercise_sessions SET status = 'abandoned' WHERE profile_id = ? AND status = 'in_progress'"
    )
    .run(profileId)
}

// ---- Streaks -----------------------------------------------------------

interface StreakRow {
  profile_id: number
  current_completion_streak: number
  best_completion_streak: number
  current_daily_streak: number
  best_daily_streak: number
  last_active_date: string | null
  streak_freezes: number
}

function toStreak(r: StreakRow): Streak {
  return {
    profileId: r.profile_id,
    currentCompletionStreak: r.current_completion_streak,
    bestCompletionStreak: r.best_completion_streak,
    currentDailyStreak: r.current_daily_streak,
    bestDailyStreak: r.best_daily_streak,
    lastActiveDate: r.last_active_date,
    streakFreezes: r.streak_freezes
  }
}

export function getStreak(profileId: number): Streak {
  const row = getConn().prepare('SELECT * FROM streaks WHERE profile_id = ?').get(profileId) as
    StreakRow | undefined
  if (row) return toStreak(row)
  getConn().prepare('INSERT INTO streaks (profile_id) VALUES (?)').run(profileId)
  return {
    profileId,
    currentCompletionStreak: 0,
    bestCompletionStreak: 0,
    currentDailyStreak: 0,
    bestDailyStreak: 0,
    lastActiveDate: null,
    streakFreezes: 0
  }
}

function todayStr(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function daysBetween(a: string, b: string): number {
  const da = new Date(a + 'T00:00:00Z')
  const db = new Date(b + 'T00:00:00Z')
  return Math.round((db.getTime() - da.getTime()) / 86_400_000)
}

export function recordStreakCompletion(profileId: number): Streak {
  const s = getStreak(profileId)
  const today = todayStr()

  let currentDaily = s.currentDailyStreak
  let bestDaily = s.bestDailyStreak
  if (s.lastActiveDate) {
    const gap = daysBetween(s.lastActiveDate, today)
    if (gap === 1) {
      currentDaily = s.currentDailyStreak + 1
    } else if (gap > 1) {
      currentDaily = 1
    }
  } else {
    currentDaily = 1
  }
  bestDaily = Math.max(bestDaily, currentDaily)

  getConn()
    .prepare(
      `UPDATE streaks SET current_daily_streak = ?, best_daily_streak = ?, last_active_date = ?
       WHERE profile_id = ?`
    )
    .run(currentDaily, bestDaily, today, profileId)

  return {
    ...s,
    currentDailyStreak: currentDaily,
    bestDailyStreak: bestDaily,
    lastActiveDate: today
  }
}

export function incrementCompletionStreak(profileId: number): Streak {
  const s = getStreak(profileId)
  const current = s.currentCompletionStreak + 1
  const best = Math.max(s.bestCompletionStreak, current)
  getConn()
    .prepare(
      `UPDATE streaks SET current_completion_streak = ?, best_completion_streak = ?
       WHERE profile_id = ?`
    )
    .run(current, best, profileId)
  return {
    ...s,
    currentCompletionStreak: current,
    bestCompletionStreak: best
  }
}

export function resetCompletionStreak(profileId: number): Streak {
  const s = getStreak(profileId)
  if (s.currentCompletionStreak === 0) return s
  getConn()
    .prepare('UPDATE streaks SET current_completion_streak = 0 WHERE profile_id = ?')
    .run(profileId)
  return {
    ...s,
    currentCompletionStreak: 0
  }
}

export function useStreakFreeze(profileId: number): Streak {
  const s = getStreak(profileId)
  if (s.streakFreezes <= 0) return s
  getConn()
    .prepare('UPDATE streaks SET streak_freezes = streak_freezes - 1 WHERE profile_id = ?')
    .run(profileId)
  return {
    ...s,
    streakFreezes: s.streakFreezes - 1
  }
}

export function addStreakFreeze(profileId: number, count: number): Streak {
  const s = getStreak(profileId)
  getConn()
    .prepare('UPDATE streaks SET streak_freezes = streak_freezes + ? WHERE profile_id = ?')
    .run(count, profileId)
  return {
    ...s,
    streakFreezes: s.streakFreezes + count
  }
}

// ---- XP Wallet -----------------------------------------------------------

const XP_PER_LEVEL = 100

function xpForLevel(level: number): number {
  return XP_PER_LEVEL + (level - 1) * 50
}

export function getXP(profileId: number): XPWallet {
  const row = getConn().prepare('SELECT * FROM xp_wallet WHERE profile_id = ?').get(profileId) as
    | {
        total_xp: number
        level: number
        level_xp: number
      }
    | undefined
  if (row) {
    return {
      profileId,
      totalXp: row.total_xp,
      level: row.level,
      levelXp: row.level_xp
    }
  }
  getConn().prepare('INSERT INTO xp_wallet (profile_id) VALUES (?)').run(profileId)
  return {
    profileId,
    totalXp: 0,
    level: 1,
    levelXp: 0
  }
}

export function addXP(profileId: number, amount: number): XPWallet {
  const w = getXP(profileId)
  let totalXp = w.totalXp + amount
  let level = w.level
  let levelXp = w.levelXp + amount
  const needed = xpForLevel(level)
  while (levelXp >= needed) {
    levelXp -= needed
    level++
  }
  getConn()
    .prepare(
      'INSERT INTO xp_wallet (profile_id, total_xp, level, level_xp) VALUES (?, ?, ?, ?) ON CONFLICT(profile_id) DO UPDATE SET total_xp = excluded.total_xp, level = excluded.level, level_xp = excluded.level_xp'
    )
    .run(profileId, totalXp, level, levelXp)
  return {
    profileId,
    totalXp,
    level,
    levelXp
  }
}

// ---- Energy ---------------------------------------------------------------

const MAX_ENERGY = 25

export function getEnergy(profileId: number): EnergyState {
  const row = getConn().prepare('SELECT * FROM energy WHERE profile_id = ?').get(profileId) as
    | {
        current_energy: number
        max_energy: number
        last_refill_date: string | null
      }
    | undefined
  if (!row) {
    getConn().prepare('INSERT INTO energy (profile_id) VALUES (?)').run(profileId)
    return {
      profileId,
      currentEnergy: MAX_ENERGY,
      maxEnergy: MAX_ENERGY,
      lastRefillDate: null
    }
  }
  return {
    profileId,
    currentEnergy: row.current_energy,
    maxEnergy: row.max_energy,
    lastRefillDate: row.last_refill_date
  }
}

export function spendEnergy(profileId: number): EnergyState {
  const e = getEnergy(profileId)
  if (e.currentEnergy <= 0) return e
  const updated = Math.max(0, e.currentEnergy - 1)
  getConn()
    .prepare('UPDATE energy SET current_energy = ? WHERE profile_id = ?')
    .run(updated, profileId)
  return {
    ...e,
    currentEnergy: updated
  }
}

export function refundEnergy(profileId: number): EnergyState {
  const e = getEnergy(profileId)
  if (e.currentEnergy >= e.maxEnergy) return e
  const updated = Math.min(e.maxEnergy, e.currentEnergy + 1)
  getConn()
    .prepare('UPDATE energy SET current_energy = ? WHERE profile_id = ?')
    .run(updated, profileId)
  return {
    ...e,
    currentEnergy: updated
  }
}

export function refillEnergyIfDue(profileId: number): EnergyState {
  const e = getEnergy(profileId)
  const now = new Date()
  const today = todayStr()
  if (e.lastRefillDate === today) return e
  getConn()
    .prepare('UPDATE energy SET current_energy = ?, last_refill_date = ? WHERE profile_id = ?')
    .run(MAX_ENERGY, today, profileId)
  return {
    profileId,
    currentEnergy: MAX_ENERGY,
    maxEnergy: MAX_ENERGY,
    lastRefillDate: today
  }
}

// ---- Daily Quests ---------------------------------------------------------

export function getDailyQuests(profileId: number, date?: string): DailyQuest[] {
  const d = date ?? todayStr()
  const rows = getConn()
    .prepare('SELECT * FROM daily_quests WHERE profile_id = ? AND date = ?')
    .all(profileId, d) as {
    id: string
    profile_id: number
    date: string
    quest_type: string
    description_key: string
    target: number
    progress: number
    completed: number
    claimed: number
    reward_xp: number
  }[]
  return rows.map((r) => ({
    id: r.id,
    profileId: r.profile_id,
    date: r.date,
    questType: r.quest_type as QuestType,
    descriptionKey: r.description_key,
    target: r.target,
    progress: r.progress,
    completed: r.completed === 1,
    claimed: r.claimed === 1,
    rewardXp: r.reward_xp
  }))
}

export function upsertDailyQuests(
  profileId: number,
  quests: Omit<DailyQuest, 'profileId' | 'date'>[]
): void {
  const d = todayStr()
  const stmt = getConn().prepare(
    `INSERT INTO daily_quests (id, profile_id, date, quest_type, description_key, target, progress, completed, claimed, reward_xp)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(profile_id, date, quest_type) DO UPDATE SET
       progress = excluded.progress, completed = excluded.completed, claimed = excluded.claimed`
  )
  const tx = getConn().transaction(() => {
    for (const q of quests) {
      stmt.run(
        q.id,
        profileId,
        d,
        q.questType,
        q.descriptionKey,
        q.target,
        q.progress,
        q.completed ? 1 : 0,
        q.claimed ? 1 : 0,
        q.rewardXp
      )
    }
  })
  tx()
}

export function updateQuestProgress(
  profileId: number,
  questType: QuestType,
  increment: number
): DailyQuest[] {
  const d = todayStr()
  getConn()
    .prepare(
      `UPDATE daily_quests SET progress = MIN(progress + ?, target), completed = CASE WHEN progress + ? >= target THEN 1 ELSE completed END
       WHERE profile_id = ? AND date = ? AND quest_type = ? AND completed = 0`
    )
    .run(increment, increment, profileId, d, questType)
  return getDailyQuests(profileId, d)
}

export function claimQuest(profileId: number, questId: string): DailyQuest | undefined {
  const row = getConn()
    .prepare('SELECT * FROM daily_quests WHERE id = ? AND profile_id = ?')
    .get(questId, profileId) as
    | {
        id: string
        completed: number
        claimed: number
        reward_xp: number
      }
    | undefined
  if (!row || row.completed !== 1 || row.claimed === 1) return undefined
  getConn().prepare('UPDATE daily_quests SET claimed = 1 WHERE id = ?').run(questId)
  addXP(profileId, row.reward_xp)
  const quests = getDailyQuests(profileId)
  return quests.find((q) => q.id === questId)
}

// ---- Achievements ---------------------------------------------------------

export function getAchievements(profileId: number): Achievement[] {
  const rows = getConn()
    .prepare('SELECT * FROM achievements WHERE profile_id = ?')
    .all(profileId) as {
    profile_id: number
    achievement_id: string
    earned_at: string
  }[]
  return rows.map((r) => ({
    profileId: r.profile_id,
    achievementId: r.achievement_id,
    earnedAt: r.earned_at
  }))
}

export function grantAchievement(profileId: number, achievementId: string): boolean {
  const existing = getConn()
    .prepare('SELECT 1 FROM achievements WHERE profile_id = ? AND achievement_id = ?')
    .get(profileId, achievementId)
  if (existing) return false
  getConn()
    .prepare('INSERT INTO achievements (profile_id, achievement_id) VALUES (?, ?)')
    .run(profileId, achievementId)
  return true
}
