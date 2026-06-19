'use client'

import {
  Activity,
  FlaskConical,
  Leaf,
  TrendingUp,
  MessageCircle,
  Languages,
  Sparkles,
  ArrowRight,
  LucideIcon,
} from 'lucide-react'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { useLocale } from '@/components/LocaleProvider'

const regularIcons: LucideIcon[] = [
  Activity,
  FlaskConical,
  Leaf,
  TrendingUp,
  MessageCircle,
  Languages,
]

export default function DomainsSection() {
  const { t } = useLocale()
  const regularDomains = t.domains.items.slice(0, 6)
  const customDomain = t.domains.items[6]

  return (
    <section id="domains" className="py-16 md:py-20 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
              {t.domains.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3">
              {t.domains.title}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-base md:text-lg">
              {t.domains.subtitle}
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularDomains.map((domain, i) => {
            const Icon = regularIcons[i]
            return (
              <FadeInSection key={domain.title} delay={0.1 * i}>
                <div className="bg-card border border-border-soft rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full">
                  <div
                    className="inline-flex p-3 rounded-full mb-4 bg-accent-blue/10"
                    aria-hidden="true"
                  >
                    <Icon size={20} className="text-accent-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{domain.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{domain.body}</p>
                </div>
              </FadeInSection>
            )
          })}

          {/* 7th card — Custom Systems — full-width, coral accent */}
          {customDomain && (
            <FadeInSection className="sm:col-span-2 lg:col-span-3" delay={0.6}>
              <div className="bg-accent-coral/5 border border-accent-coral/20 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full flex items-start gap-5">
                <div
                  className="inline-flex p-3 rounded-full bg-accent-coral/10 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <Sparkles size={20} className="text-accent-coral" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {customDomain.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">{customDomain.body}</p>
                </div>
              </div>
            </FadeInSection>
          )}
        </div>

        {/* Callout link to contact */}
        <FadeInSection delay={0.7}>
          <a
            href="#contact"
            className="block mt-12 md:mt-16 text-center text-base md:text-lg text-text-muted hover:text-accent-blue transition-colors group"
          >
            {t.domains.callout}
            <ArrowRight
              className="inline-block ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}
