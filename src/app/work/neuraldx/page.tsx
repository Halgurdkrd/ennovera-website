import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FadeInSection } from '@/components/ui/FadeInSection'

export const metadata: Metadata = {
  title: 'NeuralDx — Ennovera Case Study',
  description:
    'Deep learning diagnostic imaging system: multi-modal, explainable, DICOM-compatible. Built by Ennovera.',
  openGraph: {
    title: 'NeuralDx — Medical Imaging AI',
    description: 'X-ray, MRI, CT analysis with ensemble architecture and explainable outputs.',
    images: ['/images/work-neuraldx.jpg'],
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
  { value: '3', label: 'Imaging Modalities' },
  { value: 'Multi-model', label: 'Ensemble Architecture' },
  { value: 'XAI', label: 'Explainable by Design' },
  { value: 'DICOM', label: 'Standard Compatible' },
]

const steps = [
  {
    number: '01',
    title: 'Scan Input',
    body: 'Accepts standard DICOM imaging from X-ray, MRI, and CT sources — direct from hospital PACS or uploaded manually.',
  },
  {
    number: '02',
    title: 'Multi-Model Analysis',
    body: 'Parallel specialized models perform anomaly detection, anatomical classification, and severity grading.',
  },
  {
    number: '03',
    title: 'Explainable Report',
    body: 'Outputs a structured diagnostic summary with attention maps showing the visual evidence for each finding.',
  },
]

const techStack = [
  'PyTorch',
  'Ensemble Architecture',
  'DICOM',
  'Attention Maps',
  'Explainable AI',
  'FastAPI',
  'Python',
]

const useCases = [
  {
    title: 'Radiologists',
    body: 'Accelerate review. Catch findings that warrant attention, with visual evidence for every flag.',
  },
  {
    title: 'Clinical Decision Support',
    body: 'Provide a second opinion in real time, with calibrated uncertainty when present.',
  },
  {
    title: 'Hospital Workflows',
    body: 'Plug into existing PACS systems via DICOM. Output reports compatible with electronic health records.',
  },
]

export default function NeuralDxPage() {
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
                NeuralDx
              </h1>
              <p className="text-xl md:text-2xl text-text-muted max-w-2xl mb-6 leading-relaxed">
                A deep learning diagnostic system for medical imaging — analyzing X-ray, MRI, and
                CT scans with ensemble architecture and explainable outputs.
              </p>
              <span className="inline-block border border-border-soft rounded-full px-3 py-1 text-xs text-text-muted">
                Medical · Showcase
              </span>
            </FadeInSection>
          </div>
        </section>

        {/* ── Project image ── */}
        <section className="pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <Image
                src="/images/work-neuraldx.jpg"
                alt="Abstract cross-sectional medical scans with diagnostic regions — NeuralDx medical imaging AI"
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
                  NeuralDx is a multi-modal medical imaging diagnostic system designed to support
                  radiologists and clinicians in analyzing X-ray, MRI, and CT imaging. Built on a
                  deep learning ensemble architecture, it detects anomalies, classifies findings,
                  and generates structured clinical reports — with explainability built in from day
                  one.
                </p>
                <p>
                  Each scan is analyzed by multiple specialized models working in parallel: one
                  trained for anomaly detection, one for anatomical classification, and one for
                  severity grading. Their outputs are combined into a single, calibrated diagnostic
                  summary, with attention maps showing the visual evidence behind every finding.
                </p>
                <p>
                  The system is built for the clinical workflow: it produces standardized reports
                  compatible with hospital information systems, surfaces uncertainty when it exists,
                  and never replaces clinician judgment — it augments it. Explainable AI is not a
                  feature; it&apos;s the architecture.
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
                Want clinical-grade AI for your healthcare workflow? Talk to us.
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
