// Shared types across main, preload, and renderer.

export type CareerPathId = 'web' | 'game' | 'data' | 'embedded' | 'mobile'

export type StageKind = 'block' | 'code' | 'reference'

export type AgeBand = '6-8' | '9-13' | '14+'

export type StageStatus = 'not_started' | 'in_progress' | 'explaining' | 'complete'

export interface ProfileSettings {
  readingFont: 'default' | 'lexend' | 'atkinson'
  reducedMotion: boolean
  reducedSound: boolean
  highContrast: boolean
  colorBlind: boolean
  audioSpeed: number
  textScale: number
}

export interface Profile {
  id: number
  name: string
  avatar: string
  ageBand: AgeBand
  careerPath: CareerPathId
  interests: string[]
  settings: ProfileSettings
  createdAt: string
}

export interface ProfileInput {
  name: string
  avatar: string
  ageBand: AgeBand
  careerPath: CareerPathId
  interests: string[]
  settings: ProfileSettings
}

export interface CareerPath {
  id: CareerPathId
  nameKey: string
  icon: string
  color: string
  descriptionKey: string
  languages: string[]
  stageKeys: string[]
}

export interface BlockTemplate {
  type: string
  labelKey: string
  color: string
  argKeys?: string[]
  wrappable: boolean
}

export interface StageValidation {
  consoleExact?: string[]
  consoleIncludes?: string[]
  consoleLines?: number
  requireKeywords?: string[]
  requireBlockTypes?: string[]
  explanationKeywords?: string[]
}

export interface StageReference {
  kind: 'book' | 'video' | 'docs'
  title: string
  url: string
  whyKey: string
}

export interface Stage {
  key: string
  path: CareerPathId
  index: number
  conceptKey: string
  titleKey: string
  kind: StageKind
  instructionsKey: string
  palette?: string[]
  starterCode?: string
  validation: StageValidation
  reference?: StageReference
}

export interface Progress {
  stageKey: string
  status: StageStatus
  attempts: number
  explanation?: string
  explanationCheck?: 'pass' | 'fail' | 'pending'
  completedAt?: string
}

export interface Streak {
  profileId: number
  currentCompletionStreak: number
  bestCompletionStreak: number
  currentDailyStreak: number
  bestDailyStreak: number
  lastActiveDate: string | null
  streakFreezes: number
}

export interface XPWallet {
  profileId: number
  totalXp: number
  level: number
  levelXp: number
}

export interface EnergyState {
  profileId: number
  currentEnergy: number
  maxEnergy: number
  lastRefillDate: string | null
}

export type QuestType =
  'complete_stages' | 'no_hints' | 'streak_maintain' | 'use_blocks' | 'first_try'

export interface DailyQuest {
  id: string
  profileId: number
  date: string
  questType: QuestType
  descriptionKey: string
  target: number
  progress: number
  completed: boolean
  claimed: boolean
  rewardXp: number
}

export type AchievementTier = 'bronze' | 'silver' | 'gold'

export interface AchievementDef {
  id: string
  nameKey: string
  descriptionKey: string
  icon: string
  tier: AchievementTier
}

export const ACHIEVEMENT_DEFS: AchievementDef[] = [
  { id: 'first_stage', nameKey: 'achievement.firstStage', descriptionKey: 'achievement.firstStageDesc', icon: 'Star', tier: 'bronze' },
  { id: 'streak_3', nameKey: 'achievement.streak3', descriptionKey: 'achievement.streak3Desc', icon: 'Flame', tier: 'bronze' },
  { id: 'streak_7', nameKey: 'achievement.streak7', descriptionKey: 'achievement.streak7Desc', icon: 'Flame', tier: 'silver' },
  { id: 'streak_30', nameKey: 'achievement.streak30', descriptionKey: 'achievement.streak30Desc', icon: 'Flame', tier: 'gold' },
  { id: 'xp_100', nameKey: 'achievement.xp100', descriptionKey: 'achievement.xp100Desc', icon: 'Zap', tier: 'bronze' },
  { id: 'xp_500', nameKey: 'achievement.xp500', descriptionKey: 'achievement.xp500Desc', icon: 'Zap', tier: 'silver' },
  { id: 'xp_1000', nameKey: 'achievement.xp1000', descriptionKey: 'achievement.xp1000Desc', icon: 'Zap', tier: 'gold' },
  { id: 'no_hints_5', nameKey: 'achievement.noHints5', descriptionKey: 'achievement.noHints5Desc', icon: 'Lightbulb', tier: 'bronze' },
  { id: 'no_hints_10', nameKey: 'achievement.noHints10', descriptionKey: 'achievement.noHints10Desc', icon: 'Lightbulb', tier: 'silver' },
  { id: 'path_complete', nameKey: 'achievement.pathComplete', descriptionKey: 'achievement.pathCompleteDesc', icon: 'Trophy', tier: 'gold' },
  { id: 'explainer', nameKey: 'achievement.explainer', descriptionKey: 'achievement.explainerDesc', icon: 'MessageCircle', tier: 'bronze' },
  { id: 'explainer_10', nameKey: 'achievement.explainer10', descriptionKey: 'achievement.explainer10Desc', icon: 'MessageCircle', tier: 'silver' },
]

export interface Achievement {
  profileId: number
  achievementId: string
  earnedAt: string
}

export type RewardType = 'xp' | 'streak_freeze' | 'energy' | 'achievement'

export interface RewardCard {
  type: RewardType
  value: number
  labelKey: string
  icon: string
}

export interface CurriculumProgress {
  stages: Stage[]
  progress: Record<string, Progress>
}

export type AISessionStatus = 'in_progress' | 'stuck' | 'completed' | 'abandoned'

export interface AIHintEntry {
  timestamp: string
  userRequested: boolean
  tier: number
  content: string
}

export interface AISession {
  sessionId: string
  profileId: number
  stageKey: string
  status: AISessionStatus
  currentHintTier: number
  interactionHistory: AIHintEntry[]
  conceptStruggles: string[]
  variantPayload: unknown | null
  updatedAt: string
}

export interface RunResult {
  ok: boolean
  console: string[]
  turtle: TurtleState
  error?: string
  steps: number
}

export interface TurtlePoint {
  x: number
  y: number
  color: string
}

export interface TurtleState {
  x: number
  y: number
  angle: number
  pen: boolean
  color: string
  path: TurtlePoint[]
  start: TurtlePoint
}

export interface BlockNode {
  id: string
  type: string
  args: Record<string, string>
  children: BlockNode[]
}

export interface RoomSettings {
  hostName: string
  hostCode: string
  stageKey: string
  mode: 'first_to_finish' | 'most_completed'
  timeLimitMinutes: number
  maxPlayers: number
}

export interface RoomPlayer {
  id: string
  name: string
  joinedAt: string
  finishedAt?: string
  completed: number
}

export interface RoomState {
  roomCode: string
  hostId: string
  settings: RoomSettings
  players: RoomPlayer[]
  startedAt?: string
  endsAt?: string
  endedAt?: string
}

export interface DiscoveryHost {
  name: string
  roomCode: string
  hostId: string
  address: string
  port: number
}

export type LanguageCode = 'en' | 'es' | 'fr' | 'de' | 'ar' | 'sw'
