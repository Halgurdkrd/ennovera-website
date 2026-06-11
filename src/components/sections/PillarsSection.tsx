import { Microscope, Workflow, MapPin, LucideIcon } from 'lucide-react'

interface Pillar {
  icon: LucideIcon
  iconBg: string
  iconColor: string
  title: string
  body: string
}

const pillars: Pillar[] = [
  {
    icon: Microscope,
    iconBg: 'bg-accent-purple/10',
    iconColor: 'text-accent-purple',
    title: 'Engineering Rigor',
    body: 'PhD-led engineering with deep machine learning, computer vision, and NLP foundations.',
  },
  {
    icon: Workflow,
    iconBg: 'bg-accent-teal/10',
    iconColor: 'text-accent-teal',
    title: 'Applied Outcomes',
    body: 'We build systems that ship, with measurable results and production-grade reliability.',
  },
  {
    icon: MapPin,
    iconBg: 'bg-accent-green/10',
    iconColor: 'text-accent-green',
    title: 'Regional Depth',
    body: 'Native Kurdish and Arabic AI capability, with infrastructure designed for the Middle East.',
  },
]

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-24 md:py-32 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
            // WHY ENNOVERA
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
            Engineered to ship. Designed to last.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="bg-card rounded-2xl border border-border-soft p-6 md:p-8 hover:translate-y-[-2px] hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-full mb-5 ${pillar.iconBg}`}
                  aria-hidden="true"
                >
                  <Icon size={22} className={pillar.iconColor} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{pillar.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
