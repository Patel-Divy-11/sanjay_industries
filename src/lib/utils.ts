import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind classes safely, resolving conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Delay utility for staggered animations.
 */
export function animationDelay(index: number, base = 0.1): string {
  return `${index * base}s`
}

/**
 * Format phone number for tel: link.
 */
export function formatPhoneForLink(phone: string): string {
  return phone.replace(/\s+/g, '')
}

/**
 * Truncate text with ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '…'
}
