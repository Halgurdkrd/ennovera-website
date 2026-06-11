import {
  Activity,
  FlaskConical,
  Leaf,
  TrendingUp,
  MessageCircle,
  Languages,
  LucideIcon,
} from 'lucide-react'

interface Domain {
  icon: LucideIcon
  iconBg: string
  iconColor: string
  title: string
  body: string
}

const domains: Domain[] = [
  {
    icon: Activity,
    iconBg: 'bg-accent-purple/10',
    iconColor: 'text-accent-purple',
    title: 'Healthcare & Medical AI',
    body: 'Diagnostic imaging analysis, clinical NLP, decision support systems.',
  },
  {
    icon: FlaskConical,
    iconBg: 'bg-accent-teal/10',
    iconColor: 'text-accent-teal',
    title: 'Pharmaceutical R&D',
    body: 'Drug discovery pipelines, formulation analysis, molecular generation.',
  },
  {
    icon: Leaf,
    iconBg: 'bg-accent-green/10',
    iconColor: 'text-accent-green',
    title: 'Botanical & Agricultural AI',
    body: 'Plant species identification, herbal compound analysis, agri-vision.',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-accent-blue/10',
    iconColor: 'text-accent-blue',
    title: 'Sports & Predictive Analytics',
    body: 'Match prediction, momentum modeling, tournament simulation.',
  },
  {
    icon: MessageCircle,
    iconBg: 'bg-accent-coral/10',
    iconColor: 'text-accent-coral',
    title: 'Retail & Conversational AI',
    body: 'Multi-channel chatbots, customer service automation, voice agents.',
  },
  {
    icon: Languages,
    iconBg: 'bg-accent-purple/10',
    iconColor: 'text-accent-purple',
    title: 'Regional Language AI',
    body: 'Kurdish (Sorani) and Arabic NLP, ASR, and translation systems.',
  },
]

export default function DomainsSection() {
  return (
    <section id="domains" className="py-24 md:py-32 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
            // DOMAINS OF EXPERTISE
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
            Cross-industry AI engineering.
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base md:text-lg">
            We&apos;ve shipped AI systems across healthcare, pharma, sports,
            retail, and regional language technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon
            return (
              <div
                key={domain.title}
                className="bg-card border border-border-soft rounded-2xl p-6 hover:translate-y-[-2px] hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-full mb-4 ${domain.iconBg}`}
                  aria-hidden="true"
                >
                  <Icon size={20} className={domain.iconColor} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {domain.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {domain.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
