'use client'

import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import type { Locale, Translations } from '@/i18n'
import { getTranslations } from '@/i18n'

type LocaleContextValue = { locale: Locale; t: Translations }

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  t: getTranslations('en'),
})

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  return (
    <LocaleContext.Provider value={{ locale, t: getTranslations(locale) }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext)
}
