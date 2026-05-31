import { Metadata } from 'next'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { generateSEO } from '@/lib/seo'
import { ArrowRight, Zap } from 'lucide-react'

export const metadata: Metadata = generateSEO({
  title: 'IPTV vs Magenta TV 2026 | Vergleich',
  description: 'Direkter Vergleich: StreamDACH oder Magenta TV? Kosten, Kanäle, Qualität und Flexibilität im Test.',
  path: '/iptv-vs-magenta-tv',
})

export default function Page() {
  return (
    <section className="section-padding pt-32">
      <div className="container-tight px-4 text-center">
        <h1 className="heading-1 mb-6">IPTV vs Magenta TV</h1>
        <p className="body-large mb-8 max-w-2xl mx-auto">
          Der große Vergleich zwischen StreamDACH IPTV und Magenta TV. 
          Wir analysieren Kosten, Kanäle, Qualität und Flexibilität.
        </p>
        <div className="flex justify-center gap-4">
          <a href={BRAND.whatsappLink} target="_blank" className="btn-primary flex items-center gap-2">
            <Zap className="w-5 h-5" /> Jetzt testen
          </a>
          <Link href="/pricing" className="btn-outline flex items-center gap-2">
            Preise ansehen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}