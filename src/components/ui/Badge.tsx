import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'navy' | 'gold' | 'green' | 'gray'
  className?: string
}

export default function Badge({ children, variant = 'navy', className }: BadgeProps) {
  const variants = {
    navy: 'bg-navy-100 text-navy-800',
    gold: 'bg-gold-100 text-gold-800',
    green: 'bg-green-100 text-green-800',
    gray: 'bg-gray-100 text-gray-700',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-poppins tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
