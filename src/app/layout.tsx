import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingContact from '@/components/ui/FloatingContact'

// ─── Fonts ────────────────────────────────────────────────────────────────────
// NOTE: Google Fonts are loaded via <link> in globals.css for flexibility.
// To use next/font (recommended for production), uncomment the imports below
// and add the font variables back to <html>:
//
// import { Poppins, Inter, Manrope } from 'next/font/google'
// const poppins = Poppins({ subsets:['latin'], weight:['400','500','600','700','800'], variable:'--font-poppins', display:'swap' })
// const inter = Inter({ subsets:['latin'], weight:['400','500','600'], variable:'--font-inter', display:'swap' })
// const manrope = Manrope({ subsets:['latin'], weight:['600','700','800'], variable:'--font-manrope', display:'swap' })

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    template: '%s | Sanjay Industries',
    default: 'Sanjay Industries — Direct Dyes & Chemical Manufacturer, Ahmedabad',
  },
  description:
    'Sanjay Industries is a trusted manufacturer and exporter of direct dyes and specialty chemicals since 1990. Supplying textile, paper, and industrial markets from Ahmedabad, Gujarat, India.',
  keywords: [
    'direct dyes manufacturer',
    'acid dyes supplier',
    'dye manufacturer Ahmedabad',
    'chemical manufacturer Gujarat',
    'textile dyes India',
    'Sanjay Industries',
    'GIDC Naroda',
    'direct yellow dye',
    'direct black dye',
    'dye exporter India',
  ],
  authors: [{ name: 'Sanjay Industries' }],
  creator: 'Sanjay Industries',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sanjaydyes.com',
    siteName: 'Sanjay Industries',
    title: 'Sanjay Industries — Direct Dyes & Chemical Manufacturer',
    description:
      'Trusted manufacturer of direct dyes and specialty chemicals for textile, paper, and industrial applications. Established 1990, Ahmedabad, India.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1F3A',
}

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col w-full overflow-x-hidden bg-background text-text-primary">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
