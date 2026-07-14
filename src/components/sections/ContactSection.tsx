'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Navigation } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { company, contactPersons } from '@/data/company'

interface FormData {
  name: string
  company: string
  phone: string
  email: string
  product: string
  message: string
}

const initialForm: FormData = {
  name: '', company: '', phone: '', email: '', product: '', message: '',
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please call us directly.')
        setLoading(false)
        return
      }
      setSubmitted(true)
    } catch {
      setError('Network error. Please check your connection or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-background border border-border rounded-xl px-4 py-3.5 text-sm font-inter text-text-primary placeholder:text-slate-400 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors'
  const labelClass = 'block text-sm font-poppins font-medium text-text-primary mb-1.5'

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading
          eyebrow="Contact Us"
          title="Send Us Your Inquiry"
          subtitle="Fill in your details and requirements. We respond within 24 business hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          {/* ── Left: Info + Map ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact Cards — both persons */}
            <div className="bg-navy rounded-2xl p-6 text-white">
              <h3 className="font-poppins font-bold text-lg mb-5">Contact Our Team</h3>

              <div className="space-y-4">
                {contactPersons.map((person, i) => (
                  <div
                    key={person.phoneRaw}
                    className={`flex items-center justify-between gap-3 ${
                      i < contactPersons.length - 1 ? 'pb-4 border-b border-white/10' : ''
                    }`}
                  >
                    {/* Avatar + info */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-gold/30 flex items-center justify-center shrink-0">
                        <span className="font-manrope font-bold text-xs text-gold-400">
                          {person.initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-poppins font-semibold text-sm text-white">
                          {person.name}
                        </p>
                        <p className="text-xs text-slate-400">{person.role}</p>
                        <a
                          href={`tel:${person.phoneRaw}`}
                          className="text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors mt-0.5 block"
                        >
                          {person.phone}
                        </a>
                      </div>
                    </div>

                    {/* Call + WhatsApp */}
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={`tel:${person.phoneRaw}`}
                        aria-label={`Call ${person.name}`}
                        className="w-9 h-9 rounded-xl bg-white/10 hover:bg-navy-600 flex items-center justify-center transition-colors"
                      >
                        <Phone size={15} className="text-gold-400" />
                      </a>
                      <a
                        href={`https://wa.me/${person.phoneRaw}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20dyes.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`WhatsApp ${person.name}`}
                        className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20c55e] flex items-center justify-center transition-colors text-white"
                      >
                        <WhatsAppIcon />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Address + hours */}
              <div className="mt-5 pt-5 border-t border-white/10 space-y-3">
                <div className="flex gap-3">
                  <MapPin size={15} className="text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {company.contact.address}
                    </p>
                    <a
                      href={company.contact.mapOpenUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-gold-400 hover:text-gold-300 mt-1 font-semibold"
                    >
                      <Navigation size={11} />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail size={15} className="text-gold-400 shrink-0" />
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${company.contact.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-300 hover:text-gold-400 transition-colors"
                  >
                    {company.contact.email}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Clock size={15} className="text-gold-400 shrink-0" />
                  <p className="text-xs text-slate-300">{company.contact.workingHours}</p>
                </div>
              </div>
            </div>

            {/* Google Map — click to open */}
            <div className="relative rounded-2xl overflow-hidden border border-border group">
              <iframe
                src={company.contact.mapEmbedUrl}
                width="100%"
                height="210"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sanjay Industries Location — GIDC Naroda, Ahmedabad"
              />
              {/* Hover overlay opens Google Maps */}
              <a
                href={company.contact.mapOpenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-end justify-center pb-3 bg-transparent hover:bg-navy/10 transition-colors"
                aria-label="Open in Google Maps"
              >
                <span className="inline-flex items-center gap-1.5 bg-white shadow-card text-navy font-poppins font-semibold text-xs px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Navigation size={12} />
                  Open in Google Maps
                </span>
              </a>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-white rounded-2xl border border-border px-6">
                <CheckCircle2 size={56} className="text-green-500 mb-4" />
                <h3 className="font-poppins font-bold text-xl text-navy mb-3">
                  Inquiry Sent Successfully!
                </h3>
                <p className="text-text-secondary max-w-sm mb-8">
                  Our team will contact you within 24 business hours.
                  Check your email for a confirmation copy.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {contactPersons.map((person) => (
                    <a
                      key={person.phoneRaw}
                      href={`tel:${person.phoneRaw}`}
                      className="inline-flex items-center gap-2 bg-navy text-white font-poppins font-semibold text-sm px-5 py-3 rounded-xl hover:bg-navy-700 transition-colors"
                    >
                      <Phone size={14} />
                      {person.name.split(' ').slice(1).join(' ')}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-border p-7 md:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="name">Your Name *</label>
                    <input id="name" name="name" type="text" required placeholder="Full name"
                      value={form.name} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="company">Company Name</label>
                    <input id="company" name="company" type="text" placeholder="Your company"
                      value={form.company} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="phone">Phone Number *</label>
                    <input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX"
                      value={form.phone} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="you@company.com"
                      value={form.email} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="product">Product of Interest</label>
                  <select id="product" name="product" value={form.product}
                    onChange={handleChange} className={inputClass}>
                    <option value="">Select a product category</option>
                    <option value="yellow-series">Direct Yellow Series</option>
                    <option value="orange-series">Direct Orange Series</option>
                    <option value="green-series">Direct Green Series</option>
                    <option value="black-series">Direct Black Series</option>
                    <option value="brown-series">Direct Brown Series</option>
                    <option value="acid-dyes">Acid Dyes</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass} htmlFor="message">Message / Requirements</label>
                  <textarea id="message" name="message" rows={5}
                    placeholder="Tell us about your quantity, shade requirements, delivery location, etc."
                    value={form.message} onChange={handleChange}
                    className={`${inputClass} resize-none`} />
                </div>

                {error && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                    <AlertCircle size={17} className="text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-red-700 font-medium mb-1">{error}</p>
                      <div className="flex flex-wrap gap-3">
                        {contactPersons.map((p) => (
                          <a key={p.phoneRaw} href={`tel:${p.phoneRaw}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-800">
                            <Phone size={11} /> {p.name}: {p.phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-navy-700 disabled:opacity-60 text-white font-poppins font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending your inquiry…
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Send Inquiry
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-text-secondary font-inter">
                  We respond within 24 business hours. Your details are kept confidential.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
