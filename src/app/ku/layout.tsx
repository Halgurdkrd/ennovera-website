import { Vazirmatn } from 'next/font/google'
import type { ReactNode } from 'react'

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazirmatn',
  display: 'swap',
})

export default function KurdishLayout({ children }: { children: ReactNode }) {
  return (
    <div
      dir="rtl"
      lang="ckb"
      className={vazirmatn.variable}
      style={{ fontFamily: 'var(--font-vazirmatn)' }}
    >
      {children}
    </div>
  )
}
