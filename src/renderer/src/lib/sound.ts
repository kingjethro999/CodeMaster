// Tiny synthesized sound layer — soft chimes generated with Web Audio.
// Respects the reduced-sound setting.

let ctx: AudioContext | null = null
let enabled = true

export function setSoundEnabled(enabledFlag: boolean): void {
  enabled = enabledFlag
}

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null
  const AC = window.AudioContext ?? (window as never as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AC) return null
  if (!ctx) ctx = new AC()
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

function tone(freq: number, start: number, duration: number, volume: number): void {
  const ac = getCtx()
  if (!ac) return
  const osc = ac.createOscillator()
  const gain = ac.createGain()
  osc.type = 'sine'
  osc.frequency.value = freq
  gain.gain.setValueAtTime(0.0001, ac.currentTime + start)
  gain.gain.exponentialRampToValueAtTime(volume, ac.currentTime + start + 0.02)
  gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + start + duration)
  osc.connect(gain)
  gain.connect(ac.destination)
  osc.start(ac.currentTime + start)
  osc.stop(ac.currentTime + start + duration + 0.05)
}

function play(notes: number[], spacing: number, volume: number): void {
  if (!enabled) return
  try {
    notes.forEach((f, i) => tone(f, i * spacing, 0.18, volume))
  } catch {
    // audio is best-effort
  }
}

export const sound = {
  success(): void {
    play([523.25, 659.25, 783.99], 0.09, 0.18)
  },
  fail(): void {
    play([392, 329.63], 0.14, 0.12)
  },
  click(): void {
    play([660], 0, 0.08)
  },
  hint(): void {
    play([440, 554.37], 0.12, 0.1)
  },
  finish(): void {
    play([523.25, 659.25, 783.99, 1046.5], 0.1, 0.16)
  }
}
