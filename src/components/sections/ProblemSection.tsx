import { FadeInSection } from '@/components/ui/FadeInSection'

export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 md:py-20 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <FadeInSection>
          <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
            // THE PROBLEM
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-6">
            AI projects stall between research and production.
          </h2>
          <p className="text-lg leading-relaxed text-text-muted max-w-3xl mx-auto">
            Most organizations experiment with AI. Few build systems that survive
            contact with real users, real data, and real constraints. The gap
            between proof-of-concept and production is where Ennovera lives.
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
