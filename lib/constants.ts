export const BRAND = {
  name: 'StreamDACH',
  tagline: 'Premium IPTV für Deutschland, Österreich & Schweiz',
  whatsapp: '+33756757598',
  whatsappLink: 'https://wa.me/33756757598?text=Hallo%20StreamDACH%2C%20ich%20interessiere%20mich%20für%20IPTV',
  email: 'support@streamdach.shop',
  url: 'https://streamdach.shop',
  founded: '2024',
  social: {
    telegram: 'https://t.me/streamdach',
  }
} as const

export const PRICING = [
  {
    id: '1m',
    name: '1 Monat',
    price: '14.99',
    period: 'monatlich',
    popular: false,
    features: ['15.000+ Live Kanäle', '80.000+ VOD', 'Full HD & 4K', 'Anti-Freeze', 'Alle Geräte', '24/7 Support'],
  },
  {
    id: '3m',
    name: '3 Monate',
    price: '28.99',
    period: 'alle 3 Monate',
    popular: false,
    features: ['15.000+ Live Kanäle', '80.000+ VOD', 'Full HD & 4K', 'Anti-Freeze', 'Alle Geräte', '24/7 Support'],
  },
  {
    id: '6m',
    name: '6 Monate',
    price: '38.99',
    period: 'alle 6 Monate',
    popular: true,
    features: ['15.000+ Live Kanäle', '80.000+ VOD', 'Full HD & 4K', 'Anti-Freeze', 'Alle Geräte', '24/7 Support', 'EPG Guide'],
  },
  {
    id: '12m',
    name: '12 + 1 Monat',
    price: '54.99',
    period: 'jährlich',
    popular: false,
    features: ['15.000+ Live Kanäle', '80.000+ VOD', 'Full HD & 4K', 'Anti-Freeze', 'Alle Geräte', '24/7 Support', 'EPG Guide', 'Catch-Up TV'],
  },
] as const

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Preise' },
  { 
    label: 'IPTV Länder',
    children: [
      { href: '/iptv-germany', label: 'IPTV Deutschland' },
      { href: '/iptv-austria', label: 'IPTV Österreich' },
      { href: '/iptv-switzerland', label: 'IPTV Schweiz' },
      { href: '/iptv-europe', label: 'IPTV Europa' },
    ]
  },
  { 
    label: 'Guides',
    children: [
      { href: '/guides/firestick', label: 'Firestick' },
      { href: '/guides/smart-tv', label: 'Smart TV' },
      { href: '/guides/android', label: 'Android TV' },
      { href: '/guides/tivimate', label: 'TiviMate' },
      { href: '/guides/troubleshooting', label: 'Hilfe & FAQ' },
    ]
  },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Kontakt' },
] as const

export const TRUST_BADGES = [
  { icon: 'Shield', label: 'Sichere Zahlung', sub: 'SSL Verschlüsselt' },
  { icon: 'Zap', label: 'Sofortige Aktivierung', sub: '< 5 Minuten' },
  { icon: 'Headphones', label: '24/7 Support', sub: 'WhatsApp & Telegram' },
  { icon: 'RotateCcw', label: '99.9% Uptime', sub: 'Stabile Server' },
] as const