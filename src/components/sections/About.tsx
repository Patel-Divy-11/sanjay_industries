'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { company } from '@/data/company'

const highlights = [
  'ISO 9001:2015 Certified Manufacturing',
  'In-house quality testing laboratory',
  'Reliable supply for bulk and regular orders',
  'Export documentation & compliance support',
  'Dedicated technical and commercial team',
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image placeholder — replace with actual company image */}
            <div className="image-placeholder rounded-2xl h-80 md:h-[480px]">
              <div className="relative z-10 text-center p-8">
                <p className="font-poppins font-bold text-5xl text-gold-400">1990</p>
                <p className="text-white/60 text-sm mt-2 font-inter">
                  Year of Establishment
                </p>
                {/* Add: <Image src="/factory/main.jpg" fill alt="Sanjay Industries facility" className="object-cover rounded-2xl" /> */}
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-card-hover p-5 w-44">
              <p className="font-manrope font-bold text-3xl text-navy">35+</p>
              <p className="text-xs font-poppins text-text-secondary mt-1">
                Years of Manufacturing Excellence
              </p>
              <div className="mt-3 h-1 w-full bg-background rounded-full">
                <div className="h-1 w-4/5 bg-gold rounded-full" />
              </div>
            </div>

            {/* Gold accent bar */}
            <div className="absolute -left-4 top-8 bottom-8 w-1.5 bg-gold rounded-full hidden md:block" />
          </motion.div>

          {/* ── Text Column ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold font-poppins tracking-widest uppercase text-gold-600 mb-3">
              Our Story
            </span>
            <h2 className="font-poppins font-bold text-h2 text-navy leading-tight mb-6">
              Three Decades of{' '}
              <span className="text-gold-gradient">Dyeing Excellence</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              {company.description}
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Located at GIDC Naroda, Ahmedabad — India's industrial heartland — we operate
              a fully equipped manufacturing facility with in-house quality testing and
              consistent production capability for both domestic and export requirements.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold-500 mt-0.5 shrink-0" />
                  <span className="text-sm font-inter text-text-primary">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-700 text-white font-poppins font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02]"
            >
              Learn Our Full Story
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
