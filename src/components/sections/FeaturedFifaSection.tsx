import Image from 'next/image'
import { CONTACT } from '@/lib/contact'

const techTags = ['XGBoost', 'PyTorch', 'FastAPI', 'Next.js']

export default function FeaturedFifaSection() {
  return (
    <section id="fifa" className="py-24 md:py-32 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
            // FEATURED PROJECT
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
            FIFA World Cup 2026 AI Predictor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div className="space-y-6">
            <span className="inline-flex items-center bg-accent-teal/10 text-accent-teal rounded-full px-3 py-1 text-sm font-medium">
              Live for World Cup 2026
            </span>

            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              An AI prediction system for the 2026 FIFA World Cup, combining
              gradient-boosted match outcome models, Poisson scoreline
              distributions, LSTM momentum networks, and Monte Carlo bracket
              simulation across the full 48-team tournament structure.
            </p>

            <div className="flex flex-wrap gap-2">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-border-soft text-text-muted px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://aifootballp.com"
                className="bg-accent-blue text-white rounded-lg px-6 py-3 hover:opacity-90 transition-opacity font-medium text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Live App →
              </a>
              <a
                href={`https://instagram.com/${CONTACT.instagram}`}
                className="border border-accent-blue text-accent-blue rounded-lg px-6 py-3 hover:bg-accent-blue/5 transition-colors font-medium text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Visual column */}
          <Image
            src="/images/fifa-pitch.jpg"
            alt="FIFA World Cup 2026 AI Predictor — abstract football pitch with predicted player positions and tactical network, illustrated in soft watercolor"
            width={760}
            height={950}
            className="rounded-2xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
