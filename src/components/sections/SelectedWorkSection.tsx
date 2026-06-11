interface WorkItem {
  title: string
  category: string
  description: string
  tech: string[]
  imageBg: string
}

const works: WorkItem[] = [
  {
    title: 'AI Drug Discovery Pipeline',
    category: 'Pharma · NDA',
    description:
      'AI pipeline for pancreatic cancer drug discovery, combining literature mining, molecular generation, binding affinity prediction, and ADMET filtering.',
    tech: ['Python', 'BigQuery', 'MPNN'],
    imageBg: 'bg-accent-purple/5',
  },
  {
    title: 'Pharmaceutical Formulation AI',
    category: 'Pharma · Research',
    description:
      'Machine learning system analyzing pharmaceutical formulation literature, converting scientific publications into structured training data for predictive models.',
    tech: ['PyTorch', 'Flask', 'RAG'],
    imageBg: 'bg-accent-teal/5',
  },
  {
    title: 'HerboScan AI',
    category: 'Botanical · Showcase',
    description:
      'Plant intelligence platform identifying 2,400+ species with 94% accuracy and 1.2s inference. Built on CNN ensemble + RAG knowledge base.',
    tech: ['CNN', 'RAG', 'FastAPI'],
    imageBg: 'bg-accent-green/5',
  },
  {
    title: 'NeuralDx',
    category: 'Medical · Showcase',
    description:
      'Deep learning diagnostic system analyzing X-ray, MRI, and CT imaging with ensemble architecture and explainable AI outputs.',
    tech: ['PyTorch', 'Multi-model', 'XAI'],
    imageBg: 'bg-accent-blue/5',
  },
  {
    title: 'Retail Conversational AI',
    category: 'Retail · Deployed',
    description:
      'Instagram DM automation handling multilingual (Kurdish/Arabic/English) customer inquiries and orders for a Kurdistan-based electronics retailer.',
    tech: ['Gemini', 'n8n', 'Instagram API'],
    imageBg: 'bg-accent-coral/5',
  },
]

export default function SelectedWorkSection() {
  const [first, ...rest] = works

  return (
    <section id="work" className="py-24 md:py-32 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
            // SELECTED WORK
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
            Production systems and research showcases.
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            A representative selection of recent AI engineering work.
          </p>
        </div>

        {/* First card spans wider on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card border border-border-soft rounded-2xl p-6 hover:translate-y-[-2px] hover:shadow-md transition-all duration-300 lg:col-span-2 flex flex-col">
            {/* Image placeholder */}
            <div
              className={`aspect-[16/9] ${first.imageBg} rounded-lg mb-5 flex items-center justify-center`}
              aria-hidden="true"
            />
            <span className="inline-block border border-border-soft rounded-full px-3 py-1 text-xs text-text-muted mb-3 w-fit">
              {first.category}
            </span>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              {first.title}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed flex-1">
              {first.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {first.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs border border-border-soft text-text-muted px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {rest.map((work) => (
            <div
              key={work.title}
              className="bg-card border border-border-soft rounded-2xl p-6 hover:translate-y-[-2px] hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image placeholder */}
              <div
                className={`aspect-[16/9] ${work.imageBg} rounded-lg mb-5 flex items-center justify-center`}
                aria-hidden="true"
              />
              <span className="inline-block border border-border-soft rounded-full px-3 py-1 text-xs text-text-muted mb-3 w-fit">
                {work.category}
              </span>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {work.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed flex-1">
                {work.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {work.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs border border-border-soft text-text-muted px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
