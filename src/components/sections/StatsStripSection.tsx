'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLocale } from '@/components/LocaleProvider'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1200
    const steps = 40
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsStripSection() {
  const { t } = useLocale()

  return (
    <section className="bg-canvas py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-border-soft mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {t.stats.items.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: 'easeOut' }}
            >
              <div className="text-5xl md:text-6xl font-bold text-accent-blue mb-2">
                {stat.numericTarget !== null ? (
                  <Counter target={stat.numericTarget} suffix={stat.suffix} />
                ) : (
                  stat.display
                )}
              </div>
              <p className="text-sm uppercase tracking-widest text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <hr className="border-border-soft mt-12" />
      </div>
    </section>
  )
}
