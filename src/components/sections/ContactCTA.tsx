'use client'

import Link from 'next/link'
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { company, contactPersons } from '@/data/company'

export default function ContactCTA() {
  return (
    <section className="section-padding bg-dark-section relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold/40" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl" aria-hidden="true" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-sm font-semibold font-poppins tracking-widest uppercase text-gold-400 mb-4">
            Get in Touch
          </span>
          <h2 className="font-poppins font-bold text-h2 text-white leading-tight mb-5">
            Ready to Source Quality Dyes for Your Business?
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10">
            Whether you need bulk quantities, custom shade matching, or export documentation —
            our team responds within 24 hours.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-600 text-navy-900 font-poppins font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02]"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Contact persons — call + WhatsApp */}
          <div className="flex flex-wrap justify-center gap-4">
            {contactPersons.map((person) => (
              <div key={person.phoneRaw} className="flex items-center gap-2 bg-white/8 rounded-2xl px-5 py-3 border border-white/10">
                <div>
                  <p className="text-xs text-slate-400 font-inter">{person.name}</p>
                  <a
                    href={`tel:${person.phoneRaw}`}
                    className="text-white font-poppins font-semibold text-sm hover:text-gold-400 transition-colors"
                  >
                    {person.phone}
                  </a>
                </div>
                <div className="flex gap-2 ml-2">
                  <a
                    href={`tel:${person.phoneRaw}`}
                    aria-label={`Call ${person.name}`}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gold/20 flex items-center justify-center transition-colors"
                  >
                    <Phone size={14} className="text-gold-400" />
                  </a>
                  <a
                    href={`https://wa.me/${person.phoneRaw}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20dyes.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${person.name}`}
                    className="w-8 h-8 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/40 flex items-center justify-center transition-colors"
                  >
                    <MessageCircle size={14} className="text-[#25D366]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Email */}
          <div className="mt-6">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${company.contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-gold-400 transition-colors font-inter"
            >
              <Mail size={15} />
              {company.contact.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
