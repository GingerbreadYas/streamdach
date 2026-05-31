import { Metadata } from 'next'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { generateSEO } from '@/lib/seo'
import { ArrowRight, Zap } from 'lucide-react'

export const metadata: Metadata = generateSEO({
  title: 'IPTV München 2026 | Lokale Kanäle & Sport',
  description: 'Premium IPTV für München. Alle lokalen und internationalen Sender in HD & 4K. Jetzt auf StreamDACH!',
  path: '/iptv-munich',
})

export default function Page() {
  return (
    <section className="section-padding pt-32">
      <div className="container-tight px-4 text-center">
        <h1 className="heading-1 mb-6">IPTV München</h1>
        <p className="body-large mb-8 max-w-2xl mx-auto">
          Lokales IPTV für München mit allen regionalen und internationalen Sendern. 
          Bundesliga, Champions League, News und mehr in 4K.
        </p>
        <div className="flex justify-center gap-4">
          <a href={BRAND.whatsappLink} target="_blank" className="btn-primary flex items-center gap-2">
            <Zap className="w-5 h-5" /> Jetzt bestellen
          </a>
          <Link href="/" className="btn-outline flex items-center gap-2">
            Zurück zur Startseite <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}