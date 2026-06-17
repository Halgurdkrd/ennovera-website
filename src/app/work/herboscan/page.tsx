import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FadeInSection } from '@/components/ui/FadeInSection'

export const metadata: Metadata = {
  title: 'HerboScan AI — Ennovera Case Study',
  description:
    'AI-powered plant intelligence platform: 2,400+ species, 94% accuracy, 1.2s inference. Built by Ennovera.',
  openGraph: {
    title: 'HerboScan AI — Plant Intelligence Platform',
    description: '2,400+ plant species. 94% accuracy. Built on CNN ensemble + RAG.',
    images: ['/images/work-herboscan.jpg'],
  },
}

const tagStyle: CSSProperties = {
  fontSize: '12px',
  padding: '5px 12px',
  backgroundColor: '#F1F5F9',
  border: '1px solid #94A3B8',
  borderRadius: '999px',
  color: '#475569',
  display: 'inline-block',
  fontWeight: 500,
  lineHeight: 1.2,
}

const stats = [
  { value: '2,400+', label: 'Plant Species' },
  { value: '94%', label: 'Classification Accuracy' },
  { value: '1.2s', label: 'Average Inference Time' },
  { value: 'Offline', label: 'Deployment Capability' },
]

const steps = [
  {
    number: '01',
    title: 'Image Capture',
    body: 'User uploads a photo of a leaf, flower, or full plant — from anywhere, online or offline.',
  },
  {
    number: '02',
    title: 'Visual Classification',
    body: 'A CNN ensemble identifies the species, scoring against 2,400+ trained categories with calibrated confidence.',
  },
  {
    number: '03',
    title: 'Knowledge Retrieval',
    body: 'A RAG system surfaces structured botanical information about the species — traditional uses, active compounds, habitat.',
  },
]

const techStack = [
  'CNN Ensemble',
  'ResNet',
  'EfficientNet',
  'RAG',
  'FastAPI',
  'PostgreSQL',
  'pgvector',
  'Python',
]

const useCases = [
  {
    title: 'Botanical Researchers',
    body: 'Accelerate fieldwork. Identify species on-site without consulting print references.',
  },
  {
    title: 'Traditional Medicine Practitioners',
    body: 'Verify plant materials, cross-reference active compounds, and document preparations.',
  },
  {
    title: 'Agricultural Inspectors',
    body: 'Identify invasive species, classify crop varieties, and flag unknown plants for follow-up.',
  },
]

export default function HerboScanPage() {
  return (
    <>
      <Navbar />
      <main className="bg-canvas">
        {/* ── Hero ── */}
        <section className="pt-32 pb-12 px-6">
          <div className="max-w-5xl mx-auto">
            <a
              href="/#work"
              className="inline-block text-sm text-accent-blue hover:underline mb-10"
            >
              ← Back to Work
            </a>
            <FadeInSection>
              <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
                // CASE STUDY
              </p>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-text-primary mb-6 leading-tight">
                HerboScan AI
              </h1>
              <p className="text-xl md:text-2xl text-text-muted max-w-2xl mb-6 leading-relaxed">
                An AI-powered plant intelligence platform for botanical research, agricultural
                specialists, and herbal medicine practitioners.
              </p>
              <span className="inline-block border border-border-soft rounded-full px-3 py-1 text-xs text-text-muted">
                Botanical · Showcase
              </span>
            </FadeInSection>
          </div>
        </section>

        {/* ── Project image ── */}
        <section className="pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <Image
                src="/images/work-herboscan.jpg"
                alt="Botanical specimens with magnifying lens in soft watercolor — HerboScan plant identification AI"
                width={1456}
                height={816}
                className="rounded-2xl w-full h-auto"
                priority
              />
            </FadeInSection>
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="py-16 px-6 border-t border-border-soft">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-8">
                Overview
              </h2>
              <div className="space-y-5 text-text-muted leading-relaxed text-base md:text-lg">
                <p>
                  HerboScan AI is a plant intelligence platform built to identify, classify, and
                  analyze over 2,400 botanical species with high accuracy. Designed for botanical
                  researchers, agricultural specialists, and traditional herbal medicine
                  practitioners, the system combines computer vision with a curated knowledge base
                  to make plant identification fast, accurate, and useful.
                </p>
                <p>
                  At its core is a convolutional neural network ensemble trained on a large, curated
                  dataset of leaf, flower, and full-plant imagery. The visual classification is
                  paired with a Retrieval-Augmented Generation (RAG) layer that surfaces detailed
                  botanical knowledge — traditional uses, active compounds, growing conditions —
                  for each identified species.
                </p>
                <p>
                  The result: upload an image, get an identification in 1.2 seconds, along with
                  structured knowledge about the species you&apos;ve found. Built for
                  offline-capable deployment so it works in field conditions, not just in the lab.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Results ── */}
        <section className="py-16 px-6 bg-[#0F1729]">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12 text-center">
                Results
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl md:text-4xl font-bold text-accent-blue-soft mb-2">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-[#9BA9C2]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-16 px-6 border-t border-border-soft">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-10">
                How It Works
              </h2>
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-6">
                    <span className="text-3xl font-bold text-accent-blue/20 flex-shrink-0 w-12">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Built With ── */}
        <section className="py-16 px-6 bg-card border-t border-border-soft">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-6">
                Built With
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {techStack.map((tech) => (
                  <span key={tech} style={tagStyle}>
                    {tech}
                  </span>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Who This Helps ── */}
        <section className="py-16 px-6 border-t border-border-soft">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-10">
                Who This Helps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {useCases.map((uc, i) => (
                  <FadeInSection key={uc.title} delay={0.1 * i}>
                    <div className="bg-card border border-border-soft rounded-2xl p-6 h-full">
                      <h3 className="text-lg font-semibold text-text-primary mb-3">{uc.title}</h3>
                      <p className="text-sm text-text-muted leading-relaxed">{uc.body}</p>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-6 bg-canvas border-t border-border-soft">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInSection>
              <p className="text-lg text-text-muted mb-6">
                Want intelligence like this for your domain? Talk to us.
              </p>
              <a
                href="/#contact"
                className="inline-block bg-accent-blue text-white rounded-xl px-8 py-4 font-medium text-base hover:opacity-90 transition-opacity"
              >
                Discuss Your Project →
              </a>
            </FadeInSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
