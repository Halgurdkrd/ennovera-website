'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface WorkItem {
  slug: string
  title: string
  category: string
  description: string
  tech: string[]
  image: string
  alt: string
  status: 'live' | 'detail' | 'coming-soon'
  externalUrl?: string
  liveStat?: string
  linkLabel?: string
}

const works: WorkItem[] = [
  {
    slug: 'fifa',
    title: 'FIFA World Cup 2026 AI Predictor',
    category: 'Sports · Live',
    description:
      'An AI prediction system for the 2026 FIFA World Cup. Combines match outcome prediction, scoreline modeling, momentum analysis, and tournament simulation across the full 48-team bracket.',
    tech: ['XGBoost', 'PyTorch', 'FastAPI', 'Next.js'],
    image: '/images/fifa-pitch.jpg',
    alt: 'FIFA World Cup 2026 AI Predictor — abstract football pitch with predicted player positions and tactical network, illustrated in soft watercolor',
    status: 'live',
    externalUrl: 'https://aifootballp.com',
    liveStat: 'Live · 48 teams · 64 matches',
    linkLabel: 'Visit Live App →',
  },
  {
    slug: 'drug-discovery',
    title: 'AI Drug Discovery Pipeline',
    category: 'Pharma · NDA',
    description:
      'AI pipeline for pancreatic cancer drug discovery, combining literature mining, molecular generation, binding affinity prediction, and ADMET filtering.',
    tech: ['Python', 'BigQuery', 'MPNN'],
    image: '/images/work-drug-discovery.jpg',
    alt: 'Abstract molecular structures and DNA helix in soft watercolor — AI drug discovery pipeline visualization',
    status: 'coming-soon',
  },
  {
    slug: 'pharma-formulation',
    title: 'Pharmaceutical Formulation AI',
    category: 'Pharma · Research',
    description:
      'Machine learning system analyzing pharmaceutical formulation literature, converting scientific publications into structured training data for predictive models.',
    tech: ['PyTorch', 'Flask', 'RAG'],
    image: '/images/work-pharma-formulation.jpg',
    alt: 'Soft watercolor illustration of scientific glassware and chemical analysis — pharmaceutical formulation AI',
    status: 'coming-soon',
  },
  {
    slug: 'herboscan',
    title: 'HerboScan AI',
    category: 'Botanical · Showcase',
    description:
      'Plant intelligence platform identifying 2,400+ species with 94% accuracy and 1.2s inference. Built on CNN ensemble + RAG knowledge base.',
    tech: ['CNN', 'RAG', 'FastAPI'],
    image: '/images/work-herboscan.jpg',
    alt: 'Botanical specimens with magnifying lens in soft watercolor — HerboScan plant identification AI',
    status: 'detail',
  },
  {
    slug: 'neuraldx',
    title: 'NeuralDx',
    category: 'Medical · Showcase',
    description:
      'Deep learning diagnostic system analyzing X-ray, MRI, and CT imaging with ensemble architecture and explainable AI outputs.',
    tech: ['PyTorch', 'Multi-model', 'XAI'],
    image: '/images/work-neuraldx.jpg',
    alt: 'Abstract cross-sectional medical scans with diagnostic regions — NeuralDx medical imaging AI',
    status: 'detail',
  },
  {
    slug: 'retail-chatbot',
    title: 'Retail Conversational AI',
    category: 'Retail · Deployed',
    description:
      'Instagram DM automation handling multilingual (Kurdish/Arabic/English) customer inquiries and orders for a Kurdistan-based electronics retailer.',
    tech: ['Gemini', 'n8n', 'Instagram API'],
    image: '/images/work-chatbot.jpg',
    alt: 'Soft watercolor speech bubbles around a smartphone — retail conversational AI',
    status: 'coming-soon',
  },
]

const tagClass =
  'text-xs px-2 py-1 rounded-md border border-[#C8D4E0] text-[#5A6577] bg-[#EEF2F7]'

export default function SelectedWorkSection() {
  const [featured, ...rest] = works

  return (
    <section id="work" className="py-16 md:py-20 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
            // SELECTED WORK
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3">
            Production systems and research showcases.
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Recent projects across pharma, sports, healthcare, retail, and botany.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ── FIFA featured card — full card is clickable via onClick ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:col-span-2 lg:col-span-2 bg-card border border-border-soft rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() =>
              window.open(featured.externalUrl, '_blank', 'noopener,noreferrer')
            }
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left: image */}
              <div className="relative h-[260px] lg:h-auto lg:flex-1 overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Right: content */}
              <div className="lg:w-[45%] p-6 md:p-8 flex flex-col">
                {/* Live stat pill */}
                <div className="flex items-center gap-2 bg-accent-coral/10 text-accent-coral rounded-full px-3 py-1 w-fit mb-4 text-xs font-medium">
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-2 h-2 rounded-full bg-accent-coral flex-shrink-0"
                  />
                  {featured.liveStat}
                </div>

                <span className="inline-block border border-border-soft rounded-full px-3 py-1 text-xs text-text-muted mb-3 w-fit">
                  {featured.category}
                </span>

                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {featured.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  {featured.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {featured.tech.map((t) => (
                    <span key={t} className={tagClass}>
                      {t}
                    </span>
                  ))}
                </div>

                {featured.externalUrl && (
                  <div className="mt-6">
                    <motion.a
                      href={featured.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-accent-blue text-white rounded-xl px-8 py-4 font-medium text-base"
                      animate={{
                        boxShadow: [
                          '0 4px 15px rgba(59,91,219,0.15)',
                          '0 4px 20px rgba(59,91,219,0.30)',
                          '0 4px 15px rgba(59,91,219,0.15)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      whileHover={{ scale: 1.05 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {featured.linkLabel}
                    </motion.a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── Regular work cards ── */}
          {rest.map((work, i) => {
            const inner = (
              <>
                <Image
                  src={work.image}
                  alt={work.alt}
                  width={1456}
                  height={816}
                  className="w-full h-auto rounded-lg object-cover aspect-[16/9] mb-5"
                />
                <span className="inline-block border border-border-soft rounded-full px-3 py-1 text-xs text-text-muted mb-3 w-fit">
                  {work.category}
                </span>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{work.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {work.tech.map((t) => (
                    <span key={t} className={tagClass}>
                      {t}
                    </span>
                  ))}
                </div>
                {work.status === 'detail' && (
                  <p className="text-xs text-accent-blue mt-3 font-medium">→ View case study</p>
                )}
              </>
            )

            const baseClass =
              'bg-card border border-border-soft rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col h-full'

            return (
              <motion.div
                key={work.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 * (i + 1), ease: 'easeOut' }}
              >
                {work.status === 'detail' ? (
                  <Link href={`/work/${work.slug}`} className={`block ${baseClass} cursor-pointer`}>
                    {inner}
                  </Link>
                ) : (
                  <div className={`relative ${baseClass}`}>
                    <span className="absolute top-3 right-3 bg-canvas border border-border-soft text-text-muted text-[10px] uppercase tracking-widest rounded-full px-2 py-0.5">
                      Detail page coming soon
                    </span>
                    {inner}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
