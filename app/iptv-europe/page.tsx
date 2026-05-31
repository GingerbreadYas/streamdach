import { Metadata } from 'next'
import Link from 'next/link'
import { PAGE_SEO } from '@/lib/seo'
import { BRAND } from '@/lib/constants'
import { BreadcrumbSchema, FAQSchema } from '@/lib/schema'
import Breadcrumb from '@/components/shared/Breadcrumb'
import FAQSection from '@/components/shared/FAQSection'
import { Globe, ArrowRight, Zap } from 'lucide-react'

export const metadata: Metadata = PAGE_SEO.europe

const europeRegions = [
  { country: '🇬🇧 UK', channels: 'BBC, ITV, Channel 4, Sky UK, BT Sport, Premier League' },
  { country: '🇫🇷 Frankreich', channels: 'TF1, France 2, Canal+, beIN Sports, RMC Sport' },
  { country: '🇮🇹 Italien', channels: 'RAI, Mediaset, Sky Italia, DAZN Italia, Serie A' },
  { country: '🇪🇸 Spanien', channels: 'TVE, Antena 3, Movistar+, La Liga, Champions League' },
  { country: '🇵🇱 Polen', channels: 'TVP, Polsat, Canal+, Eleven Sports, Ekstraklasa' },
  { country: '🇹🇷 Türkei', channels: 'TRT, ATV, Show TV, beIN Sports Turkey, Süper Lig' },
  { country: '🇳🇱 Niederlande', channels: 'NPO, RTL, Ziggo Sport, Eredivisie' },
  { country: '🇧🇪 Belgien', channels: 'VRT, RTBF, Play Sports, Jupiler Pro League' },
]

const europeFAQ = [
  { question: 'Für welche europäischen Länder ist StreamDACH verfügbar?', answer: 'StreamDACH ist in allen europäischen Ländern verfügbar: Deutschland, Österreich, Schweiz, UK, Frankreich, Italien, Spanien, Portugal, Niederlande, Belgien, Polen, Türkei, Skandinavien und viele mehr.' },
  { question: 'Kann ich StreamDACH außerhalb Europas nutzen?', answer: 'Ja, StreamDACH funktioniert weltweit. Viele Kunden nutzen unseren Service aus den USA, Kanada, Australien und dem Nahen Osten. Eine stabile Internetverbindung ist ausreichend.' },
  { question: 'Sind lokale europäische Sport-Ligen verfügbar?', answer: 'Ja. Premier League (UK), La Liga (Spanien), Serie A (Italien), Ligue 1 (Frankreich), Eredivisie (Niederlande), Süper Lig (Türkei) und viele weitere Ligen sind inklusive.' },
  { question: 'In welcher Sprache ist der Support?', answer: 'Unser Support ist auf Deutsch, Englisch und Französisch verfügbar. Bei Bedarf auch auf Spanisch und Italienisch.' },
]

export default function IPTVEuropePage() {
  const schemas = [
    BreadcrumbSchema([
      { name: 'Home', url: 'https://streamdach.shop/' },
      { name: 'IPTV Europa', url: 'https://streamdach.shop/iptv-europe' },
    ]),
    FAQSchema(europeFAQ),
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="container-tight px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: 'IPTV Europa', href: '/iptv-europe' }]} />
      </div>

      <section className="section-padding pt-12">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-brand-blue" />
              <span className="text-sm text-zinc-300">Europaweite Abdeckung</span>
            </div>
            <h1 className="heading-1 mb-6">
              IPTV Europa <span className="text-gradient">2026</span>
            </h1>
            <p className="body-large mb-8">
              Premium IPTV für ganz Europa. 15.000+ internationale Kanäle aus UK, Frankreich, 
              Italien, Spanien, Polen, Türkei und mehr. 4K Streaming europaweit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={BRAND.whatsappLink} target="_blank" className="btn-primary flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Europaweit bestellen
              </a>
              <Link href="/pricing" className="btn-outline flex items-center gap-2">
                Preise ansehen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {europeRegions.map((region) => (
              <div key={region.country} className="glass-card p-6">
                <div className="text-2xl mb-3">{region.country}</div>
                <p className="text-sm text-zinc-400">{region.channels}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={europeFAQ} title="IPTV Europa FAQ" />
    </>
  )
}