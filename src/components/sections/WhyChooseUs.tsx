'use client'

import { Award, ShieldCheck, Globe, Headphones } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { whyChooseUs } from '@/data/company'

const iconMap: Record<string, React.ElementType> = {
  Award,
  ShieldCheck,
  Globe,
  Headphones,
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          eyebrow="Why Sanjay Industries"
          title="Built on Trust, Quality & Consistency"
          subtitle="When you source from us, you're partnering with a manufacturer that prioritises your production reliability over everything else."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-background hover:bg-navy rounded-2xl p-7 transition-all duration-300 border border-border hover:border-transparent hover:shadow-card-hover cursor-default"
              >
                {/* Gold top accent line */}
                <div className="absolute top-0 left-7 right-7 h-0.5 bg-gold rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-12 h-12 rounded-2xl bg-navy-100 group-hover:bg-navy-700 flex items-center justify-center mb-5 transition-colors duration-300">
                  {Icon && (
                    <Icon
                      size={22}
                      className="text-navy group-hover:text-gold-400 transition-colors duration-300"
                    />
                  )}
                </div>

                <h3 className="font-poppins font-semibold text-lg text-navy group-hover:text-white mb-3 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm font-inter text-text-secondary group-hover:text-slate-300 leading-relaxed transition-colors duration-300">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
