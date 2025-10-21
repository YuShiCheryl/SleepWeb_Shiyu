'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProductSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const products = [
    {
      title: 'Temperature Control Mattress',
      subtitle: 'PRO SERIES',
      description: 'Precision temperature control with AI learning algorithm, automatically adjusting to your perfect sleep environment',
      features: ['±1°C Precision', 'Dual Zone Control', 'AI Learning'],
    },
    {
      title: 'Sleep Monitoring System',
      subtitle: 'MONITOR+',
      description: 'Non-intrusive full monitoring system tracking heart rate, breathing patterns, and sleep cycles',
      features: ['Medical-grade Sensors', 'Sleep Score', 'Health Insights'],
    },
    {
      title: 'Smart Pillow',
      subtitle: 'PILLOW SMART',
      description: 'Adaptive height adjustment working seamlessly with temperature control for perfect posture',
      features: ['Memory Foam', 'Auto Height Adjust', 'Cooling Fabric'],
    },
  ]

  return (
    <section id="product" ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* 背景装饰 */}
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
              Product Line
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-light text-sleep-blue-950 mb-6 tracking-tight">
            Technology Meets
            <br />
            <span className="text-sleep-blue-800">Sleep Science</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl font-light">
            Every product is rigorously tested and scientifically validated
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-gray-50 overflow-hidden">
                {/* 顶部橙色边框 */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sleep-orange-600 via-sleep-orange-500 to-sleep-orange-600 origin-left"
                />

                {/* 产品图片区域 */}
                <div className="relative h-80 bg-gradient-to-br from-sleep-blue-900 to-sleep-blue-950 flex items-center justify-center overflow-hidden">
                  {/* 深空星点效果 */}
                  <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0.2, 0.8, 0.2],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </div>

                  {/* 产品图标 */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <svg
                      className="w-24 h-24 text-white/20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </motion.div>

                  {/* 橙色光晕装饰 */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-radial from-sleep-orange-600/20 via-transparent to-transparent"
                  />
                </div>

                {/* 产品信息 */}
                <div className="p-8 relative">
                  {/* 左侧装饰线 */}
                  <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-sleep-orange-600/30 to-transparent" />
                  
                  <div className="mb-4">
                    <span className="text-sleep-orange-600 text-xs font-light tracking-widest uppercase">
                      {product.subtitle}
                    </span>
                    <h3 className="text-2xl font-display font-light text-sleep-blue-950 mt-2 tracking-tight">
                      {product.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed font-light text-sm">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm font-light">
                        <div className="w-1 h-1 bg-sleep-orange-600 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="group/btn flex items-center gap-2 text-sleep-blue-950 font-light text-sm tracking-wide"
                  >
                    <span>Discover More</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {/* 底部装饰线 */}
                    <div className="absolute bottom-0 left-0 w-12 h-px bg-sleep-orange-600 group-hover/btn:w-24 transition-all" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
