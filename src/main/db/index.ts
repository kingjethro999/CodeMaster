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

CREATE INDEX IF NOT EXISTS idx_progress_profile ON progress(profile_id);
CREATE INDEX IF NOT EXISTS idx_ai_profile ON ai_exercise_sessions(profile_id);
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
  const row = getConn()
    .prepare('SELECT value FROM app_settings WHERE key = ?')
    .get(key) as { value: string } | undefined
  return row?.value ?? fallback
}

export function setSetting(key: string, value: string): void {
  getConn()
    .prepare('INSERT INTO app_settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value')
    .run(key, value)
}
