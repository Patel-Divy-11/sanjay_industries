import type { Metadata } from 'next'
import { Layers, FileText, Package, Factory, CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { applications } from '@/data/company'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Applications',
  description:
    'Sanjay Industries dyes are used across textile, paper, leather, and industrial applications. Explore industry-specific solutions.',
}

const iconMap: Record<string, React.ElementType> = {
  Layers,
  FileText,
  Package,
  Factory,
}

const industryDetails = [
  {
    id: 'textile',
    title: 'Textile Industry',
    icon: 'Layers',
    overview:
      'The textile industry is our primary market. We supply direct and acid dyes to cotton mills, viscose processors, and blended fabric manufacturers across India and Bangladesh.',
    useCases: [
      'Cotton fabric dyeing — exhaust and continuous processes',
      'Viscose and rayon yarn and fabric coloring',
      'Blended fabric (cotton-polyester) shade development',
      'Home textile: bedsheets, towels, drapery',
      'Garment dyeing and overdyeing',
      'Knit fabric coloring for t-shirts and hosiery',
    ],
    dyeTypes: ['Direct Yellow', 'Direct Orange', 'Direct Black', 'Direct Green', 'Direct Brown'],
  },
  {
    id: 'paper',
    title: 'Paper Industry',
    icon: 'FileText',
    overview:
      'Our direct dyes offer excellent compatibility with paper and pulp, providing vibrant, uniform coloration for a wide range of paper products.',
    useCases: [
      'Colored tissue paper and napkin production',
      'Cardboard and packaging material dyeing',
      'Specialty paper for stationery and gifting',
      'Pulp mass coloring for uniform distribution',
      'Notebook and writing paper tinting',
    ],
    dyeTypes: ['Direct Yellow 12', 'Direct Orange 26', 'Direct Green 6', 'Direct Black 19'],
  },
  {
    id: 'leather',
    title: 'Leather Industry',
    icon: 'Package',
    overview:
      'Select formulations from our portfolio are compatible with leather substrates, offering deep penetration, brightness, and durability for goods manufacturers.',
    useCases: [
      'Footwear upper leather dyeing',
      'Bag and accessory leather coloring',
      'Garment leather finishing',
      'Upholstery and furniture leather',
    ],
    dyeTypes: ['Direct Brown 101', 'Direct Black 38', 'Direct Yellow 99', 'Acid Dyes'],
  },
  {
    id: 'industrial',
    title: 'Industrial Applications',
    icon: 'Factory',
    overview:
      'Beyond traditional textile use, our chemical formulations serve niche industrial segments that require reliable, consistent colorants.',
    useCases: [
      'Wooden product staining and coloring',
      'Jute and natural fiber dyeing',
      'Ink and printing industry colorants',
      'Specialty industrial colorants on request',
    ],
    dyeTypes: ['Acid Dyes', 'Direct Yellow Series', 'Direct Black Series'],
  },
]

export default function ApplicationsPage() {
  return (
    <div className="pt-[90px]">
      {/* Page Header */}
      <div className="bg-navy section-padding-sm">
        <div className="container-main text-center">
          <span className="text-gold-400 text-sm font-poppins font-semibold tracking-widest uppercase">
            Industries We Serve
          </span>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-white mt-3 mb-4">
            Applications & Industries
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our dye portfolio is engineered for real-world performance across multiple industries.
          </p>
        </div>
      </div>

      {/* Quick Overview Cards */}
      <section className="section-padding-sm bg-background border-b border-border">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {applications.map((app) => {
              const Icon = iconMap[app.icon]
              return (
                <a
                  key={app.id}
                  href={`#${app.id}`}
                  className="flex flex-col items-center text-center gap-3 bg-white rounded-2xl p-5 border border-border hover:border-navy hover:shadow-card transition-all duration-200"
                >
                  <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center">
                    {Icon && <Icon size={20} className="text-gold-400" />}
                  </div>
                  <span className="font-poppins font-semibold text-sm text-navy">{app.title}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      <div className="section-padding bg-white">
        <div className="container-main space-y-14">
          {industryDetails.map((industry, i) => {
            const Icon = iconMap[industry.icon]
            return (
              <section
                key={industry.id}
                id={industry.id}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
              >
                {/* Left */}
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center">
                      {Icon && <Icon size={22} className="text-gold-400" />}
                    </div>
                    <h2 className="font-poppins font-bold text-2xl text-navy">{industry.title}</h2>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-6">{industry.overview}</p>

                  <div className="mb-6">
                    <p className="text-sm font-poppins font-semibold text-navy uppercase tracking-wider mb-3">
                      Recommended Dyes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {industry.dyeTypes.map((dye) => (
                        <span
                          key={dye}
                          className="text-xs font-poppins font-medium bg-navy-50 text-navy px-3 py-1.5 rounded-lg border border-navy/10"
                        >
                          {dye}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-navy hover:bg-navy-700 text-white font-poppins font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200"
                  >
                    Inquire for {industry.title}
                    <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Right — Use Cases */}
                <div className={`bg-background rounded-2xl border border-border p-7 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <p className="text-sm font-poppins font-semibold text-text-secondary uppercase tracking-wider mb-4">
                    Use Cases
                  </p>
                  <ul className="space-y-3">
                    {industry.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-gold-500 mt-0.5 shrink-0" />
                        <span className="text-sm font-inter text-text-primary">{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
