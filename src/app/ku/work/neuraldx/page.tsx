import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Image from 'next/image'
import { LocaleProvider } from '@/components/LocaleProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { ku } from '@/i18n/locales/ku'

export const metadata: Metadata = {
  title: 'NeuralDx — Ennovera',
  description:
    'سیستمی دەستنیشانکردنی deep learning بۆ وێنەگریی پزیشکی: فرە-مۆدێل، ڕوونکرداوە، گونجاو لەگەڵ DICOM. بونیادنراوە لەلایەن Ennovera.',
  alternates: {
    canonical: 'https://ennovera.com/ku/work/neuraldx',
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

const techStack = [
  'PyTorch',
  'Ensemble Architecture',
  'DICOM',
  'Attention Maps',
  'Explainable AI',
  'FastAPI',
  'Python',
]

const d = ku.detail
const nx = ku.neuraldx

export default function KuNeuralDxPage() {
  return (
    <LocaleProvider locale="ku">
      <Navbar />
      <main className="bg-canvas">
        {/* ── Hero ── */}
        <section className="pt-32 pb-12 px-6">
          <div className="max-w-5xl mx-auto">
            <a
              href="/ku/#work"
              className="inline-block text-sm text-accent-blue hover:underline mb-10"
            >
              {d.backToWork}
            </a>
            <FadeInSection>
              <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
                {d.label}
              </p>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-text-primary mb-6 leading-tight">
                {nx.title}
              </h1>
              <p className="text-xl md:text-2xl text-text-muted max-w-2xl mb-6 leading-relaxed">
                {nx.subtitle}
              </p>
              <span className="inline-block border border-border-soft rounded-full px-3 py-1 text-xs text-text-muted">
                {nx.category}
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
                {d.overview}
              </h2>
              <div className="space-y-5 text-text-muted leading-relaxed text-base md:text-lg">
                <p>{nx.overview.p1}</p>
                <p>{nx.overview.p2}</p>
                <p>{nx.overview.p3}</p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Results ── */}
        <section className="py-16 px-6 bg-[#0F1729]">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12 text-center">
                {d.results}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {nx.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl md:text-4xl font-bold text-accent-blue-soft mb-2">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-[#9BA9C2]">{stat.label}</p>
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
                {d.howItWorks}
              </h2>
              <div className="space-y-8">
                {nx.steps.map((step, i) => (
                  <div key={step.title} className="flex gap-6">
                    <span className="text-3xl font-bold text-accent-blue/20 flex-shrink-0 w-12">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">{step.title}</h3>
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
                {d.builtWith}
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
                {d.whoThisHelps}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {nx.useCases.map((uc, i) => (
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
              <p className="text-lg text-text-muted mb-6">{nx.cta}</p>
              <a
                href="/ku/#contact"
                className="inline-block bg-accent-blue text-white rounded-xl px-8 py-4 font-medium text-base hover:opacity-90 transition-opacity"
              >
                {d.discussProject}
              </a>
            </FadeInSection>
          </div>
        </section>
      </main>
      <Footer />
    </LocaleProvider>
  )
}
