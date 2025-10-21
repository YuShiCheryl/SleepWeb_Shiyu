'use client'

import { motion } from 'framer-motion'

export default function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 主渐变层 - 深海蓝 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.8, 1, 0.8],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-sleep-blue-950 via-sleep-blue-900 to-sleep-blue-800"
      />

      {/* 流动的橙色光晕 1 */}
      <motion.div
        initial={{ x: '-100%', y: '-100%' }}
        animate={{ 
          x: ['0%', '100%'],
          y: ['0%', '100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 123, 0, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* 流动的橙色光晕 2 */}
      <motion.div
        initial={{ x: '100%', y: '100%' }}
        animate={{ 
          x: ['-100%', '0%'],
          y: ['-100%', '0%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 106, 0, 0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* 深蓝色流动层 */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'conic-gradient(from 0deg, transparent, rgba(0, 40, 85, 0.3), transparent)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  )
}

