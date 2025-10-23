'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('✅ ' + data.message)
        setEmail('')
      } else {
        setMessage('❌ ' + data.error)
      }
    } catch (error) {
      setMessage('❌ 网络错误，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }
  const footerLinks = {
    Products: ['Temperature Mattress', 'Sleep Monitor', 'Smart Pillow', 'Accessories'],
    Support: ['Help Center', 'Installation', 'FAQ', 'Contact Us'],
    Company: ['About Us', 'News', 'Careers', 'Partners'],
    Resources: ['Sleep Blog', 'Research', 'Reviews', 'Privacy'],
  }

  return (
    <footer className="bg-sleep-blue-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="relative w-9 h-9">
                <svg
                  className="w-9 h-9"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="url(#footerGradient1)"
                    strokeWidth="0.5"
                    opacity="0.4"
                  />
                  <path
                    d="M20 6 C 12 6, 6 12, 6 20 C 6 28, 12 34, 20 34 C 16 34, 12 30, 12 20 C 12 10, 16 6, 20 6 Z"
                    fill="url(#footerGradient2)"
                  />
                  <circle cx="28" cy="12" r="1" fill="#FF7B00" opacity="0.8" />
                  <circle cx="30" cy="18" r="0.8" fill="#FF7B00" opacity="0.6" />
                  <circle cx="26" cy="26" r="0.7" fill="#FF7B00" opacity="0.5" />
                  <defs>
                    <linearGradient id="footerGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF7B00" />
                      <stop offset="100%" stopColor="#FF8C00" />
                    </linearGradient>
                    <linearGradient id="footerGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#004d99" />
                      <stop offset="100%" stopColor="#002855" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-light tracking-wider">
                  LUMINA
                </span>
                <span className="text-[8px] font-light tracking-widest text-sleep-blue-400 -mt-1">
                  SLEEP TECH
                </span>
              </div>
            </motion.div>
            <p className="text-sleep-blue-300 text-sm leading-relaxed mb-6 font-light">
              Redefining sleep with technology
              <br />
              Every night deserves perfection
            </p>
            <div className="flex space-x-4">
              {[
                {
                  name: 'WeChat',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01.178-.555c1.529-1.119 2.498-2.77 2.498-4.543 0-3.24-3.069-5.827-6.998-6.197h-.06zm-3.063 2.83c.642 0 1.162.528 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.652.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.528 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.652.52-1.18 1.162-1.18z" />
                    </svg>
                  ),
                },
                {
                  name: 'Weibo',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.737 5.443h-.002zm8.871-11.863c-.34-.112-.57-.18-.395-.652.381-1.035.421-1.926.019-2.561-.752-1.18-2.804-1.121-5.152-.03 0 0-.738.349-.549-.288.359-1.247.306-2.291-.201-2.896-1.157-1.376-4.23-.131-6.867 2.783-1.972 2.18-3.118 4.489-3.118 6.635 0 3.91 5.01 6.287 9.919 6.287 6.434 0 10.713-3.737 10.713-6.699 0-1.789-1.508-2.801-2.367-3.298l-.002-.281zm2.298-6.16C19.865.787 17.676 0 15.439.238c-.589.064-1.001.6-.918 1.184.082.575.603.992 1.197.927 1.616-.178 3.225.358 4.415 1.621 1.189 1.263 1.635 2.963 1.289 4.612-.115.539.263 1.063.802 1.183.54.118 1.062-.265 1.177-.807.502-2.383-.088-4.819-1.853-6.698h.029zm-3.43 3.221c-.752-.814-1.762-1.149-2.773-1.028-.498.06-.853.514-.793 1.02.06.496.51.853 1.003.794.55-.064 1.097.12 1.513.506.414.388.607.934.533 1.479-.045.527.336.984.854 1.029.519.044.976-.338 1.021-.859.137-1.036-.204-2.126-.961-2.941h.03z"/>
                    </svg>
                  ),
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sleep-orange-500 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={index}>
              <h3 className="font-display font-light text-white mb-4 tracking-wide">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-sleep-blue-300 hover:text-white transition-colors text-sm font-light relative group inline-block"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-sleep-orange-600 group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-t border-sleep-blue-800 pt-12 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-display font-light mb-4 tracking-tight">Stay Updated</h3>
            <p className="text-sleep-blue-300 mb-6 font-light text-sm">
              Get the latest sleep research and product updates
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                  className="flex-1 px-6 py-3 bg-white/10 border border-sleep-orange-600/20 text-white placeholder-sleep-blue-400 focus:outline-none focus:border-sleep-orange-600 transition-colors disabled:opacity-50 font-light text-sm"
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="px-8 py-3 bg-sleep-orange-600 text-white font-light text-sm hover:bg-sleep-orange-700 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed tracking-wide"
                >
                  {isLoading ? 'Sending...' : 'Subscribe'}
                </motion.button>
              </div>
              {message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm"
                >
                  {message}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-sleep-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-sleep-blue-400 font-light">
          <p>© 2025 Lumina Sleep Technology. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors text-xs tracking-wide">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors text-xs tracking-wide">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors text-xs tracking-wide">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

