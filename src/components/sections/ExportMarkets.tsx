'use client'

import { Globe, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { company } from '@/data/company'

const markets = [
  {
    country: 'India',
    flag: '🇮🇳',
    detail: 'Domestic supply across Gujarat, Maharashtra, Tamil Nadu, and more.',
    primary: true,
  },
  {
    country: 'Bangladesh',
    flag: '🇧🇩',
    detail: 'Trusted supplier to Dhaka-based textile mills and garment exporters.',
    primary: false,
  },
  {
    country: 'Nepal',
    flag: '🇳🇵',
    detail: 'Consistent supply to Kathmandu-based textile and dye traders.',
    primary: false,
  },
  {
    country: 'International',
    flag: '🌏',
    detail: 'Export documentation and compliance available for new markets.',
    primary: false,
  },
]

export default function ExportMarkets() {
  return (
    <section className="section-padding bg-white-primary">
      <div className="container-main">
        <SectionHeading
          eyebrow="Global Reach"
          title="Export Markets"
          subtitle="Our products travel beyond borders — serving buyers in South Asia and international markets with quality that meets global standards."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {markets.map((market, i) => (
            <motion.div
              key={market.country}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-2xl p-6 border transition-all duration-200 ${
                market.primary
                  ? 'bg-navy border-navy text-white'
                  : 'bg-white border-border hover:border-navy-200 hover:shadow-card'
              }`}
            >
              <div className="text-4xl mb-4">{market.flag}</div>
              <h3
                className={`font-poppins font-bold text-xl mb-2 ${
                  market.primary ? 'text-white' : 'text-navy'
                }`}
              >
                {market.country}
              </h3>
              <p
                className={`text-sm font-inter leading-relaxed ${
                  market.primary ? 'text-slate-300' : 'text-text-secondary'
                }`}
              >
                {market.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Export CTA */}
        <div className="bg-white rounded-2xl border border-border p-8 md:p-10 text-center">
          <Globe size={40} className="text-navy mx-auto mb-4" />
          <h3 className="font-poppins font-bold text-xl text-navy mb-3">
            Looking to Source from India?
          </h3>
          <p className="text-text-secondary max-w-xl mx-auto mb-6">
            We provide complete export documentation, competitive pricing, and reliable
            dispatch schedules. Reach out to discuss your requirements.
          </p>
          <a
            href={`tel:${company.contact.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-700 text-white font-poppins font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02]"
          >
            <Phone size={16} />
            Contact for Export Inquiry
          </a>
        </div>
      </div>
    </section>
  )
}
