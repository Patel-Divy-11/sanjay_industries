import type { Metadata } from 'next'
import { Award, ShieldCheck, Globe, FileCheck } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Certificates',
  description:
    'Sanjay Industries holds ISO 9001:2015 certification and export quality compliance. View our certificates.',
}

const certificates = [
  {
    id: 'iso',
    icon: Award,
    title: 'ISO 9001:2015',
    issuer: 'Quality Management System Certification',
    description:
      'Our manufacturing processes are certified to ISO 9001:2015, validating our commitment to consistent quality management and continuous improvement.',
    color: '#0B1F3A',
    // src: '/certificates/iso-9001.jpg'  — add real certificate image here
    src: null,
  },
  {
    id: 'quality',
    icon: ShieldCheck,
    title: 'Quality Certified',
    issuer: 'Internal Quality Assurance',
    description:
      'In-house quality certification for every batch — ensuring shade consistency, solubility standards, and fastness properties are met before dispatch.',
    color: '#EAB308',
    src: null,
  },
  {
    id: 'export',
    icon: Globe,
    title: 'Export License',
    issuer: 'Government of India — DGFT',
    description:
      'We hold a valid export license under the Directorate General of Foreign Trade, enabling legal and compliant export to international markets.',
    color: '#16A34A',
    src: null,
  },
  {
    id: 'gst',
    icon: FileCheck,
    title: 'GST Registered',
    issuer: 'Government of India',
    description:
      'Sanjay Industries is a GST-registered entity in Gujarat, India. Valid GST invoices are issued for all domestic transactions.',
    color: '#7C3AED',
    src: null,
  },
]

export default function CertificatesPage() {
  return (
    <div className="pt-[90px]">
      {/* Page Header */}
      <div className="bg-navy section-padding-sm">
        <div className="container-main text-center">
          <span className="text-gold-400 text-sm font-poppins font-semibold tracking-widest uppercase">
            Compliance & Certifications
          </span>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-white mt-3 mb-4">
            Our Certificates
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We believe in transparent, verifiable quality. Our certifications back every claim we make.
          </p>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container-main">
          <SectionHeading
            eyebrow="Verified"
            title="Certifications & Compliance"
            subtitle="Our certifications cover quality management, export compliance, and GST registration — giving you full confidence when sourcing from us."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-card transition-all"
              >
                {/* Certificate preview area */}
                <div
                  className="h-40 flex flex-col items-center justify-center gap-3 relative"
                  style={{ backgroundColor: cert.color + '14' }}
                >
                  {cert.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cert.src}
                      alt={cert.title}
                      className="h-full w-full object-contain p-4"
                    />
                  ) : (
                    <>
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: cert.color + '22' }}
                      >
                        <cert.icon size={32} style={{ color: cert.color }} />
                      </div>
                      
                    </>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="font-poppins font-bold text-navy text-lg mb-1">{cert.title}</h3>
                      <p className="text-xs font-poppins font-medium text-text-secondary uppercase tracking-wider mb-3">
                        {cert.issuer}
                      </p>
                      <p className="text-sm font-inter text-text-secondary leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center bg-white rounded-2xl border border-border p-8">
            <p className="text-text-secondary max-w-xl mx-auto text-sm">
              Need copies of our certificates for your procurement process?
              Contact us directly and we will share the relevant documentation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-5 bg-navy hover:bg-navy-700 text-white font-poppins font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              Request Certificate Copies
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
