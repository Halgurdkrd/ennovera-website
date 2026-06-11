export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-canvas">
      {/* Subtle radial gradient top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(124,158,232,0.08) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 py-32 text-center relative z-10">
        <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-5">
          // AI ENGINEERING STUDIO
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-text-primary mb-6 leading-tight">
          Practical AI systems for
          <br className="hidden md:block" />
          real-world problems.
        </h1>

        <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          We build production-grade machine learning, AI agents, and
          automation — from research to deployment.
        </p>

        <a
          href="#fifa"
          className="inline-block bg-accent-blue text-white rounded-lg px-6 py-3 hover:opacity-90 transition-opacity font-medium"
        >
          Explore Our Work →
        </a>

        {/* AI-generated hero visual will go here */}
        <div
          className="mt-16 aspect-[16/9] max-w-2xl mx-auto bg-accent-blue/5 border border-border-soft rounded-2xl flex items-center justify-center"
          aria-label="Hero visual — placeholder for AI-generated image"
        >
          <p className="text-text-muted text-sm select-none">
            Hero visual coming soon
          </p>
        </div>
      </div>
    </section>
  )
}
