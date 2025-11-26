"use client"

import { useEffect, useRef } from "react"

export function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const size = Math.min(600, window.innerWidth * 0.8)
    canvas.width = size
    canvas.height = size

    let rotation = 0

    const drawGlobe = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = canvas.width / 3

      // Outer glow
      const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.8, centerX, centerY, radius * 1.3)
      gradient.addColorStop(0, "rgba(110, 207, 246, 0.2)")
      gradient.addColorStop(1, "rgba(110, 207, 246, 0)")
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 1.3, 0, Math.PI * 2)
      ctx.fill()

      // Main globe
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Grid lines (latitude)
      for (let i = 0; i < 8; i++) {
        const y = (i - 3.5) * (radius / 4)
        const width = Math.sqrt(radius * radius - y * y) * 2

        ctx.strokeStyle = "rgba(110, 207, 246, 0.3)"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.ellipse(0, y, width / 2, width / 8, 0, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Grid lines (longitude)
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI) / 6
        ctx.strokeStyle = "rgba(110, 207, 246, 0.3)"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.ellipse(0, 0, radius * Math.abs(Math.cos(angle)), radius, 0, 0, Math.PI * 2)
        ctx.stroke()
      }

      ctx.restore()

      // Orbital rings
      const rings = [
        { radius: radius * 1.4, opacity: 0.4, speed: 1 },
        { radius: radius * 1.6, opacity: 0.25, speed: 0.7 },
        { radius: radius * 1.8, opacity: 0.15, speed: 0.5 },
      ]

      rings.forEach((ring, index) => {
        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(rotation * ring.speed + (index * Math.PI) / 3)

        ctx.strokeStyle = `rgba(42, 169, 72, ${ring.opacity})`
        ctx.lineWidth = 2
        ctx.setLineDash([10, 10])
        ctx.beginPath()
        ctx.ellipse(0, 0, ring.radius, ring.radius * 0.2, 0, 0, Math.PI * 2)
        ctx.stroke()

        ctx.restore()
      })

      rotation += 0.002
      requestAnimationFrame(drawGlobe)
    }

    drawGlobe()
  }, [])

  return <canvas ref={canvasRef} className="opacity-30" />
}
