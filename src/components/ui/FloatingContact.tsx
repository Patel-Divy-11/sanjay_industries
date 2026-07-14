'use client'

import { useState } from 'react'
import { Phone, X, MessageCircle } from 'lucide-react'
import { contactPersons } from '@/data/company'

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* ── Expanded panel ── */}
      {open && (
        <div className="flex flex-col gap-4 items-end pb-1">
          {contactPersons.map((person) => (
            <div key={person.phoneRaw} className="flex flex-col gap-2 items-end">

              {/* Person name + role */}
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-card">
                <div className="w-6 h-6 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-[9px] font-manrope font-bold text-gold-400">
                    {person.initials}
                  </span>
                </div>
                <span className="text-xs font-poppins font-semibold text-navy">
                  {person.name}
                </span>
                
              </div>

              {/* Call + WhatsApp row */}
              <div className="flex gap-2">
                {/* Call */}
                <a
                  href={`tel:${person.phoneRaw}`}
                  className="flex items-center gap-2 bg-white shadow-card-hover rounded-2xl px-4 py-2.5 hover:shadow-lg transition-all hover:scale-[1.02]"
                >
                  <span className="text-xs font-poppins font-semibold text-navy">
                    {person.phone}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-navy flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-gold-400" />
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${person.phoneRaw}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20dyes.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${person.name}`}
                  className="flex items-center justify-center w-11 h-11 bg-[#25D366] rounded-2xl shadow-card-hover hover:shadow-lg transition-all hover:scale-[1.05]"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          ))}

          <p className="text-xs text-text-secondary font-inter px-1 mt-1">
            Mon – Sat · 9:00 AM – 6:00 PM
          </p>
        </div>
      )}

      {/* ── FAB button ── */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close contacts' : 'Open contacts'}
        className={`w-14 h-14 rounded-full shadow-card-hover flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
          open ? 'bg-gray-700 rotate-12' : 'bg-[#25D366]'
        }`}
      >
        {open
          ? <X size={22} className="text-white" />
          : <MessageCircle size={24} className="text-white" />
        }
      </button>
    </div>
  )
}
