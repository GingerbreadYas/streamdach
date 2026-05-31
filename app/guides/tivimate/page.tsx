import { Metadata } from 'next'
import { PAGE_SEO } from '@/lib/seo'
import { BRAND } from '@/lib/constants'
import { BreadcrumbSchema } from '@/lib/schema'
import Breadcrumb from '@/components/shared/Breadcrumb'
import { ArrowRight, Zap } from 'lucide-react'

export const metadata: Metadata = generateSEO({
  title: 'TiviMate IPTV Guide 2026',
  description: 'TiviMate Einrichtung und Konfiguration für StreamDACH IPTV.',
  path: '/guides/tivimate',
})

import { generateSEO } from '@/lib/seo'

export default function TiviMatePage() {
  const schema = BreadcrumbSchema([
    { name: 'Home', url: 'https://streamdach.shop/' },
    { name: 'Guides', url: 'https://streamdach.shop/guides' },
    { name: 'TiviMate', url: 'https://streamdach.shop/guides/tivimate' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container-tight px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[
          { label: 'Guides', href: '/guides' },
          { label: 'TiviMate', href: '/guides/tivimate' },
        ]} />
      </div>
      <section className="section-padding pt-12">
        <div className="container-tight px-4 text-center">
          <h1 className="heading-1 mb-6">TiviMate Guide</h1>
          <p className="body-large mb-8 max-w-2xl mx-auto">
            Vollständige TiviMate-Anleitung wird hier eingefügt. 
            Nutze die Struktur aus dem Haupt-Blueprint.
          </p>
          <a href={BRAND.whatsappLink} target="_blank" className="btn-primary flex items-center gap-2">
            <Zap className="w-5 h-5" /> Support kontaktieren
          </a>
        </div>
      </section>
    </>
  )
}