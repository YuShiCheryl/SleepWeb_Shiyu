import type { Metadata } from 'next'
import { Inter, Urbanist } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
})

const urbanist = Urbanist({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-urbanist'
})

export const metadata: Metadata = {
  title: 'Lumina Sleep | Redefining Deep Sleep',
  description: 'Experience the future of sleep technology with Lumina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} ${urbanist.variable} font-sans`}>{children}</body>
    </html>
  )
}

