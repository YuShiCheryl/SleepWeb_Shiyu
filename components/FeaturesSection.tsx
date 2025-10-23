'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ElasticGrid from './ElasticGrid'

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI-Powered Learning',
      description: 'Continuously learns your sleep patterns and automatically optimizes environmental parameters',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Medical-Grade Reliability',
      description: 'Certified by international standards with encrypted data protection for your health security',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Instant Response',
      description: 'Millisecond-level temperature adjustment, real-time body monitoring with immediate optimization',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '24/7 Protection',
      description: 'Continuous monitoring with smart alerts and professional support team always on standby',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Industry Leading',
      description: 'Multiple international design awards with patented technology setting industry standards',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Thoughtful Design',
      description: 'Human-centered details with silent operation, seamlessly integrating technology into life',
    },
  ]

  return (
    <section id="features" ref={ref} className="py-32 bg-gray-50 relative overflow-hidden">
      {/* 顶部装饰线 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sleep-orange-600/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-sleep-orange-600" />
            <span className="text-sleep-orange-600 font-light text-sm uppercase tracking-widest">
              Core Features
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-light text-sleep-blue-950 mb-6 tracking-tight">
            Why Choose
            <br />
            <span className="text-sleep-blue-800">Lumina</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl font-light">
            Not just products, but complete sleep health solutions
          </p>
        </motion.div>

        <ElasticGrid columns={3}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white border-l border-transparent hover:border-sleep-orange-600/40 transition-all duration-300">
                {/* 顶部装饰线 */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.08 + 0.2 }}
                  className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-sleep-orange-600 to-transparent origin-left"
                />

                {/* 图标 */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-12 h-12 mb-6"
                >
                  <div className="absolute inset-0 border border-sleep-orange-600/30 flex items-center justify-center">
                    <div className="text-sleep-orange-600">{feature.icon}</div>
                  </div>
                  {/* 图标光晕 */}
                  <div className="absolute inset-0 bg-sleep-orange-600/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* 内容 */}
                <h3 className="text-xl font-display font-light text-sleep-blue-950 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-sm">
                  {feature.description}
                </p>

                {/* hover 效果 - 底部橙色线 */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-sleep-orange-600 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </ElasticGrid>

        {/* 底部装饰引导 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-sleep-orange-600/50" />
            <span className="text-sm text-gray-400 font-light tracking-wider">
              Experience the future of sleep
            </span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-sleep-orange-600/50" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
