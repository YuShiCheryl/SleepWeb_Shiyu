'use client'

import { useEffect, useRef, ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ElasticGridProps {
  children: ReactNode[]
  columns?: number
  className?: string
}

export default function ElasticGrid({ children, columns = 3, className = '' }: ElasticGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const columnsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!gridRef.current || typeof window === 'undefined') return

    // Only apply elastic effect on larger screens
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    
    if (!mediaQuery.matches) return // Disable on mobile for alignment

    const ctx = gsap.context(() => {
      // Get all items in each column
      columnsRef.current.forEach((column, columnIndex) => {
        if (!column) return

        // Calculate lag for symmetrical outer column effect
        const middleIndex = Math.floor(columns / 2)
        const distanceFromMiddle = Math.abs(columnIndex - middleIndex)
        
        // Outer columns have MORE lag (slower response)
        // scrub value: higher = more lag
        const lagAmount = 0.5 + (distanceFromMiddle * 0.4) // 0.5 to 1.3s

        // Animate each item in the column
        const items = column.children
        Array.from(items).forEach((item) => {
          gsap.to(item, {
            y: -100, // All items move up by 100px over the scroll range
            ease: 'none',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: lagAmount, // Different scrub = elastic lag effect!
              invalidateOnRefresh: true,
            },
          })
        })
      })
    }, gridRef)

    return () => {
      ctx.revert()
    }
  }, [columns, children.length])

  // Distribute children into columns
  const columnItems: ReactNode[][] = Array.from({ length: columns }, () => [])
  children.forEach((child, index) => {
    const columnIndex = index % columns
    columnItems[columnIndex].push(child)
  })

  return (
    <div ref={gridRef} className={`relative ${className}`}>
      <div className="grid gap-6 md:grid-cols-3 grid-cols-1 items-start">
        {columnItems.map((items, columnIndex) => (
          <div
            key={columnIndex}
            ref={(el) => {
              columnsRef.current[columnIndex] = el
            }}
            className="flex flex-col gap-6 w-full"
          >
            {items}
          </div>
        ))}
      </div>
    </div>
  )
}
