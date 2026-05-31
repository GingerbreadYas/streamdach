import { Metadata } from 'next'
import Link from 'next/link'
import { PAGE_SEO } from '@/lib/seo'
import { BRAND } from '@/lib/constants'
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from '@/lib/schema'
import Breadcrumb from '@/components/shared/Breadcrumb'
import FAQSection from '@/components/shared/FAQSection'
import { MapPin, Tv, CheckCircle, ArrowRight, Zap, Globe } from 'lucide-react'

export const metadata: Metadata = PAGE_SEO.switzerland

const swissChannels = [
  { category: 'SRG SSR', channels: 'SRF 1, SRF 2, SRF info, RTS Un, RTS Deux, RSI La 1, RSI La 2, RTR' },
  { category: 'Privat & Regional', channels: '3+, 4+, 5+, 6+, TV25, TeleZüri, TeleBärn, TeleBasel, TeleM1, TeleTop' },
  { category: 'Deutsch & International', channels: 'ARD, ZDF, RTL, SAT.1, ProSieben, ORF, BBC, CNN, France 24, Rai' },
  { category: 'Sport', channels: 'Sky Sport, DAZN, Eurosport, Sport1, MySports, Teleclub' },
]

const swissFAQ = [
  { question: 'Welche Schweizer Sender sind bei StreamDACH verfügbar?', answer: 'Alle SRG SSR Sender: SRF 1, SRF 2, SRF info, RTS Un, RTS Deux, RSI La 1, RSI La 2. Zusätzlich 3+, 4+, 5+, 6+, TeleZüri, TeleBärn und alle regionalen Sender.' },
  { question: 'Funktioniert StreamDACH in der Schweiz mit Swisscom, Sunrise oder Salt?', answer: 'Ja. StreamDACH ist unabhängig vom Internetanbieter. Es funktioniert mit Swisscom, Sunrise, Salt, Init7 und allen anderen Schweizer ISPs. Du benötigst nur eine stabile Internetverbindung.' },
  { question: 'Kann ich StreamDACH in Zürich, Genf, Basel und Bern nutzen?', answer: 'Ja, StreamDACH funktioniert in allen Schweizer Städten und Kantonen: Zürich, Genf, Basel, Bern, Lausanne, Luzern und ländliche Regionen.' },
  { question: 'Gibt es Schweizer Sport mit StreamDACH?', answer: 'Ja. Super League, Challenge League, Schweizer Eishockey, Ski alpin und alle internationalen Sport-Events über Sky Sport, DAZN und Eurosport.' },
  { question: 'Welche Internetgeschwindigkeit brauche ich in der Schweiz?', answer: 'Für HD mindestens 16 Mbit/s, für 4K mindestens 25 Mbit/s. Die meisten Schweizer Glasfaser- und Kabelanschlüsse übertreffen diese Anforderungen deutlich.' },
  { question: 'Ist IPTV in der Schweiz legal?', answer: 'Die Schweiz hat spezifische Gesetze zum Urheberrecht. StreamDACH ist ein technischer Dienst. Wir empfehlen, sich über die schweizerischen Bestimmungen zu informieren.' },
]

const relatedLinks = [
  { title: 'IPTV Zürich', href: '/iptv-zurich', desc: 'Lokales IPTV für Zürich und Umgebung' },
  { title: 'IPTV vs Zattoo', href: '/iptv-vs-zattoo', desc: 'StreamDACH oder Zattoo Schweiz?' },
  { title: 'IPTV auf Smart TV', href: '/guides/smart-tv', desc: 'Setup für Schweizer Fernseher' },
]

export default function IPTVSwitzerlandPage() {
  const schemas = [
    LocalBusinessSchema('CH'),
    BreadcrumbSchema([
      { name: 'Home', url: 'https://streamdach.shop/' },
      { name: 'IPTV Schweiz', url: 'https://streamdach.shop/iptv-switzerland' },
    ]),
    FAQSchema(swissFAQ),
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="container-tight px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: 'IPTV Schweiz', href: '/iptv-switzerland' }]} />
      </div>

      <section className="section-padding pt-12">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-brand-blue" />
              <span className="text-sm text-zinc-300">Schweizweite Abdeckung</span>
            </div>
            <h1 className="heading-1 mb-6">
              IPTV Schweiz <span className="text-gradient">2026</span>
            </h1>
            <p className="body-large mb-8">
              Premium IPTV für die Schweiz: SRF, RTS, RSI, 3+, TeleZüri und 15.000+ Kanäle. 
              Für Zürich, Genf, Basel, Bern und alle Kantone.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={BRAND.whatsappLink} target="_blank" className="btn-primary flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Jetzt in der Schweiz bestellen
              </a>
              <Link href="/pricing" className="btn-outline flex items-center gap-2">
                Preise ansehen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="heading-2 text-center mb-12">Schweizer Kanäle</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {swissChannels.map((cat) => (
                <div key={cat.category} className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Tv className="w-5 h-5 text-brand-blue" />
                    <h3 className="font-semibold text-white">{cat.category}</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{cat.channels}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 mb-24">
            <h2 className="heading-2 mb-6">Warum StreamDACH in der Schweiz?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                'Alle SRF, RTS & RSI Sender',
                '3+, 4+, 5+, 6+ inklusive',
                'TeleZüri, TeleBärn & Regional-TV',
                'Sky Sport & DAZN für Sportfans',
                'MySports für Schweizer Sport',
                'Optimiert für Schweizer Internet',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-blue shrink-0" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="heading-2 text-center mb-8">Weiterführende Artikel</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="glass-card-hover p-6 group">
                  <Globe className="w-6 h-6 text-brand-blue mb-3" />
                  <h3 className="font-semibold text-white group-hover:text-brand-blue transition-colors mb-1">{link.title}</h3>
                  <p className="text-sm text-zinc-400">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={swissFAQ} title="IPTV Schweiz FAQ" />
    </>
  )
}