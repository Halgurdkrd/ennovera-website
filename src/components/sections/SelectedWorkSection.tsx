'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'
import { useLocale } from '@/components/LocaleProvider'

type WorkStatus = 'live' | 'detail' | 'coming-soon'

interface WorkMeta {
  slug: string
  tech: string[]
  image: string
  alt: string
  status: WorkStatus
  externalUrl?: string
}

const worksMeta: WorkMeta[] = [
  {
    slug: 'fifa',
    tech: ['XGBoost', 'PyTorch', 'FastAPI', 'Next.js'],
    image: '/images/fifa-pitch.jpg',
    alt: 'FIFA World Cup 2026 AI Predictor — abstract football pitch with predicted player positions and tactical network, illustrated in soft watercolor',
    status: 'live',
    externalUrl: 'https://aifootballp.com',
  },
  {
    slug: 'drug-discovery',
    tech: ['Python', 'BigQuery', 'MPNN'],
    image: '/images/work-drug-discovery.jpg',
    alt: 'Abstract molecular structures and DNA helix in soft watercolor — AI drug discovery pipeline visualization',
    status: 'coming-soon',
  },
  {
    slug: 'pharma-formulation',
    tech: ['PyTorch', 'Flask', 'RAG'],
    image: '/images/work-pharma-formulation.jpg',
    alt: 'Soft watercolor illustration of scientific glassware and chemical analysis — pharmaceutical formulation AI',
    status: 'coming-soon',
  },
  {
    slug: 'herboscan',
    tech: ['CNN', 'RAG', 'FastAPI'],
    image: '/images/work-herboscan.jpg',
    alt: 'Botanical specimens with magnifying lens in soft watercolor — HerboScan plant identification AI',
    status: 'detail',
  },
  {
    slug: 'neuraldx',
    tech: ['PyTorch', 'Multi-model', 'XAI'],
    image: '/images/work-neuraldx.jpg',
    alt: 'Abstract cross-sectional medical scans with diagnostic regions — NeuralDx medical imaging AI',
    status: 'detail',
  },
  {
    slug: 'retail-chatbot',
    tech: ['Gemini', 'n8n', 'Instagram API'],
    image: '/images/work-chatbot.jpg',
    alt: 'Soft watercolor speech bubbles around a smartphone — retail conversational AI',
    status: 'coming-soon',
  },
]

const tagStyle: CSSProperties = {
  fontSize: '12px',
  padding: '5px 12px',
  backgroundColor: '#F1F5F9',
  border: '1px solid #94A3B8',
  borderRadius: '999px',
  color: '#475569',
  display: 'inline-block',
  fontWeight: 500,
  lineHeight: 1.2,
}

const tagContainerStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: '12px',
}

function TechTags({ tech }: { tech: string[] }) {
  return (
    <div style={tagContainerStyle}>
      {tech.map((t) => (
        <span key={t} style={tagStyle}>
          {t}
        </span>
      ))}
    </div>
  )
}

export default function SelectedWorkSection() {
  const { t, locale } = useLocale()
  const detailBase = locale === 'ku' ? '/ku/work' : '/work'

  const workTexts = [
    {
      title: t.work.fifa.title,
      category: t.work.fifa.category,
      description: t.work.fifa.body,
      liveStat: t.work.fifa.live,
      linkLabel: t.work.fifa.cta,
    },
    { title: t.work.drug.title, category: t.work.drug.category, description: t.work.drug.body },
    {
      title: t.work.pharma.title,
      category: t.work.pharma.category,
      description: t.work.pharma.body,
    },
    {
      title: t.work.herboscan.title,
      category: t.work.herboscan.category,
      description: t.work.herboscan.body,
    },
    {
      title: t.work.neuraldx.title,
      category: t.work.neuraldx.category,
      description: t.work.neuraldx.body,
    },
    {
      title: t.work.retail.title,
      category: t.work.retail.category,
      description: t.work.retail.body,
    },
  ]

  const works = worksMeta.map((meta, i) => ({ ...meta, ...workTexts[i] }))
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
            {t.work.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3">
            {t.work.title}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">{t.work.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ── FIFA featured card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:col-span-2 lg:col-span-2 bg-card border border-border-soft rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => window.open(featured.externalUrl, '_blank', 'noopener,noreferrer')}
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

                <h3 className="text-xl font-semibold text-text-primary mb-2">{featured.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  {featured.description}
                </p>

                <TechTags tech={featured.tech} />

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
                <p className="text-sm text-text-muted leading-relaxed flex-1">{work.description}</p>
                <TechTags tech={work.tech} />
                {work.status === 'detail' && (
                  <p className="text-xs text-accent-blue mt-3 font-medium">{t.work.viewCaseStudy}</p>
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
                  <Link
                    href={`${detailBase}/${work.slug}`}
                    className={`block ${baseClass} cursor-pointer`}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className={`relative ${baseClass}`}>
                    <span className="absolute top-3 right-3 bg-canvas border border-border-soft text-text-muted text-[10px] uppercase tracking-widest rounded-full px-2 py-0.5">
                      {t.work.comingSoon}
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
