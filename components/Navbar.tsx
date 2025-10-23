'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Products', href: '#product' },
    { name: 'Technology', href: '#technology' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3"
          >
            <div className="relative w-10 h-10">
              {/* 月亮形状 Logo */}
              <svg
                className="w-10 h-10"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 外圈橙色光晕 */}
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="url(#gradient1)"
                  strokeWidth="0.5"
                  opacity="0.4"
                />
                
                {/* 月亮形状 */}
                <path
                  d="M20 6 C 12 6, 6 12, 6 20 C 6 28, 12 34, 20 34 C 16 34, 12 30, 12 20 C 12 10, 16 6, 20 6 Z"
                  fill="url(#gradient2)"
                />
                
                {/* 小星星点缀 */}
                <circle cx="28" cy="12" r="1" fill="#FF7B00" opacity="0.8" />
                <circle cx="30" cy="18" r="0.8" fill="#FF7B00" opacity="0.6" />
                <circle cx="26" cy="26" r="0.7" fill="#FF7B00" opacity="0.5" />
                
                {/* 渐变定义 */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF7B00" />
                    <stop offset="100%" stopColor="#FF8C00" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#001f42" />
                    <stop offset="100%" stopColor="#000e1f" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-light tracking-wider text-sleep-blue-900">
                LUMINA
              </span>
              <span className="text-[9px] font-light tracking-widest text-sleep-blue-600 -mt-1">
                SLEEP TECH
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-sleep-blue-900 transition-colors font-light text-sm tracking-wide relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sleep-orange-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-6 py-2 bg-sleep-orange-600 text-white font-light text-sm tracking-wide overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-sleep-blue-900 transition-all ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-sleep-blue-900 transition-all ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-sleep-blue-900 transition-all ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-sleep-blue-700 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full px-6 py-2 bg-sleep-orange-600 text-white font-light text-sm tracking-wide">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

