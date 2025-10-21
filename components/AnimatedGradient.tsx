'use client'

import { motion } from 'framer-motion'

export default function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 主深空背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-sleep-blue-950 via-sleep-blue-900 to-sleep-blue-950" />

      {/* 中心旋转光晕 - 橙色（更明显）*/}
      <motion.div
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[38%] left-[50%] w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255, 123, 0, 0.25) 45deg, rgba(255, 140, 0, 0.18) 90deg, transparent 135deg, rgba(255, 106, 0, 0.15) 180deg, transparent 225deg, rgba(255, 123, 0, 0.12) 270deg, transparent 315deg)',
          filter: 'blur(100px)',
        }}
      />

      {/* 第二层反向旋转光晕 - 更快更明显 */}
      <motion.div
        animate={{ 
          rotate: [360, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[38%] left-[50%] w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'conic-gradient(from 90deg, transparent, rgba(255, 140, 0, 0.2) 60deg, rgba(255, 106, 0, 0.15) 120deg, transparent 180deg)',
          filter: 'blur(80px)',
        }}
      />

      {/* 深蓝色旋转光晕 - 营造深度 */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[38%] left-[50%] w-[1500px] h-[1500px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'conic-gradient(from 180deg, transparent, rgba(0, 40, 80, 0.5) 90deg, rgba(0, 30, 60, 0.4) 180deg, transparent 270deg)',
          filter: 'blur(120px)',
        }}
      />

      {/* 中心聚焦光晕 - 脉动更明显 */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[38%] left-[50%] w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 140, 0, 0.15) 0%, rgba(255, 123, 0, 0.08) 50%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
    </div>
  )
}

