'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProductSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const products = [
    {
      title: '智能温控床垫',
      subtitle: 'Pro Series',
      description: '精准温度控制，AI学习您的睡眠偏好，自动调节最适宜的温度环境',
      features: ['±1°C精准控温', '双区独立调节', 'AI自动学习'],
      gradient: 'from-sleep-blue-700 to-sleep-blue-500',
    },
    {
      title: '睡眠监测系统',
      subtitle: 'Monitor+',
      description: '非接触式全方位监测，实时追踪心率、呼吸、睡眠周期',
      features: ['医疗级传感器', '睡眠评分', '健康建议'],
      gradient: 'from-sleep-blue-600 to-sleep-orange-500',
    },
    {
      title: '智能枕头',
      subtitle: 'Pillow Smart',
      description: '自适应高度调节，配合温控系统，打造完美睡眠姿势',
      features: ['记忆海绵', '智能升降', '凉感面料'],
      gradient: 'from-sleep-orange-500 to-sleep-orange-400',
    },
  ]

  return (
    <section id="product" ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sleep-orange-500 font-semibold text-sm uppercase tracking-wider">
            产品系列
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-sleep-blue-900 mt-4 mb-6">
            科技赋能睡眠健康
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            每一款产品都经过严格的科学验证，为您提供可靠的睡眠解决方案
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Product Image Placeholder */}
                <div
                  className={`h-64 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 0.1 } : {}}
                    transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                    className="absolute inset-0 bg-white rounded-full blur-3xl transform scale-150"
                  />
                  <svg
                    className="w-32 h-32 text-white/50 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>

                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-sleep-orange-500 text-sm font-semibold">
                      {product.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-sleep-blue-900 mt-1">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <svg
                          className="w-5 h-5 text-sleep-orange-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-sleep-blue-900 text-white rounded-full font-medium hover:bg-sleep-blue-800 transition-colors"
                  >
                    了解更多
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

