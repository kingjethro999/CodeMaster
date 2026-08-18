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
