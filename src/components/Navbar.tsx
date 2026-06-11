'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#problem', label: 'Problem' },
  { href: '#pillars', label: 'Why Us' },
  { href: '#fifa', label: 'FIFA' },
  { href: '#domains', label: 'Domains' },
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 h-16 flex items-center bg-canvas/80 backdrop-blur-md border-b border-border-soft transition-shadow duration-300 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
          <a href="#" className="text-xl font-semibold text-text-primary">
            Ennovera
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
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
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-3xl font-semibold text-text-primary hover:text-accent-blue transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
