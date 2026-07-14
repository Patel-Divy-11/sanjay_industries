'use client'

import Link from 'next/link'
import { Award, ShieldCheck, Globe, FileCheck, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const certs = [
  {
    icon: Award,
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management System',
    color: '#0B1F3A',
    bg: '#E8EEF6',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Certified',
    subtitle: 'Batch-level QC Assurance',
    color: '#16A34A',
    bg: '#DCFCE7',
  },
  {
    icon: Globe,
    title: 'Export License',
    subtitle: 'DGFT — Govt. of India',
    color: '#7C3AED',
    bg: '#EDE9FE',
  },
  {
    icon: FileCheck,
    title: 'GST Registered',
    subtitle: 'Valid GST invoices issued',
    color: '#EAB308',
    bg: '#FEF9C3',
  },
]

export default function Certificates() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          eyebrow="Compliance"
          title="Certifications & Quality Standards"
          subtitle="Our certifications verify that every product you receive meets documented quality and compliance standards."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="group flex flex-col items-center text-center bg-background rounded-2xl border border-border hover:border-transparent hover:shadow-card-hover p-6 transition-all duration-300"
            >
              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: cert.bg }}
              >
                <cert.icon size={28} style={{ color: cert.color }} />
              </div>
              <h3 className="font-poppins font-bold text-navy text-base mb-1">{cert.title}</h3>
              <p className="text-xs font-inter text-text-secondary">{cert.subtitle}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 text-sm font-poppins font-semibold text-navy hover:text-gold-600 transition-colors"
          >
            View All Certificates
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
