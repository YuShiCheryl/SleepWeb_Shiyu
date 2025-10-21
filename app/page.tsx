'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProductSection from '@/components/ProductSection'
import FeaturesSection from '@/components/FeaturesSection'
import TechnologySection from '@/components/TechnologySection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <FeaturesSection />
      <TechnologySection />
      <Footer />
    </main>
  )
}

