"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Globe, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "technology, innovation, and community action"

  useEffect(() => {
    let currentIndex = 0
    const typingSpeed = 80

    const typeNextChar = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeNextChar, typingSpeed)
      } else {
        setShowCursor(false)
      }
    }

    const startDelay = setTimeout(typeNextChar, 500)

    return () => clearTimeout(startDelay)
  }, [])

  useEffect(() => {
    if (!showCursor) return

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [showCursor])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateSize()
    window.addEventListener("resize", updateSize)

    // Particle system for holographic effect
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    // Animation loop
    let animationFrame: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = "rgba(110, 207, 246, 0.1)"
      ctx.lineWidth = 1
      const gridSize = 50
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(110, 207, 246, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      // Draw connections between nearby particles
      ctx.strokeStyle = "rgba(110, 207, 246, 0.1)"
      ctx.lineWidth = 0.5
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateSize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#003D73] via-[#003D73] to-[#001a33]">
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Earth Image with Holographic Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-full max-w-4xl aspect-square opacity-30">
          <img
            src="/realistic-earth-from-space-with-visible-continents.jpg"
            alt="Earth"
            className="w-full h-full object-contain animate-[float_6s_ease-in-out_infinite]"
          />
          {/* Holographic Climate Overlay Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[110%] h-[110%] rounded-full border-2 border-[#6ECFF6]/30 animate-[glow-pulse_3s_ease-in-out_infinite]" />
            <div className="absolute w-[120%] h-[120%] rounded-full border-2 border-[#2AA948]/20 animate-[glow-pulse_4s_ease-in-out_infinite]" />
            <div className="absolute w-[130%] h-[130%] rounded-full border border-[#6ECFF6]/10 animate-[glow-pulse_5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-[float_4s_ease-in-out_infinite]">
            <Zap className="w-4 h-4 text-[#6ECFF6]" />
            <span className="text-sm font-semibold text-white">Where Technology Meets Climate Action</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight glow-text text-balance">
            Building a climate-resilient future through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ECFF6] to-[#2AA948]">
              {typedText}
              {showCursor && <span className="animate-pulse">|</span>}
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed text-pretty">
            Empowering communities with AI-driven climate insights, cutting-edge monitoring tools, and grassroots action
            to create lasting environmental impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link href="/about">
              <Button
                size="lg"
                className="bg-[#2AA948] hover:bg-[#2AA948]/90 text-white font-semibold px-8 py-6 text-lg"
              >
                About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/our-work">
              <Button
                size="lg"
                variant="outline"
                className="border-[#6ECFF6] text-white hover:bg-[#6ECFF6]/10 font-semibold px-8 py-6 text-lg bg-transparent"
              >
                Our Projects
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6ECFF6] to-[#2AA948] hover:opacity-90 text-white font-semibold px-8 py-6 text-lg"
              >
                Join the Movement
              </Button>
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: Globe, label: "AI Climate Monitoring", href: "/climate-tech" },
              { icon: Users, label: "Community Action", href: "/our-work" },
              { icon: Zap, label: "Youth Leadership", href: "/climate-tech" },
            ].map((feature, index) => (
              <Link key={index} href={feature.href}>
                <div className="flex items-center gap-3 px-6 py-3 glass-card rounded-full hover:scale-105 transition-transform cursor-pointer">
                  <feature.icon className="w-5 h-5 text-[#6ECFF6]" />
                  <span className="text-white font-medium">{feature.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-10" />
    </section>
  )
}
