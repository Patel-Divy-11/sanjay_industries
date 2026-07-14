'use client'

import { FlaskConical, ClipboardCheck, Repeat, PackageCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { qualityPoints } from '@/data/company'

const iconMap: Record<string, React.ElementType> = {
  FlaskConical,
  ClipboardCheck,
  Repeat,
  PackageCheck,
}

export default function Quality() {
  return (
    <section id="quality" className="section-padding bg-dark-section relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #EAB308 0%, transparent 60%),
                            radial-gradient(circle at 80% 50%, #1a3a5c 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Heading & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold font-poppins tracking-widest uppercase text-gold-400 mb-4">
              Quality Assurance
            </span>
            <h2 className="font-poppins font-bold text-h2 text-white leading-tight mb-6">
              Manufacturing with{' '}
              <span className="text-gold-gradient">Zero Compromise</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Quality is not a department at Sanjay Industries — it is embedded in every
              step of our manufacturing process, from raw material selection to final dispatch.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                <p className="font-manrope font-bold text-2xl text-gold-400">ISO</p>
                <p className="text-xs text-slate-400 font-inter">9001:2015</p>
              </div>
              <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                <p className="font-manrope font-bold text-2xl text-gold-400">100%</p>
                <p className="text-xs text-slate-400 font-inter">Batch Tested</p>
              </div>
              <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                <p className="font-manrope font-bold text-2xl text-gold-400">35+</p>
                <p className="text-xs text-slate-400 font-inter">Years of Trust</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Quality Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {qualityPoints.map((point, i) => {
              const Icon = iconMap[point.icon]
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white/8 hover:bg-white/12 rounded-2xl p-5 border border-white/10 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                    {Icon && <Icon size={18} className="text-gold-400" />}
                  </div>
                  <h3 className="font-poppins font-semibold text-white mb-2 text-base">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
