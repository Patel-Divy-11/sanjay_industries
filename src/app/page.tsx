import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import About from '@/components/sections/About'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ProductCategories from '@/components/sections/ProductCategories'
import Applications from '@/components/sections/Applications'
import Infrastructure from '@/components/sections/Infrastructure'
import Quality from '@/components/sections/Quality'
import Certificates from '@/components/sections/Certificates'
import ExportMarkets from '@/components/sections/ExportMarkets'
import ContactCTA from '@/components/sections/ContactCTA'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Sanjay Industries — Direct Dyes & Chemical Manufacturer, Ahmedabad',
  description:
    'Trusted manufacturer of direct dyes and specialty chemicals since 1990. Supplying textile, paper, and industrial markets from GIDC Naroda, Ahmedabad.',
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Stats Bar */}
      <TrustBar />

      {/* 3. About Sanjay Industries */}
      <About />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Product Categories */}
      <ProductCategories />

      {/* 6. Applications / Industries Served */}
      <Applications />

      {/* 7. Manufacturing Infrastructure */}
      <Infrastructure />

      {/* 8. Quality Assurance */}
      <Quality />

      {/* 9. Certificates */}
      <Certificates />

      {/* 10. Export Markets */}
      <ExportMarkets />

      {/* 11. Contact CTA Banner */}
      <ContactCTA />

      {/* 12. Contact Form + Map */}
      <ContactSection />
    </>
  )
}
