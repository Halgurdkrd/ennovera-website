import {
  Bot,
  Database,
  Brain,
  Workflow,
  TrendingUp,
  MessageSquare,
  Newspaper,
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
    body: 'Assistants that read your documents and answer questions about them — accurately, with sources.',
  },
  {
    icon: Brain,
    title: 'Machine Learning Models',
    body: 'Custom models built for your data — from computer vision to language to time-series prediction.',
  },
  {
    icon: Workflow,
    title: 'Automation Workflows',
    body: 'n8n and custom pipelines connecting your tools, APIs, and AI models.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    body: 'Forecasting and decision-support models — for sports, business, healthcare, anywhere.',
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
              Seven things we do well.
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              From quick AI integrations to full custom builds. We work with teams of any size.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* ── News Intelligence Agent — featured card ── */}
          <FadeInSection className="sm:col-span-2 lg:col-span-2">
            <div className="relative bg-card border border-border-soft rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full">
              <span className="absolute top-4 right-4 bg-accent-coral/10 text-accent-coral rounded-full px-2 py-0.5 text-xs font-medium tracking-wider">
                LIVE
              </span>
              <div
                className="inline-flex p-3 rounded-full mb-4 bg-accent-blue/10"
                aria-hidden="true"
              >
                <Newspaper size={20} className="text-accent-blue" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                News Intelligence Agent
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                A live AI agent that monitors the internet for any topic you choose — delivered to
                social media, WhatsApp, or Telegram.
              </p>
              <p className="text-xs text-text-muted mt-2">
                Auto-posting · Daily digests · Custom topics
              </p>
            </div>
          </FadeInSection>

          {/* ── Remaining 6 services ── */}
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <FadeInSection key={service.title} delay={0.1 * (i + 1)}>
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
                  <p className="text-sm text-text-muted leading-relaxed">{service.body}</p>
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
              Start a Conversation →
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
