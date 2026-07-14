'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { productCategories } from '@/data/products'

export default function ProductCategories() {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading
          eyebrow="Our Products"
          title="Complete Range of Direct & Acid Dyes"
          subtitle="We manufacture and supply a comprehensive portfolio of dye solutions for textile, paper, and industrial applications."
        />

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              id={cat.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                href={`/products#${cat.slug}`}
                className="product-card group block bg-white rounded-2xl border border-border hover:border-transparent hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                {/* Color swatch strip */}
                <div
                  className="color-swatch w-full"
                  style={{ backgroundColor: cat.color }}
                />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: cat.color + '22' }}
                    >
                      {/* Color dot as icon */}
                      <span
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: cat.color }}
                      />
                    </div>
                    <span className="text-xs font-poppins font-semibold text-text-secondary">
                      {cat.products.length} products
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-xl text-navy mb-2 group-hover:text-navy-700 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm font-inter text-text-secondary leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* Product names */}
                  <ul className="space-y-1.5 mb-5">
                    {cat.products.slice(0, 3).map((p) => (
                      <li
                        key={p.id}
                        className="text-xs font-inter text-text-secondary flex items-center gap-2"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: cat.color }}
                        />
                        {p.name}
                        {p.shade && (
                          <span className="text-text-secondary/60 italic">· {p.shade}</span>
                        )}
                      </li>
                    ))}
                    {cat.products.length > 3 && (
                      <li className="text-xs font-inter text-text-secondary/50 pl-3.5">
                        +{cat.products.length - 3} more
                      </li>
                    )}
                  </ul>

                  <span className="inline-flex items-center gap-1.5 text-sm font-poppins font-semibold text-navy group-hover:text-gold-600 transition-colors">
                    View Details
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-700 text-white font-poppins font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02]"
          >
            View All Products
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}
