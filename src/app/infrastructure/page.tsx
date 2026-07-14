import type { Metadata } from 'next'
import { Camera, MapPin, Factory, Cog, TestTube, Truck } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { infrastructureGallery } from '@/data/company'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Infrastructure',
  description:
    'Explore Sanjay Industries manufacturing facility at GIDC Naroda, Ahmedabad — equipped for consistent, high-volume dye production.',
}

const capabilities = [
  {
    icon: Factory,
    title: 'Modern Manufacturing Floor',
    description:
      'Our production floor in GIDC Naroda is equipped with industrial-grade mixing and processing equipment capable of handling bulk production runs with batch-level consistency.',
  },
  {
    icon: Cog,
    title: 'Industrial Processing Equipment',
    description:
      'Precision machinery for dye formulation, dissolution, filtration, and drying — enabling us to maintain tight quality parameters across every production batch.',
  },
  {
    icon: TestTube,
    title: 'In-House QC Laboratory',
    description:
      'Every batch is tested for shade strength, solubility, pH, and fastness properties before leaving the facility. No product ships without our quality sign-off.',
  },
  {
    icon: Truck,
    title: 'Dispatch & Warehousing',
    description:
      'Secure, dry, and climate-appropriate storage for finished dye products with organised dispatch for domestic and export shipments.',
  },
]

export default function InfrastructurePage() {
  return (
    <div className="pt-[90px]">
      {/* Page Header */}
      <div className="bg-navy section-padding-sm">
        <div className="container-main text-center">
          <span className="text-gold-400 text-sm font-poppins font-semibold tracking-widest uppercase">
            Our Facility
          </span>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-white mt-3 mb-4">
            Manufacturing Infrastructure
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A fully equipped production facility in GIDC Naroda, Ahmedabad — built to deliver consistent quality at scale.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-slate-400 text-sm">
            <MapPin size={15} className="text-gold-400" />
            Plot No. C-1/B-5, Phase-2, GIDC Naroda, Ahmedabad, Gujarat 382330
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <SectionHeading
            eyebrow="Capabilities"
            title="Built for Scale & Consistency"
            subtitle="Our infrastructure is designed to handle everything from trial batches to large bulk orders without compromising on quality."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="flex gap-5 bg-white rounded-2xl p-6 border border-border hover:shadow-card transition-all"
              >
                <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center shrink-0">
                  <cap.icon size={22} className="text-gold-400" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-navy text-lg mb-2">{cap.title}</h3>
                  <p className="text-sm font-inter text-text-secondary leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            eyebrow="Gallery"
            title="Inside Our Facility"
            subtitle="Real photos from our manufacturing floor, production area, and quality control lab."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {infrastructureGallery.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-navy-800 aspect-[4/3]"
              >
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 image-placeholder flex flex-col items-center justify-center gap-3">
                    <Camera size={36} className="text-white/20" />
                    <p className="text-white/30 text-xs font-inter text-center px-6">
                      Factory image — coming soon
                    </p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-poppins font-semibold text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-xs font-inter text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
