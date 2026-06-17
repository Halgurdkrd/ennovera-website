'use client'

import {
  Bot,
  Database,
  Brain,
  Workflow,
  TrendingUp,
  MessageSquare,
  Newspaper,
  LucideIcon,
} from 'lucide-react'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { useLocale } from '@/components/LocaleProvider'

const serviceIcons: LucideIcon[] = [
  Newspaper,
  Bot,
  Database,
  Brain,
  Workflow,
  TrendingUp,
  MessageSquare,
]

export default function ServicesSection() {
  const { t } = useLocale()
  const [newsAgent, ...regularServices] = t.services.items
  const [NewsIcon, ...regularIcons] = serviceIcons

  return (
    <section id="services" className="py-16 md:py-20 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
              {t.services.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3">
              {t.services.title}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* ── News Intelligence Agent — featured card ── */}
          <FadeInSection className="sm:col-span-2 lg:col-span-2">
            <div className="relative bg-card border border-border-soft rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full">
              <span className="absolute top-4 right-4 bg-accent-coral/10 text-accent-coral rounded-full px-2 py-0.5 text-xs font-medium tracking-wider">
                {newsAgent.badge}
              </span>
              <div
                className="inline-flex p-3 rounded-full mb-4 bg-accent-blue/10"
                aria-hidden="true"
              >
                <NewsIcon size={20} className="text-accent-blue" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{newsAgent.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{newsAgent.body}</p>
              <p className="text-xs text-text-muted mt-2">{newsAgent.tagline}</p>
            </div>
          </FadeInSection>

          {/* ── Remaining 6 services ── */}
          {regularServices.map((service, i) => {
            const Icon = regularIcons[i]
            return (
              <FadeInSection key={service.title} delay={0.1 * (i + 1)}>
                <div className="bg-card border border-border-soft rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full">
                  <div
                    className="inline-flex p-3 rounded-full mb-4 bg-accent-blue/10"
                    aria-hidden="true"
                  >
                    <Icon size={20} className="text-accent-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{service.body}</p>
                </div>
              </FadeInSection>
            )
          })}
        </div>

        <FadeInSection delay={0.3}>
          <div className="text-center">
            <a
              href="#contact"
              className="inline-block border border-accent-blue text-accent-blue rounded-lg px-6 py-3 hover:bg-accent-blue/5 transition-colors font-medium"
            >
              {t.services.cta}
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
