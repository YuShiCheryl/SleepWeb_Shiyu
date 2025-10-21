'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const footerLinks = {
    产品: ['智能温控床垫', '睡眠监测系统', '智能枕头', '配件与服务'],
    支持: ['帮助中心', '安装指南', '常见问题', '联系客服'],
    公司: ['关于我们', '新闻动态', '加入我们', '合作伙伴'],
    资源: ['睡眠博客', '科学研究', '用户评价', '隐私政策'],
  }

  return (
    <footer className="bg-sleep-blue-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-sleep-blue-700 to-sleep-blue-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">智眠科技</span>
            </motion.div>
            <p className="text-sleep-blue-300 text-sm leading-relaxed mb-6">
              用科技重新定义睡眠
              <br />
              让每一晚都值得期待
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
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-sleep-blue-300 hover:text-white transition-colors text-sm"
                    >
                      {link}
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
            <h3 className="text-xl font-semibold mb-4">订阅睡眠科学资讯</h3>
            <p className="text-sleep-blue-300 mb-6">
              获取最新的睡眠研究成果和产品更新
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-sleep-blue-400 focus:outline-none focus:border-sleep-orange-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-sleep-orange-500 text-white rounded-full font-medium hover:bg-sleep-orange-600 transition-colors whitespace-nowrap"
              >
                订阅
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-sleep-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-sleep-blue-400">
          <p>© 2025 智眠科技 版权所有</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              隐私政策
            </a>
            <a href="#" className="hover:text-white transition-colors">
              服务条款
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie设置
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

