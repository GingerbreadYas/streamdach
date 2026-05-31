import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: string) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(parseFloat(price))
}

export function generateWhatsAppLink(message?: string) {
  const base = 'https://wa.me/33756757598'
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}