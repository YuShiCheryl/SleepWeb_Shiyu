'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TechnologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const techFeatures = [
    {
      title: '温度控制系统',
      description: '先进的半导体制冷技术，实现±1°C精准控温',
      specs: ['功率：180W', '温度范围：15-40°C', '噪音：<25dB'],
    },
    {
      title: '生物传感器',
      description: '医疗级非接触式传感器，监测心率、呼吸、体动',
      specs: ['精度：±2bpm', '采样率：1000Hz', '响应时间：<100ms'],
    },
    {
      title: 'AI算法',
      description: '深度学习模型，分析睡眠数据并优化环境参数',
      specs: ['数据点：>50项', '学习周期：7-14天', '准确率：>95%'],
    },
  ]

  return (
    <section
      id="technology"
      ref={ref}
      className="py-32 bg-gradient-to-br from-sleep-blue-950 via-sleep-blue-900 to-sleep-blue-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-sleep-orange-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sleep-blue-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sleep-orange-400 font-semibold text-sm uppercase tracking-wider">
            核心科技
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            突破性技术创新
          </h2>
          <p className="text-xl text-sleep-blue-200 max-w-2xl mx-auto">
            每一项技术都经过严格验证，确保为您提供最佳睡眠体验
          </p>
        </motion.div>

        {/* Tech Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {techFeatures.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {tech.title}
              </h3>
              <p className="text-sleep-blue-200 mb-6">{tech.description}</p>
              <div className="space-y-2">
                {tech.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm text-sleep-blue-300"
                  >
                    <div className="w-1.5 h-1.5 bg-sleep-orange-400 rounded-full mr-2" />
                    {spec}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                科学验证的效果
              </h3>
              <div className="space-y-6">
                {[
                  { label: '入睡时间缩短', value: '35', unit: '分钟' },
                  { label: '深度睡眠增加', value: '2.5', unit: '小时' },
                  { label: '睡眠质量提升', value: '42', unit: '%' },
                  { label: '用户满意度', value: '98', unit: '%' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sleep-blue-200">{stat.label}</span>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white mr-1">
                        {stat.value}
                      </span>
                      <span className="text-sleep-orange-400">
                        {stat.unit}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual Representation */}
            <div className="relative h-80">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        isInView
                          ? {
                              scale: 1 + i * 0.3,
                              opacity: 0.3 - i * 0.07,
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        delay: 1 + i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                      className="absolute inset-0 border-4 border-sleep-orange-400 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120px',
                        height: '120px',
                      }}
                    />
                  ))}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-sleep-orange-500 to-sleep-orange-600 rounded-full flex items-center justify-center shadow-2xl shadow-sleep-orange-500/50">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-sleep-blue-300 mb-8">获得权威认证</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {['FDA认证', 'CE认证', 'ISO 13485', 'RoHS', 'FCC'].map(
              (cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white font-semibold"
                >
                  {cert}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

