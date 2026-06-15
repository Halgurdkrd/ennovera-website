import { Mail, MessageCircle } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons'
import { CONTACT, whatsappUrl } from '@/lib/contact'

export default function Footer() {
  const waUrl = whatsappUrl()

  return (
    <footer className="border-t border-border-soft py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <p className="text-sm text-text-muted">
            © 2026 Ennovera. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-5">
            {CONTACT.email ? (
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-accent-blue hover:opacity-70 transition-opacity"
                aria-label="Email Ennovera"
              >
                <Mail size={20} aria-hidden="true" />
              </a>
            ) : (
              <span className="text-accent-blue opacity-40 cursor-default" aria-label="Email (coming soon)">
                <Mail size={20} aria-hidden="true" />
              </span>
            )}

            {waUrl ? (
              <a
                href={waUrl}
                className="text-accent-blue hover:opacity-70 transition-opacity"
                aria-label="Contact on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} aria-hidden="true" />
              </a>
            ) : (
              <span className="text-accent-blue opacity-40 cursor-default" aria-label="WhatsApp (coming soon)">
                <MessageCircle size={20} aria-hidden="true" />
              </span>
            )}

            {CONTACT.instagram ? (
              <a
                href={`https://instagram.com/${CONTACT.instagram}`}
                className="text-accent-blue hover:opacity-70 transition-opacity"
                aria-label="Ennovera on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon size={20} aria-hidden={true} />
              </a>
            ) : (
              <span className="text-accent-blue opacity-40 cursor-default" aria-label="Instagram (coming soon)">
                <InstagramIcon size={20} aria-hidden={true} />
              </span>
            )}

            {CONTACT.facebook ? (
              <a
                href={`https://facebook.com/${CONTACT.facebook}`}
                className="text-accent-blue hover:opacity-70 transition-opacity"
                aria-label="Ennovera on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon size={20} aria-hidden={true} />
              </a>
            ) : (
              <span className="text-accent-blue opacity-40 cursor-default" aria-label="Facebook (coming soon)">
                <FacebookIcon size={20} aria-hidden={true} />
              </span>
            )}
          </div>

          <p className="text-sm text-text-muted md:text-right">
            Kurdistan Region, Iraq
          </p>
        </div>
      </div>
    </footer>
  )
}
