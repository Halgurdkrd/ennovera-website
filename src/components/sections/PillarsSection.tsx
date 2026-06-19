'use client'

import { GraduationCap, Rocket, Languages, LucideIcon } from 'lucide-react'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { useLocale } from '@/components/LocaleProvider'
import { ParticleField } from '@/components/ui/ParticleField'

const pillarsMeta: Array<{ icon: LucideIcon; iconColor: string; statColor: string }> = [
  { icon: GraduationCap, iconColor: '#7C9EE8', statColor: '#7C9EE8' },
  { icon: Rocket, iconColor: '#6DD3C0', statColor: '#6DD3C0' },
  { icon: Languages, iconColor: '#FF9D85', statColor: '#FF9D85' },
]

export default function PillarsSection() {
  const { t } = useLocale()

  return (
    <section
      id="pillars"
      className="py-20 md:py-28 bg-[#0F1729] scroll-mt-16 relative overflow-hidden"
    >
      {/* Particle drift background */}
      <ParticleField count={35} color="#7C9EE8" />

      {/* Radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(59,91,219,0.08) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeInSection>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-accent-blue-soft font-medium mb-4">
              {t.pillars.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
              {t.pillars.title}
            </h2>
            <p className="text-[#9BA9C2] max-w-2xl mx-auto">{t.pillars.subtitle}</p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.pillars.items.map((pillar, i) => {
            const { icon: Icon, iconColor, statColor } = pillarsMeta[i]
            return (
              <FadeInSection key={pillar.title} delay={0.1 * i}>
                <div className="bg-white/[0.04] backdrop-blur-md border border-white/15 rounded-2xl p-6 md:p-8 shadow-lg shadow-black/20 hover:bg-white/[0.07] hover:border-white/25 hover:backdrop-blur-lg hover:scale-[1.02] transition-all duration-300 h-full">
                  <div className="mb-4" aria-hidden="true">
                    <Icon size={24} style={{ color: iconColor }} />
                  </div>
                  <p className="text-3xl font-bold mb-2" style={{ color: statColor }}>
                    {pillar.stat}
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                  <p className="text-[#C4D0E5] leading-relaxed">{pillar.body}</p>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
