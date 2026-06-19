'use client'
import { motion } from 'framer-motion'

const DOTS = [
  { x: 15, y: 35, size: 8, delay: 0 },
  { x: 28, y: 70, size: 6, delay: 0.4 },
  { x: 42, y: 25, size: 10, delay: 0.8 },
  { x: 55, y: 60, size: 7, delay: 0.2 },
  { x: 68, y: 40, size: 9, delay: 0.6 },
  { x: 82, y: 75, size: 6, delay: 1.0 },
  { x: 90, y: 30, size: 8, delay: 0.3 },
  { x: 20, y: 55, size: 7, delay: 0.7 },
  { x: 38, y: 85, size: 6, delay: 0.5 },
  { x: 73, y: 20, size: 8, delay: 0.9 },
]

export function HeroDotsOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {DOTS.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: '#3B5BDB',
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.4, 1],
            boxShadow: [
              '0 0 0px rgba(59, 91, 219, 0)',
              '0 0 12px rgba(59, 91, 219, 0.6)',
              '0 0 0px rgba(59, 91, 219, 0)',
            ],
          }}
          transition={{
            duration: 3,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
