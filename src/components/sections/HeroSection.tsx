'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLocale } from '@/components/LocaleProvider'
import { HeroDotsOverlay } from '@/components/ui/HeroDotsOverlay'

export default function HeroSection() {
  const { t } = useLocale()

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image — full bleed */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Ennovera AI engineering — networked data flows across a cityscape, illustrated in soft watercolor"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center' }}
        />
      </div>

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(250, 251, 252, 0.85) 0%, rgba(250, 251, 252, 0.7) 40%, rgba(250, 251, 252, 0.85) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Animated dots overlay */}
      <HeroDotsOverlay />

      {/* Hero content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-6"
        >
          {t.hero.label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-6 [hyphens:none]"
          style={{ wordBreak: 'normal', overflowWrap: 'normal' }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.a
          href="#work"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="inline-block bg-accent-blue text-white rounded-xl px-8 py-4 text-base font-medium hover:scale-[1.03] hover:shadow-lg hover:shadow-accent-blue/30 transition-all"
        >
          {t.hero.cta}
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ChevronDown className="text-accent-blue/60" size={28} />
      </motion.div>
    </section>
  )
}
