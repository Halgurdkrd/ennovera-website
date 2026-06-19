'use client'

import { FadeInSection } from '@/components/ui/FadeInSection'
import { useLocale } from '@/components/LocaleProvider'

export default function ProblemSection() {
  const { t } = useLocale()

  return (
    <section id="problem" className="pt-8 pb-16 md:pt-12 md:pb-20 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <FadeInSection>
          <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
            {t.problem.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-6">
            {t.problem.title}
          </h2>
          <p className="text-lg leading-relaxed text-text-muted max-w-3xl mx-auto">
            {t.problem.body}
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
