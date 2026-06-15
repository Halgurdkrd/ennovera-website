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

interface Domain {
  icon: LucideIcon
  title: string
  body: string
}

const domains: Domain[] = [
  {
    icon: Activity,
    title: 'Healthcare & Medical AI',
    body: 'Diagnostic imaging analysis, clinical NLP, decision support systems.',
  },
  {
    icon: FlaskConical,
    title: 'Pharmaceutical R&D',
    body: 'Drug discovery pipelines, formulation analysis, molecular generation.',
  },
  {
    icon: Leaf,
    title: 'Botanical & Agricultural AI',
    body: 'Plant species identification, herbal compound analysis, agri-vision.',
  },
  {
    icon: TrendingUp,
    title: 'Sports & Predictive Analytics',
    body: 'Match prediction, momentum modeling, tournament simulation.',
  },
  {
    icon: MessageCircle,
    title: 'Retail & Conversational AI',
    body: 'Multi-channel chatbots, customer service automation, voice agents.',
  },
  {
    icon: Languages,
    title: 'Regional Language AI',
    body: 'Kurdish (Sorani) and Arabic NLP, ASR, and translation systems.',
  },
]

export default function DomainsSection() {
  return (
    <section id="domains" className="py-16 md:py-20 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
              // DOMAINS OF EXPERTISE
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3">
              Cross-industry AI engineering.
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-base md:text-lg">
              We&apos;ve shipped AI systems across healthcare, pharma, sports,
              retail, and regional language technology.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, i) => {
            const Icon = domain.icon
            return (
              <FadeInSection key={domain.title} delay={0.1 * i}>
                <div className="bg-card border border-border-soft rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full">
                  <div
                    className="inline-flex p-3 rounded-full mb-4 bg-accent-blue/10"
                    aria-hidden="true"
                  >
                    <Icon size={20} className="text-accent-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {domain.body}
                  </p>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
