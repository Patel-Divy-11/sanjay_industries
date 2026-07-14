import type { Metadata } from 'next'
import Link from 'next/link'
import { Send, Phone } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import SectionHeading from '@/components/ui/SectionHeading'
import { productCategories } from '@/data/products'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Complete range of direct dyes and acid dyes — Yellow, Orange, Green, Black, Brown series and Acid Dyes for textile, paper, leather and industrial use.',
}

const PHONE_LINK = `tel:${company.contact.phone.replace(/\s/g, '')}`
const WHATSAPP = `https://wa.me/${company.contact.phone.replace(/\D/g, '')}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.`

export default function ProductsPage() {
  return (
    <div className="pt-[90px]">

      {/* ── Page Header ── */}
      <div className="bg-navy section-padding-sm">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <span className="text-gold-400 text-sm font-poppins font-semibold tracking-widest uppercase">
                Product Range
              </span>
              <h1 className="font-poppins font-bold text-3xl md:text-4xl text-white mt-2 mb-2">
                Direct Dyes &amp; Acid Dyes
              </h1>
              <p className="text-slate-300 max-w-lg">
                100+ products across 6 categories for textile, paper, leather and industrial applications.
              </p>
            </div>
            {/* Header CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-600 text-navy-900 font-poppins font-bold text-sm px-5 py-3 rounded-xl transition-all">
                <Phone size={15} />
                Call for Pricing
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-poppins font-semibold text-sm px-5 py-3 rounded-xl transition-all border border-white/20">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Quick Category Nav ── */}
      <div className="bg-white border-b border-border sticky top-[90px] z-40">
        <div className="container-main overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {productCategories.map((cat) => (
              <a key={cat.id} href={`#${cat.slug}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-poppins font-medium text-text-secondary hover:text-navy hover:bg-background transition-colors whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Product Categories ── */}
      <div className="section-padding bg-background">
        <div className="container-main space-y-16">
          {productCategories.map((cat) => (
            <section key={cat.id} id={cat.slug} className="scroll-mt-36">

              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-12 rounded-full" style={{ backgroundColor: cat.color }} />
                  <div>
                    <h2 className="font-poppins font-bold text-2xl text-navy">{cat.name}</h2>
                    <p className="text-sm text-text-secondary mt-0.5 max-w-xl">{cat.description}</p>
                  </div>
                </div>
                {/* Category Inquiry Button */}
                <Link href={`/contact?product=${cat.slug}`}
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-700 text-white font-poppins font-semibold text-sm px-5 py-2.5 rounded-xl transition-all shrink-0 self-start">
                  <Send size={14} />
                  Inquire for {cat.name}
                </Link>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {cat.products.map((product) => (
                  <div key={product.id}
                    className="bg-white rounded-2xl border border-border hover:shadow-card-hover transition-all duration-200 overflow-hidden group flex flex-col">

                    {/* Color swatch */}
                    <div className="h-2 w-full group-hover:h-3 transition-all duration-300"
                      style={{ backgroundColor: cat.color }} />

                    <div className="p-5 flex flex-col flex-1">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-poppins font-semibold text-navy text-sm leading-snug">{product.name}</h3>
                        <Badge variant={product.availability === 'In Stock' ? 'green' : 'gray'}>
                          {product.availability}
                        </Badge>
                      </div>

                      {product.shade && (
                        <p className="text-xs text-text-secondary italic mb-3">Shade: {product.shade}</p>
                      )}

                      {/* Applications */}
                      <div className="mb-3">
                        <p className="text-xs font-poppins font-medium text-text-secondary uppercase tracking-wider mb-1.5">
                          Applications
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {product.applications.map((app) => (
                            <span key={app}
                              className="text-xs bg-background text-text-secondary px-2.5 py-1 rounded-lg border border-border">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {product.packaging && (
                        <p className="text-xs text-text-secondary font-inter mb-4">
                          📦 {product.packaging}
                        </p>
                      )}

                      {/* Product-level Inquiry Button */}
                      <div className="mt-auto pt-3 border-t border-border">
                        <Link
                          href={`/contact?product=${cat.slug}&item=${product.id}`}
                          className="flex items-center justify-center gap-1.5 w-full text-xs font-poppins font-semibold text-navy hover:text-white hover:bg-navy border border-navy rounded-lg py-2.5 transition-all duration-200">
                          <Send size={12} />
                          Inquire About This Product
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="bg-navy section-padding-sm">
        <div className="container-main text-center">
          <h2 className="font-poppins font-bold text-2xl text-white mb-3">
            Don&apos;t see what you need?
          </h2>
          <p className="text-slate-300 mb-6">
            We manufacture custom formulations and can match specific shade requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-600 text-navy-900 font-poppins font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-[1.02]">
              <Send size={16} />
              Send Custom Requirement
            </Link>
            <a href={PHONE_LINK}
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-poppins font-semibold px-7 py-3.5 rounded-xl transition-all">
              <Phone size={16} />
              {company.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
