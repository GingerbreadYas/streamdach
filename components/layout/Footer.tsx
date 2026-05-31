import Link from 'next/link'
import { Zap, MessageCircle, Mail, MapPin } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const footerLinks = {
  Produkt: [
    { label: 'Preise', href: '/pricing' },
    { label: 'IPTV Deutschland', href: '/iptv-germany' },
    { label: 'IPTV Österreich', href: '/iptv-austria' },
    { label: 'IPTV Schweiz', href: '/iptv-switzerland' },
  ],
  Guides: [
    { label: 'Firestick', href: '/guides/firestick' },
    { label: 'Smart TV', href: '/guides/smart-tv' },
    { label: 'Android TV', href: '/guides/android' },
    { label: 'TiviMate', href: '/guides/tivimate' },
    { label: 'Hilfe', href: '/guides/troubleshooting' },
  ],
  Unternehmen: [
    { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ],
  Rechtliches: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'AGB', href: '/agb' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-dark">
      <div className="container-tight px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-indigo-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-brand-black" />
              </div>
              <span className="text-lg font-bold">Stream<span className="text-brand-blue">DACH</span></span>
            </Link>
            <p className="text-sm text-zinc-500 mb-6 max-w-xs">
              Premium IPTV für Deutschland, Österreich und Schweiz. 15.000+ Kanäle, 4K Qualität, 99.9% Uptime.
            </p>
            <div className="space-y-3">
              <a href={BRAND.whatsappLink} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-brand-blue transition-colors">
                <MessageCircle className="w-4 h-4" />
                {BRAND.whatsapp}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-brand-blue transition-colors">
                <Mail className="w-4 h-4" />
                {BRAND.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <MapPin className="w-4 h-4" />
                DACH & Europa
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} StreamDACH. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-zinc-600">
            Premium IPTV Streaming Service für DACH
          </p>
        </div>
      </div>
    </footer>
  )
}