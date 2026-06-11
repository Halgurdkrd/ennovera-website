export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
            // ABOUT ENNOVERA
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
            Engineering AI from Kurdistan.
          </h2>
        </div>

        <div className="max-w-2xl mx-auto border-l-2 border-accent-blue pl-6 space-y-6">
          <p className="text-lg leading-relaxed text-text-muted">
            Ennovera is an AI engineering company based in the Kurdistan Region
            of Iraq. Founded and led by a PhD engineer specializing in
            communication systems and applied machine learning, we build
            practical AI systems for clients across industries.
          </p>
          <p className="text-lg leading-relaxed text-text-muted">
            Our work spans pharmaceutical research, predictive analytics,
            conversational AI, medical imaging, and automation — with native
            Kurdish and Arabic language capability as a regional strength. We
            focus on systems that ship: production-ready code, measurable
            results, and engineering that holds up under real-world conditions.
          </p>
          <p className="text-lg leading-relaxed text-text-muted">
            Whether you&apos;re a local business, an international team, or a
            research partner, we work with you from concept to deployment.
          </p>
        </div>
      </div>
    </section>
  )
}
