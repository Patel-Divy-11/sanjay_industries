'use client'

import Image from 'next/image'
import { Camera } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { infrastructureGallery } from '@/data/company'

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading
          eyebrow="Our Facility"
          title="Manufacturing Infrastructure"
          subtitle="A fully equipped production facility in GIDC Naroda, Ahmedabad — built to deliver consistent quality at scale."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {infrastructureGallery.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-navy-800 aspect-[4/3]"
            >
              {/* ── If real image provided, use Next Image ── */}
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                /* Placeholder until client provides photos */
                <div className="absolute inset-0 image-placeholder flex flex-col items-center justify-center gap-3">
                  <Camera size={36} className="text-white/20" />
                  <p className="text-white/30 text-xs font-inter text-center px-6">
                    Factory image coming soon
                  </p>
                </div>
              )}

              {/* Overlay — always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-poppins font-semibold text-white text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-inter text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Gold border hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/40 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
