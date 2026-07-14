'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems, company, contactPersons } from '@/data/company'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300  items-center justify-center',
        isScrolled ? 'shadow-nav' : 'shadow-none'
      )}
    >
      <div className="container-main flex items-center justify-between ">
        <div className="flex left-0 right-0 w-screen items-center justify-between h-[80px]">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="flex flex-col leading-none">
              <span className="font-poppins font-bold text-xl mr-5 text-gold-600">
                Sanjay Industries
              </span>
              <span className="text-xs font-inter text-text-secondary tracking-wider">
                DYES & CHEMICALS
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium font-poppins transition-colors duration-150',
                    pathname === item.href
                      ? 'text-gold-600 font-semibold'
                      : 'text-text-primary hover:text-navy hover:bg-navy-50'
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={14}
                      className={cn(
                        'transition-transform duration-200',
                        activeDropdown === item.label && 'rotate-180'
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-card-hover border border-border py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-poppins text-text-primary hover:text-navy hover:bg-background transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── CTA — call buttons for each contact person ── */}
          <div className="hidden lg:flex items-center gap-1">
            {contactPersons.map((person, i) => (
              <a
                key={person.phoneRaw}
                href={`tel:${person.phoneRaw}`}
                title={person.name}
                className={`flex  gap-1 font-poppins font-semibold text-sm px-2.5 py-2.5 rounded-xl transition-colors duration-200 w-max m-1 ${
                  i === 0
                    ? 'bg-gold hover:bg-gold-600 text-navy-900'
                    : 'bg-navy-800 hover:bg-navy text-white border border-navy-600'
                }`}
              >
                <Phone size={20} className="" />
                
                <span className="hidden xl:inline">{person.name.replace('Mr. ', '')} </span>
                
             
                
              </a>
            ))}
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden p-2 rounded-lg text-navy hover:bg-navy-50 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-card">
          <div className="container-main py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-sm font-medium font-poppins transition-colors',
                    pathname === item.href
                      ? 'bg-navy text-white'
                      : 'text-text-primary hover:bg-background hover:text-navy'
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-gold-200 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-xs font-poppins text-text-secondary hover:text-navy transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile — both call buttons */}
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              {contactPersons.map((person, i) => (
                <a
                  key={person.phoneRaw}
                  href={`tel:${person.phoneRaw}`}
                  className={`flex items-center justify-center gap-5 w-full font-poppins font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors ${
                    i === 0
                      ? 'bg-gold hover:bg-gold-600 text-navy-900'
                      : 'bg-navy hover:bg-navy-700 text-white '
                  }`}
                >
                  <Phone size={15} />
                  {person.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
