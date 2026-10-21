import { useEffect, useRef } from "react"

interface ParticleCanvasProps {
  isDark: boolean
}

export default function InteractiveOrbCanvas({ isDark }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      height = canvas.height = canvas.parentElement?.clientHeight || 600
    }
    window.addEventListener("resize", handleResize)

    // Mouse interactive coordinates
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.targetX = e.clientX - rect.left
      mouse.targetY = e.clientY - rect.top
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Generate 3D-like particle cloud rotating in sphere
    const PARTICLE_COUNT = 140
    interface Particle {
      x: number
      y: number
      z: number
      baseRadius: number
      size: number
      speed: number
      angle: number
      color: string
    }

    const particles: Particle[] = []
    const paletteLight = ["#7C3AED", "#6366F1", "#3B82F6", "#8B5CF6", "#A855F7"]
    const paletteDark = ["#C084FC", "#A855F7", "#38BDF8", "#818CF8", "#E879F9"]

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const radius = 120 + Math.random() * 80

      particles.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        baseRadius: radius,
        size: Math.random() * 2.2 + 0.8,
        speed: (Math.random() * 0.008 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
        angle: Math.random() * Math.PI * 2,
        color: (isDark ? paletteDark : paletteLight)[i % 5],
      })
    }

    let rotY = 0
    let rotX = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Smooth mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      // Slight rotation drift + mouse influence
      rotY += 0.006 + (mouse.x - width / 2) * 0.00003
      rotX += 0.003 + (mouse.y - height / 2) * 0.00003

      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)

      const centerX = width / 2
      const centerY = height / 2

      // Draw subtle orbital connection lines
      ctx.lineWidth = 0.5

      // Project particles
      const projected = particles.map((p) => {
        // 3D rotation around Y and X
        let x1 = p.x * cosY - p.z * sinY
        let z1 = p.z * cosY + p.x * sinY

        let y2 = p.y * cosX - z1 * sinX
        let z2 = z1 * cosX + p.y * sinX

        // Perspective projection
        const fov = 350
        const scale = fov / (fov + z2 + 200)

        return {
          px: centerX + x1 * scale,
          py: centerY + y2 * scale,
          scale,
          z: z2,
          size: p.size * scale,
          color: p.color,
        }
      })

      // Sort by depth for correct visual overlap
      projected.sort((a, b) => b.z - a.z)

      // Connect nearby particles with subtle ethereal lines
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px
          const dy = projected[i].py - projected[j].py
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 65) {
            const alpha = (1 - dist / 65) * 0.22
            ctx.strokeStyle = isDark
              ? `rgba(168, 85, 247, ${alpha})`
              : `rgba(124, 58, 237, ${alpha * 0.8})`
            ctx.beginPath()
            ctx.moveTo(projected[i].px, projected[i].py)
            ctx.lineTo(projected[j].px, projected[j].py)
            ctx.stroke()
          }
        }
      }

      // Draw particle glowing points
      for (const p of projected) {
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.px, p.py, Math.max(0.6, p.size), 0, Math.PI * 2)
        ctx.fill()

        // Subtle glow halo for closer particles
        if (p.z > 0 && p.scale > 0.8) {
          ctx.fillStyle = isDark
            ? `rgba(168, 85, 247, ${0.15 * p.scale})`
            : `rgba(124, 58, 237, ${0.1 * p.scale})`
          ctx.beginPath()
          ctx.arc(p.px, p.py, p.size * 3.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-85">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}
