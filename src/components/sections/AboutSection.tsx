'use client'

import { FadeInSection } from '@/components/ui/FadeInSection'
import { useLocale } from '@/components/LocaleProvider'

export default function AboutSection() {
  const { t } = useLocale()

  return (
    <section id="about" className="py-16 md:py-20 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
              {t.about.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
              {t.about.title}
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="max-w-2xl mx-auto border-l-2 border-accent-blue pl-6 space-y-6">
            <p className="text-lg leading-relaxed text-text-muted">{t.about.p1}</p>
            <p className="text-lg leading-relaxed text-text-muted">{t.about.p2}</p>
            <p className="text-lg leading-relaxed text-text-muted">{t.about.p3}</p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
