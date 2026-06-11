import { Mail, MessageCircle } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons'
import { CONTACT } from '@/lib/contact'

const btnClass =
  'flex items-center gap-2 border border-accent-blue/30 text-text-primary rounded-lg px-5 py-3 hover:bg-accent-blue/5 transition-colors font-medium text-sm'

export default function ContactSection() {
  const whatsappNumber = CONTACT.whatsapp.replace(/\D/g, '')

  return (
    <section id="contact" className="py-24 md:py-32 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
          // GET IN TOUCH
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
          Let&apos;s build something together.
        </h2>
        <p className="text-text-muted max-w-xl mx-auto mb-10 text-base md:text-lg">
          Available for new projects, collaborations, and conversations. We
          typically respond within one business day.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className={btnClass}
            aria-label="Contact via Email"
          >
            <Mail size={18} className="text-accent-blue" aria-hidden="true" />
            Email
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            className={btnClass}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle size={18} className="text-accent-blue" aria-hidden="true" />
            WhatsApp
          </a>

          <a
            href={`https://instagram.com/${CONTACT.instagram}`}
            className={btnClass}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via Instagram"
          >
            <InstagramIcon size={18} className="text-accent-blue" aria-hidden={true} />
            Instagram
          </a>

          <a
            href={`https://facebook.com/${CONTACT.facebook}`}
            className={btnClass}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via Facebook"
          >
            <FacebookIcon size={18} className="text-accent-blue" aria-hidden={true} />
            Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
