'use client'

import { motion } from 'framer-motion'
import StarryBackground from './StarryBackground'
import AnimatedGradient from './AnimatedGradient'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 深空背景 */}
      <AnimatedGradient />
      
      {/* 星空效果 */}
      <StarryBackground />
      
      {/* 橙色流线装饰 */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <motion.div
          animate={{ 
            pathLength: [0, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sleep-orange-600 to-transparent opacity-30"
          style={{ 
            boxShadow: '0 0 20px rgba(255, 123, 0, 0.4)',
          }}
        />
        <motion.div
          animate={{ 
            pathLength: [1, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-40 right-0 w-1 h-96 bg-gradient-to-b from-transparent via-sleep-orange-600 to-transparent opacity-20"
          style={{ 
            boxShadow: '0 0 20px rgba(255, 106, 0, 0.3)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block relative"
          >
            <div className="px-6 py-2 backdrop-blur-sm border border-sleep-orange-600/40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sleep-orange-600/10 to-transparent" />
              <span className="relative text-sleep-orange-400 text-sm font-light tracking-widest uppercase">
                The Future of Sleep
              </span>
            </div>
            {/* 橙色光晕 */}
            <div className="absolute -inset-2 bg-sleep-orange-600/20 blur-xl -z-10" />
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-display font-light text-white leading-tight tracking-tight">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4"
            >
              Redefining
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-sleep-blue-100 to-white">
                Deep Sleep
              </span>
              {/* 下划线装饰 */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sleep-orange-600 to-transparent"
              />
            </motion.div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-sleep-blue-200 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Precision temperature control meets AI learning
            <br />
            <span className="text-sleep-blue-300">
              Experience personalized sleep environment like never before
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4 text-white font-light text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sleep-orange-600 to-sleep-orange-700" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-sleep-orange-700 to-sleep-orange-800" />
              <span className="relative z-10 tracking-wide">Explore Products</span>
              {/* 边框装饰 */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4 text-white border border-sleep-orange-600/40 backdrop-blur-sm font-light text-lg"
            >
              <div className="absolute inset-0 bg-sleep-orange-600/0 group-hover:bg-sleep-orange-600/10 transition-colors" />
              <span className="relative z-10 tracking-wide">Learn More</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-3 gap-12 max-w-4xl mx-auto pt-20"
          >
            {[
              { number: '98%', label: 'User Satisfaction' },
              { number: '-35min', label: 'Fall Asleep Faster' },
              { number: '+2.5h', label: 'Deep Sleep Gained' },
            ].map((stat, index) => (
              <div key={index} className="text-center relative group">
                {/* 顶部橙色装饰线 */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 + index * 0.2 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-sleep-orange-600 to-transparent"
                />
                <div className="pt-6">
                  <div className="text-4xl md:text-5xl font-display font-light text-white mb-3 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-xs text-sleep-blue-300 font-light tracking-wider uppercase">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

