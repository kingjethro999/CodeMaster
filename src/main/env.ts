// Environment capability checks.

export function hasGroqKey(): boolean {
  return Boolean(process.env.GROQ_API_KEY)
}
