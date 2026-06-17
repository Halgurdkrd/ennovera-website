import { Mail, MessageCircle } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons'
import { CONTACT, whatsappUrl } from '@/lib/contact'
import { FadeInSection } from '@/components/ui/FadeInSection'

const activeClass =
  'flex items-center gap-2 border border-accent-blue/30 text-text-primary rounded-lg px-5 py-3 hover:bg-accent-blue/5 transition-colors font-medium text-sm'

const disabledClass =
  'flex items-center gap-2 border border-border-soft text-text-muted rounded-lg px-5 py-3 font-medium text-sm opacity-50 cursor-not-allowed'

export default function ContactSection() {
  const waUrl = whatsappUrl()
  const bookCallUrl = CONTACT.whatsapp
    ? `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        "Hi Ennovera — I’d like to talk about a project. Could we schedule a quick call?"
      )}`
    : ''

  return (
    <section id="contact" className="py-16 md:py-20 bg-canvas scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-accent-blue font-medium mb-4">
          // GET IN TOUCH
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
          Tell us what you need.
        </h2>
        <p className="text-text-muted max-w-xl mx-auto mb-10 text-base md:text-lg">
          Have a clear problem in mind? Or just an idea you want to explore? Our Founder &amp; Lead
          Engineer will personally review your message, propose a solution, and tell you what it
          would take to build — typically within one business day.
        </p>

        <FadeInSection delay={0.1}>
          <div className="mb-6">
            {bookCallUrl ? (
              <a
                href={bookCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent-blue text-white rounded-xl px-8 py-4 text-base font-medium hover:scale-[1.02] transition-transform shadow-md"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Book a Call on WhatsApp
              </a>
            ) : (
              <span className="inline-flex items-center gap-3 bg-accent-blue text-white rounded-xl px-8 py-4 text-base font-medium opacity-50 cursor-not-allowed">
                <MessageCircle size={20} aria-hidden="true" />
                Book a Call on WhatsApp
              </span>
            )}
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p className="text-sm text-text-muted mb-8">
            Founder &amp; Lead Engineer · Sulaymaniyah, Kurdistan
          </p>

          <p className="text-xs text-text-muted uppercase tracking-widest mb-6">
            Or reach us directly
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
        </FadeInSection>
      </div>
    </section>
  )
}
