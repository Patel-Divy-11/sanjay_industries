import type { CompanyInfo, NavItem, StatItem, ContactPerson } from '@/types'

// ─── Core Company Info ────────────────────────────────────────────────────────

export const company: CompanyInfo = {
  name: 'Sanjay Industries',
  tagline: 'Trusted Manufacturer of Direct Dyes & Chemical Solutions',
  description:
    'Since 1990, Sanjay Industries has been manufacturing high-quality direct dyes and chemical products from Ahmedabad, India. With over three decades of industry experience, we supply reliable dye solutions to domestic and international markets while maintaining strict quality standards and long-term customer relationships.',
  established: 1990,
  experience: '35+',
  totalProducts: '20+',
  contact: {
    name: 'Mr. Arvind Patel',
    phone: '+91 9725499590',
    email: 'arvind_patels@yahoo.com',
    address: 'Plot No. C-1/B-5, Near Bank Of Baroda, Phase-2, GIDC Naroda, Ahmedabad, Gujarat 382330',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=GIDC+Naroda+SANJAY+INDUSTRIES+Phase+2+Ahmedabad+Gujarat+382330+India&t=&z=15&ie=UTF8&iwloc=&output=embed',
    mapOpenUrl:
      'https://maps.google.com/?q=SANJAY+INDUSTRIES+GIDC+Naroda+Phase+2+Ahmedabad+Gujarat+382330+India',
    workingHours: 'Mon – Sat: 9:00 AM – 6:00 PM',
  },
  exportMarkets: ['India', 'Bangladesh', 'Nepal', 'International Markets'],
  certifications: ['ISO 9001:2015', 'Quality Certified', 'Export License'],
}

// ─── All Contact Persons — single source of truth ────────────────────────────

export const contactPersons: ContactPerson[] = [
  {
    name: 'Mr. Arvind Patel',
    phone: '+91 9725499590',
    phoneRaw: '919725499590',
    role: 'Director',
    initials: 'AP',
  },
  {
    name: 'Mr. Rajesh Patel',
    phone: '+91 98249 20549',
    phoneRaw: '919824920549',
    role: 'Sales Manager',
    initials: 'RP',
  },
]

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Direct Dyes', href: '/products#direct-dyes' },
      { label: 'Acid Dyes', href: '/products#acid-dyes' },
      { label: 'Yellow Series', href: '/products#yellow-series' },
      { label: 'Orange Series', href: '/products#orange-series' },
      { label: 'Green Series', href: '/products#green-series' },
      { label: 'Black Series', href: '/products#black-series' },
    ],
  },
  { label: 'Applications', href: '/applications' },
  { label: 'Infrastructure', href: '/infrastructure' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Contact', href: '/contact' },
]

// ─── Homepage Stats (Trust Bar) ───────────────────────────────────────────────

export const stats: StatItem[] = [
  { value: '35', suffix: '+', label: 'Years of Experience' },
  { value: '20', suffix: '+', label: 'Products' },
  { value: '4', suffix: '+', label: 'Export Countries' },
  { value: 'ISO', label: 'Quality Certified' },
  { value: '24', suffix: 'Hr', label: 'Inquiry Response' },
]

// ─── Why Choose Us ────────────────────────────────────────────────────────────

export const whyChooseUs = [
  {
    id: 'experience',
    icon: 'Award',
    title: '35+ Years of Expertise',
    description:
      'Established in 1990, our three decades of manufacturing experience ensures consistent quality and deep product knowledge that newer suppliers cannot match.',
  },
  {
    id: 'quality',
    icon: 'ShieldCheck',
    title: 'Strict Quality Control',
    description:
      'Every batch undergoes rigorous quality testing before dispatch. Our ISO-certified processes guarantee the dye performance your production line demands.',
  },
  {
    id: 'export',
    icon: 'Globe',
    title: 'Export-Ready Manufacturer',
    description:
      'We supply to India, Bangladesh, Nepal, and international markets. Our export-compliant documentation and packaging make global sourcing seamless.',
  },
  {
    id: 'support',
    icon: 'Headphones',
    title: 'Reliable Customer Support',
    description:
      'From inquiry to dispatch, Mr. Arvind Patel and Mr. Rajesh Patel and our team provide responsive support, technical guidance, and after-sale assistance.',
  },
]

// ─── Applications ─────────────────────────────────────────────────────────────

export const applications = [
  {
    id: 'textile',
    icon: 'Layers',
    title: 'Textile Industry',
    description: 'Cotton, viscose, silk, and blended fabric dyeing for garment and home textile manufacturers.',
  },
  {
    id: 'paper',
    icon: 'FileText',
    title: 'Paper Industry',
    description: 'Specialty dyes for paper and pulp coloring with excellent shade consistency and wet fastness.',
  },
  {
    id: 'leather',
    icon: 'Package',
    title: 'Leather Industry',
    description: 'Compatible formulations for leather goods, accessories, and footwear coloring processes.',
  },
  {
    id: 'industrial',
    icon: 'Factory',
    title: 'Industrial Applications',
    description: 'Specialty chemical dye solutions adapted for niche industrial and manufacturing use cases.',
  },
]

// ─── Infrastructure Gallery ───────────────────────────────────────────────────

export const infrastructureGallery = [
  {
    id: 'factory-floor',
    title: 'Modern Manufacturing Facility',
    description: 'State-of-the-art production floor with controlled environments for consistent dye manufacturing.',
    src: '/factory/qc-lab.png',
  },
  {
    id: 'machinery',
    title: 'Industrial Processing Equipment',
    description: 'Advanced machinery enabling precise formulation, mixing, and batch production at scale.',
    src: '/factory/factory-floor.png',
  },
  {
    id: 'production',
    title: 'Efficient Production Operations',
    description: 'Streamlined production workflows with strict batch controls and quality checkpoints.',
    src: '/factory/production.png',
  },
  {
    id: 'qc-lab',
    title: 'Quality Control Laboratory',
    description: 'In-house testing lab for shade matching, fastness properties, and chemical analysis.',
    src: '/factory/machinery.png',
  },
]

// ─── Quality Points ───────────────────────────────────────────────────────────

export const qualityPoints = [
  {
    icon: 'FlaskConical',
    title: 'In-House Testing',
    description: 'Every batch is tested for shade accuracy, solubility, and fastness before dispatch.',
  },
  {
    icon: 'ClipboardCheck',
    title: 'ISO-Certified Process',
    description: 'Our manufacturing workflows are ISO 9001:2015 certified for consistent, traceable quality.',
  },
  {
    icon: 'Repeat',
    title: 'Batch Consistency',
    description: 'Precise formulations ensure shade consistency across orders, season after season.',
  },
  {
    icon: 'PackageCheck',
    title: 'Safe Packaging',
    description: 'Dyes are packaged in moisture-resistant, clearly labeled containers for safe transit.',
  },
]
