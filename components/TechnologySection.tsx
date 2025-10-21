'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import StarryBackground from './StarryBackground'
import AnimatedGradient from './AnimatedGradient'

export default function TechnologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const techFeatures = [
    {
      title: 'Temperature Control',
      description: 'Advanced semiconductor cooling technology with ±1°C precision control',
      specs: ['Power: 180W', 'Range: 15-40°C', 'Noise: <25dB'],
    },
    {
      title: 'Biosensors',
      description: 'Medical-grade non-contact sensors monitoring heart rate, breathing, and movement',
      specs: ['Accuracy: ±2bpm', 'Sample Rate: 1000Hz', 'Response: <100ms'],
    },
    {
      title: 'AI Algorithm',
      description: 'Deep learning model analyzing sleep data and optimizing environment parameters',
      specs: ['Data Points: 50+', 'Learning Period: 7-14 days', 'Accuracy: >95%'],
    },
  ]

  return (
    <section id="technology" ref={ref} className="relative py-32 overflow-hidden">
      {/* 深空背景 */}
      <AnimatedGradient />
      <StarryBackground />

      {/* 橙色装饰线 */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 2 }}
          className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sleep-orange-600/40 to-transparent origin-center"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-0 bottom-0 right-32 w-px bg-gradient-to-b from-transparent via-sleep-orange-600/30 to-transparent origin-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-sleep-orange-600" />
            <span className="text-sleep-orange-400 font-light text-sm uppercase tracking-widest">
              Core Technology
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-light text-white mb-6 tracking-tight">
            Breakthrough
            <br />
            <span className="text-sleep-blue-200">Innovation</span>
          </h2>
          <p className="text-lg text-sleep-blue-200 max-w-2xl font-light">
            Every technology is rigorously validated to ensure optimal sleep experience
          </p>
        </motion.div>

        {/* Tech Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {techFeatures.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border-l border-sleep-orange-600/30 hover:bg-white/10 transition-all duration-300">
                {/* 顶部装饰 */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-sleep-orange-600 to-transparent origin-left"
                />

                <h3 className="text-2xl font-display font-light text-white mb-4 tracking-tight">
                  {tech.title}
                </h3>
                <p className="text-sleep-blue-200 mb-6 font-light text-sm leading-relaxed">
                  {tech.description}
                </p>
                <div className="space-y-2">
                  {tech.specs.map((spec, i) => (
                    <div key={i} className="flex items-center text-sm font-light">
                      <div className="w-1 h-1 bg-sleep-orange-500 mr-3" />
                      <span className="text-sleep-blue-300">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* 底部hover效果 */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-sleep-orange-600 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          {/* 边框装饰 */}
          <div className="absolute -inset-px bg-gradient-to-r from-transparent via-sleep-orange-600/30 to-transparent" />
          
          <div className="relative bg-white/5 backdrop-blur-md p-12 border-l border-sleep-orange-600/30">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* 左侧数据 */}
              <div>
                <h3 className="text-3xl font-display font-light text-white mb-8 tracking-tight">
                  Scientifically Validated Results
                </h3>
                <div className="space-y-8">
                  {[
                    { label: 'Faster Sleep Onset', value: '35', unit: 'min' },
                    { label: 'Increased Deep Sleep', value: '2.5', unit: 'hrs' },
                    { label: 'Sleep Quality Improvement', value: '42', unit: '%' },
                    { label: 'User Satisfaction', value: '98', unit: '%' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="relative group"
                    >
                      {/* 左侧装饰线 */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-px bg-sleep-orange-600 group-hover:w-12 transition-all duration-300 -ml-16" />
                      
                      <div className="flex items-baseline justify-between">
                        <span className="text-sleep-blue-200 font-light text-sm">{stat.label}</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-display font-light text-white tracking-tight">
                            {stat.value}
                          </span>
                          <span className="text-sleep-orange-400 text-sm font-light">
                            {stat.unit}
                          </span>
                        </div>
                      </div>
                      {/* 底部分隔线 */}
                      <div className="mt-4 h-px bg-gradient-to-r from-sleep-orange-600/20 to-transparent" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 右侧视觉元素 */}
              <div className="relative h-96">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* 脉冲圆环 */}
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute border border-sleep-orange-600"
                        style={{
                          width: '120px',
                          height: '120px',
                          borderRadius: '50%',
                        }}
                        animate={
                          isInView
                            ? {
                                scale: [1, 1.5 + i * 0.3],
                                opacity: [0, 0.4, 0],
                              }
                            : { scale: 1, opacity: 0 }
                        }
                        transition={{
                          duration: 3,
                          delay: i * 0.75,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                      />
                    ))}
                    
                    {/* 中心图标 */}
                    <div className="relative z-10 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-sleep-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>

                    {/* 装饰线 */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0"
                    >
                      <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-sleep-orange-600/50 to-transparent -translate-x-1/2" />
                      <div className="absolute bottom-0 left-1/2 w-px h-20 bg-gradient-to-t from-sleep-orange-600/50 to-transparent -translate-x-1/2" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-sleep-orange-600/50" />
            <span className="text-sleep-blue-300 text-sm font-light tracking-wider uppercase">
              Certified Excellence
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-sleep-orange-600/50" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {['FDA', 'CE', 'ISO 13485', 'RoHS', 'FCC'].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="relative group"
              >
                <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-sleep-orange-600/20 hover:border-sleep-orange-600/50 transition-all">
                  <span className="text-white font-light text-sm tracking-wider">{cert}</span>
                </div>
                {/* 底部装饰 */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-sleep-orange-600 group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
