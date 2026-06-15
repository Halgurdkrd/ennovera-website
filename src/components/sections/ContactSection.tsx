import { Mail, MessageCircle } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons'
import { CONTACT, whatsappUrl } from '@/lib/contact'

const activeClass =
  'flex items-center gap-2 border border-accent-blue/30 text-text-primary rounded-lg px-5 py-3 hover:bg-accent-blue/5 transition-colors font-medium text-sm'

const disabledClass =
  'flex items-center gap-2 border border-border-soft text-text-muted rounded-lg px-5 py-3 font-medium text-sm opacity-50 cursor-not-allowed'

export default function ContactSection() {
  const waUrl = whatsappUrl()

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
          {CONTACT.email ? (
            <a
              href={`mailto:${CONTACT.email}`}
              className={activeClass}
              aria-label="Contact via Email"
            >
              <Mail size={18} className="text-accent-blue" aria-hidden="true" />
              Email
            </a>
          ) : (
            <div className="flex flex-col items-center gap-1">
              <div className={disabledClass} aria-disabled="true">
                <Mail size={18} aria-hidden="true" />
                Email
              </div>
              <span className="text-xs text-text-muted">Coming soon</span>
            </div>
          )}

          {waUrl ? (
            <a
              href={waUrl}
              className={activeClass}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle size={18} className="text-accent-blue" aria-hidden="true" />
              WhatsApp
            </a>
          ) : (
            <div className="flex flex-col items-center gap-1">
              <div className={disabledClass} aria-disabled="true">
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </div>
              <span className="text-xs text-text-muted">Coming soon</span>
            </div>
          )}

          {CONTACT.instagram ? (
            <a
              href={`https://instagram.com/${CONTACT.instagram}`}
              className={activeClass}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via Instagram"
            >
              <InstagramIcon size={18} className="text-accent-blue" aria-hidden={true} />
              Instagram
            </a>
          ) : (
            <div className="flex flex-col items-center gap-1">
              <div className={disabledClass} aria-disabled="true">
                <InstagramIcon size={18} aria-hidden={true} />
                Instagram
              </div>
              <span className="text-xs text-text-muted">Coming soon</span>
            </div>
          )}

          {CONTACT.facebook ? (
            <a
              href={`https://facebook.com/${CONTACT.facebook}`}
              className={activeClass}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via Facebook"
            >
              <FacebookIcon size={18} className="text-accent-blue" aria-hidden={true} />
              Facebook
            </a>
          ) : (
            <div className="flex flex-col items-center gap-1">
              <div className={disabledClass} aria-disabled="true">
                <FacebookIcon size={18} aria-hidden={true} />
                Facebook
              </div>
              <span className="text-xs text-text-muted">Coming soon</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
