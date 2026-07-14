import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className,
}: SectionHeadingProps) {
  const isDark = theme === 'dark'

  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-block text-sm font-semibold font-poppins tracking-widest uppercase mb-3',
            isDark ? 'text-gold-400' : 'text-gold-600'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-poppins font-bold leading-tight mb-4',
          'text-h2',
          isDark ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg leading-relaxed max-w-2xl',
            align === 'center' && 'mx-auto',
            isDark ? 'text-slate-300' : 'text-text-secondary'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
