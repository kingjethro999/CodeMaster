// Turtle canvas — draws the turtle's path and head from a RunResult.

import { useEffect, useRef } from 'react'
import type { RunResult } from '../../../shared/types'

const SIZE = 600

export function TurtleCanvas({ result }: { result: RunResult | null }): React.JSX.Element {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const g = canvas.getContext('2d')
    if (!g) return
    g.clearRect(0, 0, SIZE, SIZE)
    g.fillStyle = '#fff'
    g.fillRect(0, 0, SIZE, SIZE)
    // soft grid
    g.strokeStyle = '#FFEBD6'
    g.lineWidth = 1
    for (let i = 0; i <= SIZE; i += 50) {
      g.beginPath()
      g.moveTo(i, 0)
      g.lineTo(i, SIZE)
      g.stroke()
      g.beginPath()
      g.moveTo(0, i)
      g.lineTo(SIZE, i)
      g.stroke()
    }
    if (!result) return
    const t = result.turtle
    let prev = t.path[0]
    g.lineCap = 'round'
    g.lineJoin = 'round'
    for (let i = 1; i < t.path.length; i++) {
      const p = t.path[i]
      g.strokeStyle = p.color
      g.lineWidth = 3
      g.beginPath()
      g.moveTo(prev.x, prev.y)
      g.lineTo(p.x, p.y)
      g.stroke()
      prev = p
    }
    // draw turtle head
    g.fillStyle = '#FF8A3D'
    g.beginPath()
    g.arc(t.x, t.y, 9, 0, Math.PI * 2)
    g.fill()
    g.strokeStyle = '#3D2B1F'
    g.lineWidth = 2
    g.stroke()
    const rad = (t.angle * Math.PI) / 180
    g.beginPath()
    g.moveTo(t.x, t.y)
    g.lineTo(t.x + Math.cos(rad) * 18, t.y + Math.sin(rad) * 18)
    g.lineWidth = 3
    g.stroke()
  }, [result])

  return <canvas ref={ref} width={SIZE} height={SIZE} className="turtle-canvas" aria-label="Turtle drawing canvas" />
}
