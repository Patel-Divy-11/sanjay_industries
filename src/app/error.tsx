'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Phone } from 'lucide-react'
import { company } from '@/data/company'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  const PHONE_LINK = `tel:${company.contact.phone.replace(/\s/g, '')}`

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={30} className="text-red-500" />
        </div>
        <h1 className="font-poppins font-bold text-2xl text-navy mb-3">
          Something went wrong
        </h1>
        <p className="text-text-secondary mb-8 leading-relaxed">
          We encountered an unexpected error. You can try again, or contact us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-700 text-white font-poppins font-semibold px-6 py-3.5 rounded-xl transition-all"
          >
            <RefreshCw size={16} />
            Try Again
          </button>
          <a
            href={PHONE_LINK}
            className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-poppins font-semibold px-6 py-3.5 rounded-xl transition-all"
          >
            <Phone size={16} />
            Call Us
          </a>
        </div>
      </div>
    </div>
  )
}
