'use client'

import { useEffect, useRef } from 'react'

export default function SpaceParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Array<{
      x: number
      y: number
      z: number
      prevZ: number
    }> = []

    // 设置画布大小
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 创建粒子（星星）
    const particleCount = 2400 // 4倍粒子数量
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const speed = 0.12 // 调快到1.5倍

    // 初始化粒子
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width - centerX,
        y: Math.random() * canvas.height - centerY,
        z: Math.random() * canvas.width,
        prevZ: Math.random() * canvas.width,
      })
    }

    // 动画循环
    const animate = () => {
      // 完全清除背景，不要拖尾效果
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // 保存上一帧的 z 位置
        particle.prevZ = particle.z
        
        // 向前移动（z 减小）
        particle.z -= speed

        // 如果粒子超出屏幕，重置到远处
        if (particle.z <= 0) {
          particle.z = canvas.width
          particle.prevZ = canvas.width
          particle.x = Math.random() * canvas.width - centerX
          particle.y = Math.random() * canvas.height - centerY
        }

        // 3D 投影到 2D
        const scale = canvas.width / particle.z
        const x2d = particle.x * scale + centerX
        const y2d = particle.y * scale + centerY

        // 计算上一帧的位置（创建拖尾效果）
        const prevScale = canvas.width / particle.prevZ
        const prevX2d = particle.x * prevScale + centerX
        const prevY2d = particle.y * prevScale + centerY

        // 计算粒子大小和亮度
        const size = Math.max(0.5, (1 - particle.z / canvas.width) * 2)
        const opacity = Math.min(0.8, (1 - particle.z / canvas.width) * 0.9)

        // 只绘制星星点，不要拖尾
        if (opacity > 0.1) {
          ctx.beginPath()
          ctx.arc(x2d, y2d, size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 180, 120, ${opacity * 0.5})`
          ctx.fill()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 3 }}
    />
  )
}

