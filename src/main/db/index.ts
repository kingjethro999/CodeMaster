// SQLite persistence layer. Local-only storage — no hosted database.

import Database from 'better-sqlite3'
import { join } from 'path'
import { app } from 'electron'

export interface DB {
  conn: Database.Database
}

const SCHEMA = `
CREATE TABLE IF NOT EXISTS profiles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  avatar TEXT NOT NULL DEFAULT 'racoon',
  age_band TEXT NOT NULL DEFAULT '9-13',
  career_path TEXT NOT NULL DEFAULT 'web',
  interests TEXT NOT NULL DEFAULT '[]',
  settings TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS progress (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  profile_id INTEGER NOT NULL,
  stage_key TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'not_started',
  attempts INTEGER NOT NULL DEFAULT 0,
  explanation TEXT,
  explanation_check TEXT,
  completed_at TEXT,
  UNIQUE (profile_id, stage_key)
);

CREATE TABLE IF NOT EXISTS ai_exercise_sessions (
  session_id TEXT PRIMARY KEY,
  profile_id INTEGER NOT NULL,
  stage_key TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'in_progress',
  current_hint_tier INTEGER NOT NULL DEFAULT 0,
  interaction_history TEXT NOT NULL DEFAULT '[]',
  concept_struggles TEXT NOT NULL DEFAULT '[]',
  variant_payload TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS app_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS streaks (
  profile_id INTEGER PRIMARY KEY,
  current_completion_streak INTEGER NOT NULL DEFAULT 0,
  best_completion_streak INTEGER NOT NULL DEFAULT 0,
  current_daily_streak INTEGER NOT NULL DEFAULT 0,
  best_daily_streak INTEGER NOT NULL DEFAULT 0,
  last_active_date TEXT,
  streak_freezes INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS xp_wallet (
  profile_id INTEGER PRIMARY KEY,
  total_xp INTEGER NOT NULL DEFAULT 0,
  level INTEGER NOT NULL DEFAULT 1,
  level_xp INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS energy (
  profile_id INTEGER PRIMARY KEY,
  current_energy INTEGER NOT NULL DEFAULT 25,
  max_energy INTEGER NOT NULL DEFAULT 25,
  last_refill_date TEXT
);

CREATE TABLE IF NOT EXISTS daily_quests (
  id TEXT PRIMARY KEY,
  profile_id INTEGER NOT NULL,
  date TEXT NOT NULL,
  quest_type TEXT NOT NULL,
  description_key TEXT NOT NULL,
  target INTEGER NOT NULL DEFAULT 1,
  progress INTEGER NOT NULL DEFAULT 0,
  completed INTEGER NOT NULL DEFAULT 0,
  claimed INTEGER NOT NULL DEFAULT 0,
  reward_xp INTEGER NOT NULL DEFAULT 10,
  UNIQUE (profile_id, date, quest_type)
);

CREATE TABLE IF NOT EXISTS achievements (
  profile_id INTEGER NOT NULL,
  achievement_id TEXT NOT NULL,
  earned_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (profile_id, achievement_id)
);

CREATE INDEX IF NOT EXISTS idx_progress_profile ON progress(profile_id);
CREATE INDEX IF NOT EXISTS idx_ai_profile ON ai_exercise_sessions(profile_id);
CREATE INDEX IF NOT EXISTS idx_daily_quests_profile ON daily_quests(profile_id, date);
CREATE INDEX IF NOT EXISTS idx_achievements_profile ON achievements(profile_id);
`

let db: Database.Database | null = null

export function openDb(): Database.Database {
  if (db) return db
  const dir = app.getPath('userData')
  const file = join(dir, 'codemaster.db')
  const conn = new Database(file)
  conn.pragma('journal_mode = WAL')
  conn.exec(SCHEMA)
  db = conn
  return conn
}

export function closeDb(): void {
  if (db) {
    db.close()
    db = null
  }
}

export function getConn(): Database.Database {
  if (!db) return openDb()
  return db
}

export function getSetting(key: string, fallback: string): string {
  const row = getConn().prepare('SELECT value FROM app_settings WHERE key = ?').get(key) as
    | {
        value: string
      }
    | undefined
  return row?.value ?? fallback
}

export function setSetting(key: string, value: string): void {
  getConn()
    .prepare(
      'INSERT INTO app_settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value'
    )
    .run(key, value)
}
