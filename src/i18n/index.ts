import { en } from './locales/en'
import { ku } from './locales/ku'
import type { Translations } from './types'

export type { Translations }
export type { StatItem } from './types'

export type Locale = 'en' | 'ku'

export function getTranslations(locale: Locale): Translations {
  return locale === 'ku' ? ku : en
}

export function isRTL(locale: Locale): boolean {
  return locale === 'ku'
}
