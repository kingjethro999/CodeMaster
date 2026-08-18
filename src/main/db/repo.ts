// Typed data access for profiles, progress, and AI sessions.

import type {
  AISession,
  AISessionStatus,
  AIHintEntry,
  Profile,
  ProfileInput,
  ProfileSettings,
  Progress,
  StageStatus
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
  textScale: 1
}

function toProfile(r: ProfileRow): Profile {
  let settings: ProfileSettings
  try {
    settings = { ...DEFAULT_SETTINGS, ...JSON.parse(r.settings) }
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
  const rows = getConn().prepare('SELECT * FROM profiles ORDER BY created_at ASC').all() as ProfileRow[]
  return rows.map(toProfile)
}

export function getProfile(id: number): Profile | undefined {
  const row = getConn().prepare('SELECT * FROM profiles WHERE id = ?').get(id) as ProfileRow | undefined
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
    settings: { ...existing.settings, ...patch.settings }
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
  patch: Partial<Pick<Progress, 'status' | 'attempts' | 'explanation' | 'explanationCheck' | 'completedAt'>>
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
  const variant = patch.variantPayload !== undefined ? patch.variantPayload : existing.variantPayload
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
  updateAISession(profileId, stageKey, { status: 'completed' })
}

export function abandonAISessionsForProfile(profileId: number): void {
  getConn()
    .prepare("UPDATE ai_exercise_sessions SET status = 'abandoned' WHERE profile_id = ? AND status = 'in_progress'")
    .run(profileId)
}
