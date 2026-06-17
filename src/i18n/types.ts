export type StatItem = {
  display: string
  numericTarget: number | null
  suffix: string
  label: string
}

export type Translations = {
  nav: {
    domains: string
    work: string
    services: string
    about: string
    contact: string
  }
  footer: {
    copyright: string
    location: string
  }
  hero: {
    label: string
    title: string
    subtitle: string
    cta: string
  }
  problem: {
    label: string
    title: string
    body: string
  }
  pillars: {
    label: string
    title: string
    subtitle: string
    items: Array<{ title: string; stat: string; body: string }>
  }
  stats: {
    items: StatItem[]
  }
  domains: {
    label: string
    title: string
    subtitle: string
    items: Array<{ title: string; body: string }>
  }
  work: {
    label: string
    title: string
    subtitle: string
    viewCaseStudy: string
    comingSoon: string
    fifa: { title: string; category: string; live: string; body: string; cta: string }
    drug: { title: string; category: string; body: string }
    pharma: { title: string; category: string; body: string }
    herboscan: { title: string; category: string; body: string }
    neuraldx: { title: string; category: string; body: string }
    retail: { title: string; category: string; body: string }
  }
  services: {
    label: string
    title: string
    subtitle: string
    cta: string
    items: Array<{ title: string; body: string; badge?: string; tagline?: string }>
  }
  about: {
    label: string
    title: string
    p1: string
    p2: string
    p3: string
  }
  contact: {
    label: string
    title: string
    subtitle: string
    bookCall: string
    role: string
    orReachDirectly: string
    email: string
    whatsapp: string
    instagram: string
    facebook: string
    comingSoon: string
    whatsappMessage: string
  }
  detail: {
    label: string
    backToWork: string
    overview: string
    results: string
    howItWorks: string
    builtWith: string
    whoThisHelps: string
    discussProject: string
  }
  herboscan: {
    title: string
    subtitle: string
    category: string
    overview: { p1: string; p2: string; p3: string }
    stats: Array<{ value: string; label: string }>
    steps: Array<{ title: string; body: string }>
    useCases: Array<{ title: string; body: string }>
    cta: string
  }
  neuraldx: {
    title: string
    subtitle: string
    category: string
    overview: { p1: string; p2: string; p3: string }
    stats: Array<{ value: string; label: string }>
    steps: Array<{ title: string; body: string }>
    useCases: Array<{ title: string; body: string }>
    cta: string
  }
  language: {
    english: string
    kurdish: string
  }
}
