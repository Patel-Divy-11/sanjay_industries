'use client'

import { Layers, FileText, Package, Factory } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { applications } from '@/data/company'

const iconMap: Record<string, React.ElementType> = {
  Layers,
  FileText,
  Package,
  Factory,
}

export default function Applications() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          eyebrow="Applications"
          title="Industries We Serve"
          subtitle="Our dyes and chemical formulations are trusted across multiple industries demanding consistent shade quality and reliable supply."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applications.map((app, i) => {
            const Icon = iconMap[app.icon]
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-5 bg-background rounded-2xl p-6 border border-border hover:border-gold-300 hover:shadow-card transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center shrink-0">
                  {Icon && <Icon size={24} className="text-gold-400" />}
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-navy text-lg mb-2">
                    {app.title}
                  </h3>
                  <p className="text-sm font-inter text-text-secondary leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
