// ─── Contact Types ────────────────────────────────────────────────────────────

export interface ContactPerson {
  name: string
  phone: string
  phoneRaw: string   // digits only — used in tel: and wa.me links
  role: string
  initials: string
}

export interface ContactInfo {
  name: string
  phone: string
  email: string
  address: string
  mapEmbedUrl: string
  mapOpenUrl: string
  workingHours: string
}

// ─── Product Types ────────────────────────────────────────────────────────────

export interface ProductItem {
  id: string
  name: string
  shade?: string
  applications: string[]
  packaging?: string
  availability: 'In Stock' | 'On Order'
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  color: string
  textColor: string
  icon: string
  description: string
  products: ProductItem[]
}

// ─── Company Types ────────────────────────────────────────────────────────────

export interface CompanyInfo {
  name: string
  tagline: string
  description: string
  established: number
  experience: string
  totalProducts: string
  contact: ContactInfo
  exportMarkets: string[]
  certifications: string[]
}

// ─── Navigation Types ─────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

// ─── Stat Types ───────────────────────────────────────────────────────────────

export interface StatItem {
  value: string
  suffix?: string
  label: string
  icon?: string
}
