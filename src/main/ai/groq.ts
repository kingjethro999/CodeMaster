// Groq-backed AI enhancement layer. Online-only, never load-bearing.
// Follows the "generate -> persist -> render" rule for all AI output.

import type { AISession, Stage } from '../../shared/types'
import { localExplainCheck, localHint } from './hints'

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'
const MODEL = 'llama-3.3-70b-versatile'

interface GroqChoice {
  message: {
    content: string
  }
}

let offlineCache = false
let lastCheck = 0

async function isOnline(): Promise<boolean> {
  const now = Date.now()
  if (now - lastCheck < 30_000) return !offlineCache
  lastCheck = now
  const key = process.env.GROQ_API_KEY ?? ''
  if (!key) {
    offlineCache = true
    return false
  }
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 4000)
    const res = await fetch('https://api.groq.com/openai/v1/models', {
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${key}`
      }
    })
    clearTimeout(timer)
    offlineCache = res.status >= 400
    return !offlineCache
  } catch {
    offlineCache = true
    return false
  }
}

async function groqChat(
  messages: {
    role: string
    content: string
  }[],
  temperature = 0.7
): Promise<string> {
  const key = process.env.GROQ_API_KEY ?? ''
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 15000)
  const res = await fetch(GROQ_URL, {
    method: 'POST',
    signal: controller.signal,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`
    },
    body: JSON.stringify({
      model: MODEL,
      temperature,
      max_tokens: 300,
      messages
    })
  })
  clearTimeout(timer)
  if (!res.ok) throw new Error(`groq ${res.status}`)
  const data = (await res.json()) as {
    choices: GroqChoice[]
  }
  return data.choices?.[0]?.message?.content ?? ''
}

function conceptName(stage: Stage): string {
  return stage.conceptKey.replace('concept.', '')
}

export async function requestHint(
  session: AISession,
  stage: Stage,
  failedAttempts: number
): Promise<string> {
  const online = await isOnline()
  const tier = Math.min(session.currentHintTier + (failedAttempts > 2 ? 1 : 0), 3)
  if (online) {
    try {
      const past = session.interactionHistory
        .slice(-3)
        .map((h) => `Kid asked for a hint (tier ${h.tier}): ${h.content}`)
        .join('\n')
      const content = await groqChat([
        {
          role: 'system',
          content:
            'You are a patient mentor for a kid learning to code. You NEVER give working code or full solutions. ' +
            `The current lesson concept is "${conceptName(stage)}". Respond as a leading question first, ` +
            'escalating to slightly more direct guidance only at tier 3. Keep it under 80 words, plain language, no code. ' +
            "The kid's lesson is: " +
            stage.instructionsKey
        },
        {
          role: 'user',
          content: `Failed attempts so far: ${failedAttempts}. Escalation tier: ${tier}. ${past ? `Previous hints already given:\n${past}` : 'No hints given yet.'}\nGive the next hint.`
        }
      ])
      return content.trim()
    } catch {
      // fall through to local
    }
  }
  return localHint(conceptName(stage), tier)
}

export async function checkExplanation(
  _session: AISession,
  stage: Stage,
  explanation: string,
  source: string
): Promise<{
  passed: boolean
  feedback: string
}> {
  const keywords = stage.validation.explanationKeywords ?? []
  const local = localExplainCheck(explanation, keywords, conceptName(stage))
  const online = await isOnline()
  if (!online) {
    return {
      passed: local.startsWith('Your explanation'),
      feedback: local
    }
  }
  try {
    const content = await groqChat(
      [
        {
          role: 'system',
          content:
            "You check whether a kid's plain-words explanation actually matches the code they wrote. " +
            'The goal is to catch copy-pasted work: if the explanation contradicts the code, that is a red flag. ' +
            "The kid's code:\n" +
            source +
            '\n\nReply with JSON: {"passed": true|false, "feedback": "short encouraging message under 60 words"}. ' +
            'Feedback must be encouraging even when passed is false — never harsh.'
        },
        {
          role: 'user',
          content: `The kid's explanation: "${explanation}"`
        }
      ],
      0.3
    )
    const match = content.match(/\{[\s\S]*\}/)
    if (match) {
      const parsed = JSON.parse(match[0]) as {
        passed: boolean
        feedback: string
      }
      return {
        passed: Boolean(parsed.passed),
        feedback: parsed.feedback || local
      }
    }
  } catch {
    // fall through
  }
  return {
    passed: local.startsWith('Your explanation'),
    feedback: local
  }
}

export { isOnline }
