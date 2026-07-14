'use client'

import { cn } from '@/lib/utils'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-poppins font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

    const variants = {
      primary:
        'bg-navy text-white hover:bg-navy-700 active:bg-navy-900',
      secondary:
        'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white',
      outline:
        'border-2 border-white text-white hover:bg-white hover:text-navy',
      ghost:
        'text-navy hover:bg-navy-50 hover:text-navy-800',
      gold:
        'bg-gold text-navy-900 hover:bg-gold-600 active:bg-gold-700 font-bold',
    }

    const sizes = {
      sm: 'text-sm px-4 py-2.5',
      md: 'text-base px-6 py-3',
      lg: 'text-lg px-8 py-4',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
