import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <p className="font-manrope font-bold text-8xl text-navy/10 select-none">404</p>
        <h1 className="font-poppins font-bold text-2xl text-navy mt-2 mb-3">
          Page Not Found
        </h1>
        <p className="text-text-secondary mb-8 max-w-sm mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-navy hover:bg-navy-700 text-white font-poppins font-semibold px-7 py-3.5 rounded-xl transition-all"
        >
          <ArrowLeft size={17} />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
