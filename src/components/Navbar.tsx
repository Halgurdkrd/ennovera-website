'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, Globe } from 'lucide-react'
import { useLocale } from '@/components/LocaleProvider'

const linkAnchors = [
  { anchor: '#domains', key: 'domains' as const },
  { anchor: '#work', key: 'work' as const },
  { anchor: '#services', key: 'services' as const },
  { anchor: '#about', key: 'about' as const },
  { anchor: '#contact', key: 'contact' as const },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { locale, t } = useLocale()

  const isHome = pathname === '/' || pathname === '/ku'
  const homeUrl = locale === 'ku' ? '/ku' : '/'
  const linkPrefix = isHome ? '' : homeUrl

  const getOtherLocaleHref = () => {
    if (locale === 'ku') return pathname.replace(/^\/ku/, '') || '/'
    return '/ku' + (pathname === '/' ? '' : pathname)
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 h-16 flex items-center bg-canvas/80 backdrop-blur-md border-b border-border-soft transition-shadow duration-300 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
          <a href={homeUrl} className="text-xl font-semibold text-text-primary">
            Ennovera
          </a>

          <div className="hidden md:flex items-center gap-6">
            {linkAnchors.map((link) => (
              <a
                key={link.anchor}
                href={`${linkPrefix}${link.anchor}`}
                className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                {t.nav[link.key]}
              </a>
            ))}
            <Link
              href={getOtherLocaleHref()}
              className="flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-accent-blue transition-colors px-3 py-1 rounded-md"
              style={{ direction: 'ltr' }}
              aria-label="Switch language"
            >
              <Globe size={16} aria-hidden="true" />
              <span>{locale === 'en' ? t.language.kurdish : t.language.english}</span>
            </Link>
          </div>

          <button
            className="md:hidden text-text-muted hover:text-text-primary p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-canvas flex flex-col items-center justify-center md:hidden">
          <button
            className="absolute top-4 right-6 text-text-muted hover:text-text-primary p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={22} aria-hidden="true" />
          </button>
          <nav className="flex flex-col items-center gap-8">
            <Link
              href={getOtherLocaleHref()}
              className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-accent-blue transition-colors px-4 py-2 rounded-full border border-border-soft"
              style={{ direction: 'ltr' }}
              onClick={() => setIsOpen(false)}
            >
              <Globe size={16} aria-hidden="true" />
              <span>{locale === 'en' ? t.language.kurdish : t.language.english}</span>
            </Link>
            {linkAnchors.map((link) => (
              <a
                key={link.anchor}
                href={`${linkPrefix}${link.anchor}`}
                className="text-3xl font-semibold text-text-primary hover:text-accent-blue transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t.nav[link.key]}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
