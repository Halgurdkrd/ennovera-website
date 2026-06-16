import { GraduationCap, Rocket, Languages, LucideIcon } from 'lucide-react'
import { FadeInSection } from '@/components/ui/FadeInSection'

interface Pillar {
  icon: LucideIcon
  iconColor: string
  title: string
  stat: string
  statColor: string
  body: string
}

const pillars: Pillar[] = [
  {
    icon: GraduationCap,
    iconColor: '#7C9EE8',
    title: 'PhD-Led Engineering',
    stat: '5+ Years',
    statColor: '#7C9EE8',
    body: 'A decade of academic and industry experience in machine learning, signal processing, and applied AI. Every project led personally — not handed to a junior.',
  },
  {
    icon: Rocket,
    iconColor: '#6DD3C0',
    title: 'Production Systems Shipped',
    stat: '10+ Projects',
    statColor: '#6DD3C0',
    body: "We don't stop at proof of concept. Every system we build runs in production, handles real traffic, and delivers measurable results.",
  },
  {
    icon: Languages,
    iconColor: '#FF9D85',
    title: 'Multi-language AI',
    stat: 'EN · AR · KU',
    statColor: '#FF9D85',
    body: 'Native Kurdish (Sorani) and Arabic NLP, alongside English. We build AI that understands the languages and contexts of the Middle East.',
  },
]

export default function PillarsSection() {
  return (
    <section
      id="pillars"
      className="py-20 md:py-28 bg-[#0F1729] scroll-mt-16 relative overflow-hidden"
    >
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
              // WHY ENNOVERA
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
              How we engineer AI.
            </h2>
            <p className="text-[#9BA9C2] max-w-2xl mx-auto">
              Three foundations shape every project we deliver: technical depth,
              real-world outcomes, and language coverage few competitors offer.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <FadeInSection key={pillar.title} delay={0.1 * i}>
                <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-6 md:p-8 hover:bg-white/[0.06] hover:border-white/20 hover:scale-[1.02] transition-all duration-300 h-full">
                  <div className="mb-4" aria-hidden="true">
                    <Icon size={24} style={{ color: pillar.iconColor }} />
                  </div>
                  <p
                    className="text-3xl font-bold mb-2"
                    style={{ color: pillar.statColor }}
                  >
                    {pillar.stat}
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {pillar.title}
                  </h3>
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
