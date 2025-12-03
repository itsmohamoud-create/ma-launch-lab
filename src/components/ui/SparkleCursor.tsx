'use client'
import { useEffect, useRef } from 'react'

// ⚡ PERFORMANCE OPTIMIZED CURSOR
export default function SparkleCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sparkles = useRef<Array<{x: number, y: number, size: number, speedX: number, speedY: number, life: number}>>([])
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    resize()

    const addSparkle = (x: number, y: number) => {
      // Throttle: Only add sparkle if less than 50 active to save GPU
      if (sparkles.current.length < 50) {
        sparkles.current.push({
          x, y,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 1,
          speedY: (Math.random() - 0.5) * 1,
          life: 1
        })
      }
    }

    const handleMove = (e: MouseEvent) => addSparkle(e.clientX, e.clientY)
    window.addEventListener('mousemove', handleMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      sparkles.current.forEach((s, i) => {
        s.x += s.speedX
        s.y += s.speedY
        s.life -= 0.02
        
        if (s.life <= 0) {
          sparkles.current.splice(i, 1)
        } else {
          ctx.globalAlpha = s.life
          ctx.fillStyle = '#FFD700' // Gold
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
          ctx.fill()
        }
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9999]" />
}
