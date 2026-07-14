import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Target, Eye, Phone, Mail, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { company, whyChooseUs } from '@/data/company'
import { ContactPerson } from '@/types'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Sanjay Industries — 35+ years of dyes and chemical manufacturing from Ahmedabad, Gujarat. Meet our team and understand our quality promise.',
}

const PHONE_LINK = `tel:${company.contact.phone.replace(/\s/g, '')}`
const WHATSAPP = `https://wa.me/${company.contact.phone.replace(/\D/g, '')}?text=Hello%2C%20I%20found%20your%20website%20and%20would%20like%20to%20inquire.`

const timeline = [
  { year: '1990', event: 'Sanjay Industries founded in GIDC Naroda, Ahmedabad' },
  { year: '1995', event: 'Expanded product range to include Direct Orange & Green series' },
  { year: '2000', event: 'Entered export markets — first shipments to Bangladesh' },
  { year: '2008', event: 'Achieved ISO 9001 quality management certification' },
  { year: '2015', event: 'Expanded to Nepal and other international markets' },
  { year: '2024', event: '35+ years strong — 100+ products, serving global buyers' },
]

export default function AboutPage() {
  return (
    <div className="pt-[90px]">

      {/* ── Page Header ── */}
      <div className="bg-navy section-padding-sm">
        <div className="container-main text-center">
          <span className="text-gold-400 text-sm font-poppins font-semibold tracking-widest uppercase">
            Our Story
          </span>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-white mt-3 mb-4">
            About Sanjay Industries
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A manufacturing legacy built on quality, reliability, and customer trust since 1990.
          </p>
        </div>
      </div>

      {/* ── Company Overview ── */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-600 text-sm font-poppins font-semibold tracking-widest uppercase mb-3 block">
                Who We Are
              </span>
              <h2 className="font-poppins font-bold text-h2 text-navy leading-tight mb-5">
                Three Decades of Dyeing Excellence
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-5">
                {company.description}
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Located at GIDC Naroda — Ahmedabad&apos;s industrial heartland — we operate a fully
                equipped manufacturing facility with in-house quality testing and consistent
                production capability for both domestic and export requirements.
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-700 text-white font-poppins font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02]">
                Send an Inquiry <ArrowRight size={16} />
              </Link>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '1990', label: 'Year Established', sub: '35+ years in business' },
                { value: '100+', label: 'Products', sub: 'Direct & Acid dye range' },
                { value: '4+', label: 'Export Countries', sub: 'India, BD, Nepal & more' },
                { value: 'ISO', label: '9001:2015', sub: 'Quality certified' },
              ].map((s) => (
                <div key={s.label}
                  className="bg-white rounded-2xl border border-border p-6 text-center hover:shadow-card transition-all">
                  <p className="font-manrope font-bold text-3xl text-navy">{s.value}</p>
                  <p className="font-poppins font-semibold text-sm text-navy mt-1">{s.label}</p>
                  <p className="text-xs text-text-secondary mt-1">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading eyebrow="Our Purpose" title="Mission & Vision" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center mb-5">
                <Target size={22} className="text-gold-400" />
              </div>
              <h2 className="font-poppins font-bold text-xl text-navy mb-4">Our Mission</h2>
              <p className="text-text-secondary leading-relaxed">
                To manufacture and supply high-quality dye solutions that empower our customers to
                produce consistent, vibrant, and durable products — while maintaining the reliability
                and service standards that define long-term partnerships.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center mb-5">
                <Eye size={22} className="text-gold-400" />
              </div>
              <h2 className="font-poppins font-bold text-xl text-navy mb-4">Our Vision</h2>
              <p className="text-text-secondary leading-relaxed">
                To be recognised as the most trusted and quality-consistent direct dye manufacturer
                in India, expanding our export footprint across South Asia and beyond while building
                a reputation for technical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Journey Timeline ── */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <SectionHeading
            eyebrow="Our Journey"
            title="35 Years of Growth"
            subtitle="Key milestones that shaped Sanjay Industries into a trusted manufacturer and exporter."
          />
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 z-10 ${i === timeline.length - 1 ? 'bg-gold' : 'bg-white border-2 border-border'}`}>
                    <span className={`font-manrope font-bold text-xs ${i === timeline.length - 1 ? 'text-navy-900' : 'text-navy'}`}>
                      {item.year}
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl border border-border px-6 py-4 flex-1 hover:shadow-card transition-all">
                    <p className="text-sm font-inter text-text-primary leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading eyebrow="Our Strengths" title="Why Customers Trust Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.id}
                className="flex gap-5 bg-background rounded-2xl p-6 border border-border hover:border-gold-300 hover:shadow-card transition-all">
                <CheckCircle2 size={22} className="text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-poppins font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

    </div>
  )
}
