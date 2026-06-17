import type { Metadata } from 'next'
import { LocaleProvider } from '@/components/LocaleProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import PillarsSection from '@/components/sections/PillarsSection'
import StatsStripSection from '@/components/sections/StatsStripSection'
import DomainsSection from '@/components/sections/DomainsSection'
import SelectedWorkSection from '@/components/sections/SelectedWorkSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Ennovera — سیستمی پراکتیکی AI',
  description:
    'Machine learning، بریکارەکانی AI، و ئۆتۆماتیکردن ئەندازیاریکراوە بۆ قۆناغی بەرهەمهێنان. بنکەکەمان لە کوردستانە، خزمەتمان بۆ جیهانە.',
  alternates: {
    canonical: 'https://ennovera.com/ku',
    languages: {
      en: 'https://ennovera.com',
      ckb: 'https://ennovera.com/ku',
    } as Record<string, string>,
  },
}

export default function KurdishHome() {
  return (
    <LocaleProvider locale="ku">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <PillarsSection />
        <StatsStripSection />
        <DomainsSection />
        <SelectedWorkSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </LocaleProvider>
  )
}
