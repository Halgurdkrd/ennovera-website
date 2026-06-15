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

export default function Home() {
  return (
    <>
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
    </>
  )
}
