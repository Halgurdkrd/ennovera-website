'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-canvas">
      {/* Top gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-accent-blue/[0.04] to-transparent pointer-events-none"
        aria-hidden="true"
      />
      {/* Radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(124,158,232,0.08) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
          className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-5"
        >
          // AI ENGINEERING STUDIO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-text-primary mb-6 leading-tight"
        >
          Practical AI systems for
          <br className="hidden md:block" />
          real-world problems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We build production-grade machine learning, AI agents, and
          automation — from research to deployment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
        >
          <a
            href="#work"
            className="inline-block bg-accent-blue text-white rounded-lg px-6 py-3 hover:opacity-90 transition-opacity font-medium"
          >
            Explore Our Work →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
          className="max-w-5xl mx-auto mt-12 px-4"
        >
          <Image
            src="/images/hero.jpg"
            alt="Ennovera AI engineering — networked data flows across a cityscape, illustrated in soft watercolor"
            width={1456}
            height={816}
            priority={true}
            className="rounded-2xl w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent-blue/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}
