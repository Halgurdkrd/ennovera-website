import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ennovera — Practical AI Systems',
  description:
    'Machine learning, AI agents, and automation engineered for production. Based in Kurdistan, serving the world.',
  openGraph: {
    title: 'Ennovera — Practical AI Systems',
    description:
      'Machine learning, AI agents, and automation engineered for production. Based in Kurdistan, serving the world.',
    url: 'https://ennovera.com',
    siteName: 'Ennovera',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ennovera — Practical AI Systems',
    description:
      'Machine learning, AI agents, and automation engineered for production. Based in Kurdistan, serving the world.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-canvas text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
