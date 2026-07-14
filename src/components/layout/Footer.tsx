import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react'
import { company, navItems, contactPersons } from '@/data/company'
import { productCategories } from '@/data/products'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      {/* ── Main Footer ── */}
      <div className="container-main py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <p className="font-poppins font-bold text-xl text-white">Sanjay Industries</p>
              <p className="text-xs font-inter text-gold-400 tracking-widest mt-0.5">
                DYES & CHEMICALS
              </p>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Trusted manufacturer of direct dyes and specialty chemicals since 1990.
              Supplying domestic and international markets from Ahmedabad, Gujarat.
            </p>
            <div className="inline-flex items-center gap-2 bg-navy-700 rounded-xl px-4 py-2.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-poppins text-slate-300">
                Est. 1990 · 35+ Years
              </span>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 hover:text-gold-400 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Products */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Product Range
            </h3>
            <ul className="space-y-3">
              {productCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products#${cat.slug}`}
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-gold-400 transition-colors group"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: cat.color }}
                    />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {/* Both contact persons */}
              {contactPersons.map((person) => (
                <li key={person.phoneRaw} className="flex items-center gap-3">
                  <Phone size={16} className="text-gold-400 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500">{person.name}</p>
                    <a
                      href={`tel:${person.phoneRaw}`}
                      className="text-sm text-slate-300 hover:text-gold-400 transition-colors font-semibold"
                    >
                      {person.phone}
                    </a>
                  </div>
                </li>
              ))}
              <li>
                <a
                  href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=${company.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"   
                  className="flex items-center gap-3  text-sm text-slate-300 hover:text-gold-400 transition-colors"
                >
                  <Mail size={16} className="text-gold-400 shrink-0" />
                  {company.contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-400 leading-relaxed">
                  {company.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-gold-400 shrink-0" />
                <span className="text-sm text-slate-300">{company.contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-navy-700">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 font-inter">
            © {year} Sanjay Industries. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 font-inter">
            Plot No. C-1/B-5, GIDC Naroda, Ahmedabad, Gujarat 382330
          </p>
        </div>
      </div>
    </footer>
  )
}
