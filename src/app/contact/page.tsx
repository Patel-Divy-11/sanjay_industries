import type { Metadata } from 'next'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Sanjay Industries for product inquiries, pricing, and export queries. Contact Mr. Arvind Patel at +91 73137 27060.',
}

export default function ContactPage() {
  return (
    <div className="pt-[90px]">
      {/* Page Header */}
      <div className="bg-navy section-padding-sm">
        <div className="container-main text-center">
          <span className="text-gold-400 text-sm font-poppins font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-white mt-3 mb-4">
            Contact Sanjay Industries
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto">
            Send us your inquiry and we will respond within 24 business hours.
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  )
}
