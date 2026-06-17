'use client'

import {
  Activity,
  FlaskConical,
  Leaf,
  TrendingUp,
  MessageCircle,
  Languages,
  LucideIcon,
} from 'lucide-react'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { useLocale } from '@/components/LocaleProvider'

const domainIcons: LucideIcon[] = [
  Activity,
  FlaskConical,
  Leaf,
  TrendingUp,
  MessageCircle,
  Languages,
]

export default function DomainsSection() {
  const { t } = useLocale()

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
          {t.domains.items.map((domain, i) => {
            const Icon = domainIcons[i]
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
        </div>
      </div>
    </section>
  )
}
