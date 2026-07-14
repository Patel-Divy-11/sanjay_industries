'use client'

import Link from 'next/link'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { company } from '@/data/company'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Background — replace with real factory image ── */}
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true">
        {/* Subtle industrial texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px
            ), repeating-linear-gradient(
              90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px
            )`,
          }}
        />
        {/* Gold accent glow */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gold opacity-5 blur-[120px] rounded-full" />
        <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-navy-400 opacity-20 blur-[100px] rounded-full" />
      </div>

      {/* ── Content ── */}
      <div className="container-main relative z-10 py-32 pt-40">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-12 bg-gold-400" />
            <span className="text-gold-400 font-poppins font-semibold text-sm tracking-widest uppercase">
              Established {company.established} · Ahmedabad, India
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-poppins font-bold text-white leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
          >
            Trusted Manufacturer of{' '}
            <span className="text-gold-gradient">
              High-Performance
            </span>{' '}
            Direct Dyes &amp; Chemical Solutions
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10"
          >
            Serving textile, industrial, and export markets with consistent quality,
            reliable manufacturing, and over three decades of industry expertise.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-600 text-navy-900 font-poppins font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${company.contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-poppins font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
            >
              <Phone size={18} />
              Send Inquiry
            </a>
          </motion.div>

          {/* Bottom Stats Row */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-16 pt-12 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { value: '35+', label: 'Years Experience' },
              { value: '20+', label: 'Products' },
              { value: '4+', label: 'Export Countries' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-manrope font-bold text-3xl text-gold-400">{stat.value}</p>
                <p className="text-xs text-slate-400 font-inter mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.a
        href="#trust"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-poppins tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
