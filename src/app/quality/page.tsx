import type { Metadata } from 'next'
import { FlaskConical, ClipboardCheck, Repeat, PackageCheck, ShieldCheck } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { qualityPoints } from '@/data/company'

export const metadata: Metadata = {
  title: 'Quality Assurance',
  description:
    'ISO 9001:2015 certified quality processes at Sanjay Industries — every batch tested, every shipment guaranteed.',
}

const iconMap: Record<string, React.ElementType> = {
  FlaskConical,
  ClipboardCheck,
  Repeat,
  PackageCheck,
}

const process = [
  {
    step: '01',
    title: 'Raw Material Inspection',
    description:
      'Every incoming raw material is inspected and tested for purity and conformance before entering production.',
  },
  {
    step: '02',
    title: 'Formulation & Mixing',
    description:
      'Dye formulations are prepared in controlled conditions using calibrated equipment to ensure precise compositions.',
  },
  {
    step: '03',
    title: 'Shade Matching',
    description:
      'Batch shades are compared against approved standards using visual and instrumental methods.',
  },
  {
    step: '04',
    title: 'Fastness Testing',
    description:
      'Wash, light, and rub fastness properties are evaluated to ensure performance meets customer specifications.',
  },
  {
    step: '05',
    title: 'Final Batch Approval',
    description:
      'Quality manager approves each batch with sign-off documentation before it proceeds to packaging.',
  },
  {
    step: '06',
    title: 'Packaging & Dispatch',
    description:
      'Products are packed in moisture-resistant, labelled bags and dispatched with batch certificates on request.',
  },
]

export default function QualityPage() {
  return (
    <div className="pt-[90px]">
      {/* Page Header */}
      <div className="bg-navy section-padding-sm">
        <div className="container-main text-center">
          <span className="text-gold-400 text-sm font-poppins font-semibold tracking-widest uppercase">
            Quality Assurance
          </span>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-white mt-3 mb-4">
            Manufacturing with Zero Compromise
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Quality is not a checkpoint at Sanjay Industries — it is embedded in every step of our process.
          </p>
        </div>
      </div>

      {/* Quality Points */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <SectionHeading
            eyebrow="Our Standards"
            title="What Quality Means to Us"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPoints.map((point) => {
              const Icon = iconMap[point.icon]
              return (
                <div
                  key={point.title}
                  className="bg-white rounded-2xl border border-border p-6 hover:shadow-card transition-all"
                >
                  <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center mb-5">
                    {Icon && <Icon size={22} className="text-gold-400" />}
                  </div>
                  <h3 className="font-poppins font-semibold text-navy text-lg mb-3">{point.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{point.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            eyebrow="Our Process"
            title="Quality Control — Step by Step"
            subtitle="Every product goes through a 6-stage quality process before it reaches you."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step) => (
              <div
                key={step.step}
                className="relative bg-background rounded-2xl border border-border p-6 hover:border-gold-300 hover:shadow-card transition-all"
              >
                <span className="font-manrope font-bold text-5xl text-navy/8 absolute top-4 right-5 select-none">
                  {step.step}
                </span>
                <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck size={16} className="text-navy-900" />
                </div>
                <h3 className="font-poppins font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Banner */}
      <section className="section-padding-sm bg-dark-section">
        <div className="container-main text-center">
          <p className="text-gold-400 text-sm font-poppins font-semibold tracking-widest uppercase mb-4">
            Certification
          </p>
          <h2 className="font-poppins font-bold text-3xl text-white mb-4">
            ISO 9001:2015 Certified
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Our quality management system is certified to ISO 9001:2015, ensuring our
            processes meet international standards for manufacturing consistency and
            customer satisfaction.
          </p>
        </div>
      </section>
    </div>
  )
}
