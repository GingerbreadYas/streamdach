import { Metadata } from 'next'
import Link from 'next/link'
import { PAGE_SEO } from '@/lib/seo'
import { BRAND } from '@/lib/constants'
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from '@/lib/schema'
import Breadcrumb from '@/components/shared/Breadcrumb'
import FAQSection from '@/components/shared/FAQSection'
import { MapPin, Tv, CheckCircle, ArrowRight, Zap, Globe } from 'lucide-react'

export const metadata: Metadata = PAGE_SEO.austria

const austrianChannels = [
  { category: 'ORF & Publikum', channels: 'ORF 1, ORF 2, ORF III, ORF Sport +, ORF 2 Europe, 3sat, arte' },
  { category: 'Privat & Regional', channels: 'ATV, ATV II, Puls 4, Puls 24, ServusTV, OKTO, W24, Vienna' },
  { category: 'Sport', channels: 'Sky Sport Austria, DAZN, Eurosport, Sport1, Sport1+, ServusTV Sport' },
  { category: 'Deutsche Kanäle', channels: 'ARD, ZDF, RTL, SAT.1, ProSieben, VOX, alle Sky-Kanäle' },
  { category: 'International', channels: 'BBC, CNN, CNBC, France 24, Rai, TVE, TRT, TVP' },
]

const austriaFAQ = [
  { question: 'Welche österreichischen Sender sind inklusive?', answer: 'Alle wichtigen österreichischen Sender: ORF 1, ORF 2, ORF III, ORF Sport +, ATV, Puls 4, ServusTV, W24 und OKTO. Zusätzlich alle deutschen und internationalen Sender.' },
  { question: 'Funktioniert StreamDACH in Wien, Graz, Linz und Salzburg?', answer: 'Ja, StreamDACH funktioniert in ganz Österreich — von Wien über Graz, Linz, Salzburg, Innsbruck bis zu ländlichen Regionen. Du benötigst nur eine stabile Internetverbindung.' },
  { question: 'Kann ich Bundesliga und Champions League in Österreich schauen?', answer: 'Ja. Mit StreamDACH hast du Zugriff auf Sky Sport Austria, DAZN und Eurosport. Alle Spiele der Bundesliga, Champions League, Europa League und österreichische Bundesliga sind inklusive.' },
  { question: 'Gibt es ORF mit StreamDACH?', answer: 'Ja, ORF 1, ORF 2, ORF III und ORF Sport + sind in HD und teilweise 4K verfügbar. Inklusive Zeitversetzung und regionalen Varianten.' },
  { question: 'Welche Internetgeschwindigkeit brauche ich in Österreich?', answer: 'Für HD-Streaming mindestens 16 Mbit/s, für 4K mindestens 25 Mbit/s. Die meisten österreichischen Internetanschlüsse (A1, Magenta, Drei) sind hierfür ausreichend.' },
  { question: 'Ist IPTV in Österreich erlaubt?', answer: 'Die rechtliche Situation ist komplex. StreamDACH ist ein technischer Dienst. Wir empfehlen, sich über die österreichischen Gesetze zu informieren und nur legale Inhalte zu nutzen.' },
]

const relatedLinks = [
  { title: 'IPTV Wien', href: '/iptv-vienna', desc: 'Premium IPTV speziell für Wien mit lokalen Kanälen' },
  { title: 'IPTV auf Firestick', href: '/guides/firestick', desc: 'Beliebt bei österreichischen Nutzern' },
  { title: 'IPTV vs Magenta TV', href: '/iptv-vs-magenta-tv', desc: 'StreamDACH oder Magenta TV Austria?' },
]

export default function IPTVAustriaPage() {
  const schemas = [
    LocalBusinessSchema('AT'),
    BreadcrumbSchema([
      { name: 'Home', url: 'https://streamdach.shop/' },
      { name: 'IPTV Österreich', url: 'https://streamdach.shop/iptv-austria' },
    ]),
    FAQSchema(austriaFAQ),
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="container-tight px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: 'IPTV Österreich', href: '/iptv-austria' }]} />
      </div>

      <section className="section-padding pt-12">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-brand-blue" />
              <span className="text-sm text-zinc-300">Österreichweite Abdeckung</span>
            </div>
            <h1 className="heading-1 mb-6">
              IPTV Österreich <span className="text-gradient">2026</span>
            </h1>
            <p className="body-large mb-8">
              Premium IPTV für Österreich: ORF, ServusTV, Puls 4, Sky Austria, DAZN und 
              15.000+ weitere Kanäle. Für Wien, Graz, Linz, Salzburg und ganz Österreich.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={BRAND.whatsappLink} target="_blank" className="btn-primary flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Jetzt in Österreich bestellen
              </a>
              <Link href="/pricing" className="btn-outline flex items-center gap-2">
                Preise ansehen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="heading-2 text-center mb-12">Österreichische Kanäle</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {austrianChannels.map((cat) => (
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
            <h2 className="heading-2 mb-6">Warum StreamDACH in Österreich?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                'Alle ORF-Sender in HD & 4K',
                'Sky Austria & DAZN inklusive',
                'Österreichische Bundesliga live',
                'ServusTV & Puls 4',
                'Deutsche Sender inklusive',
                'Lokale Server für beste Performance',
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

      <FAQSection items={austriaFAQ} title="IPTV Österreich FAQ" />
    </>
  )
}