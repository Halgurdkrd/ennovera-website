import {
  Bot,
  Database,
  Brain,
  Workflow,
  TrendingUp,
  MessageSquare,
  LucideIcon,
} from 'lucide-react'
import { FadeInSection } from '@/components/ui/FadeInSection'

interface Service {
  icon: LucideIcon
  title: string
  body: string
}

const services: Service[] = [
  {
    icon: Bot,
    title: 'Custom AI Agents',
    body: 'Multi-agent systems and autonomous workflows that perceive, reason, and act.',
  },
  {
    icon: Database,
    title: 'RAG Knowledge Systems',
    body: 'Retrieval-augmented assistants that turn documents into queryable intelligence.',
  },
  {
    icon: Brain,
    title: 'Machine Learning Models',
    body: 'CNNs, ANNs, transformers, LoRA fine-tuning, and custom architectures.',
  },
  {
    icon: Workflow,
    title: 'Automation Workflows',
    body: 'n8n and custom pipelines connecting your tools, APIs, and AI models.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    body: 'Statistical and ML models for forecasting and decision support.',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    body: 'Instagram, WhatsApp, web, and voice — multilingual conversational AI.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
              // WHAT WE BUILD
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3">
              Engineering capabilities.
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              End-to-end AI services from concept to production.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <FadeInSection key={service.title} delay={0.1 * i}>
                <div className="bg-card border border-border-soft rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full">
                  <div
                    className="inline-flex p-3 rounded-full mb-4 bg-accent-blue/10"
                    aria-hidden="true"
                  >
                    <Icon size={20} className="text-accent-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {service.body}
                  </p>
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
              Discuss a Project →
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
