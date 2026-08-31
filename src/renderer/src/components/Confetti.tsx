// Celebration burst — canvas-confetti, suppressed by reduced-motion.

import confetti from 'canvas-confetti'
import { useRef } from 'react'

export function useConfetti(): {
  fire: () => void
} {
  const fired = useRef(0)

  const fire = (): void => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const userReduced = document.documentElement.getAttribute('data-motion') === 'reduced'
    if (reduced || userReduced) return
    const id = ++fired.current
    const colors = ['#FF8A3D', '#3DBBFF', '#B463FF', '#4CD787', '#FFD65C']
    const bursts = [0, 180, 320]
    for (const delay of bursts) {
      setTimeout(() => {
        if (id !== fired.current) return
        confetti({
          particleCount: 70,
          angle: delay,
          spread: 60,
          origin: {
            x: 0.5,
            y: 0.4
          },
          colors,
          disableForReducedMotion: true
        })
      }, delay)
    }
  }

  return {
    fire
  }
}
