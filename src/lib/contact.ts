export const CONTACT = {
  email: '',
  whatsapp: '+9647742740404',
  instagram: '',
  facebook: '',
  phone: '+9647742740404',
}

export function whatsappUrl(): string {
  if (!CONTACT.whatsapp) return ''
  return `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, '')}`
}
