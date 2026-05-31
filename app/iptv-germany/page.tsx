import { Metadata } from 'next'
import Link from 'next/link'
import { PAGE_SEO } from '@/lib/seo'
import { BRAND } from '@/lib/constants'
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from '@/lib/schema'
import Breadcrumb from '@/components/shared/Breadcrumb'
import FAQSection from '@/components/shared/FAQSection'
import { Tv, MapPin, Trophy, Play, ArrowRight, CheckCircle, Zap, Globe } from 'lucide-react'

export const metadata: Metadata = PAGE_SEO.germany

const germanChannels = [
  { category: 'Öffentlich-Rechtlich', channels: 'ARD, ZDF, arte, 3sat, Phoenix, tagesschau24, ZDFinfo, ZDFneo, One, BR, HR, MDR, NDR, RB, RBB, SR, SWR, WDR' },
  { category: 'Privat', channels: 'RTL, SAT.1, ProSieben, kabel eins, VOX, RTL II, Super RTL, NITRO, sixx, ProSieben MAXX, kabel eins Doku, SAT.1 Gold, TLC, DMAX, Tele 5' },
  { category: 'Sport', channels: 'Sky Sport Bundesliga, Sky Sport 1-11, DAZN 1-2, Eurosport 1-2, Sport1, Sport1+, Magenta Sport, WWE Network, NFL Network' },
  { category: 'Sky & PayTV', channels: 'Sky Atlantic, Sky Cinema, Sky Krimi, Sky Comedy, Sky Nature, Sky Documentaries, Sky History, 13th Street, Syfy, Universal TV' },
  { category: 'Regional', channels: 'NDR Hamburg, BR Bayern, WDR Köln, RBB Berlin, MDR Sachsen, hr-fernsehen, SWR Baden-Württemberg' },
  { category: 'International', channels: 'BBC, CNN, CNBC, Bloomberg, France 24, Al Jazeera, TRT, TVP, RAI, TVE' },
]

const germanFAQ = [
  { question: 'Welche deutschen Kanäle sind bei StreamDACH verfügbar?', answer: 'StreamDACH bietet alle wichtigen deutschen Sender: ARD, ZDF, RTL, SAT.1, ProSieben, alle Sky-Kanäle, DAZN, Eurosport und über 200 weitere deutsche Sender in HD und 4K.' },
  { question: 'Kann ich Bundesliga und Champions League in Deutschland schauen?', answer: 'Ja. Mit StreamDACH hast du Zugriff auf Sky Sport Bundesliga, DAZN, Eurosport und weitere Sport-Sender. Alle Bundesliga-Spiele, Champions League, DFB-Pokal und internationale Ligen sind inklusive.' },
  { question: 'Funktioniert StreamDACH in Berlin, München und Hamburg?', answer: 'Ja, StreamDACH funktioniert deutschlandweit. Egal ob Berlin, München, Hamburg, Köln oder ländliche Regionen — solange du eine stabile Internetverbindung hast, streamst du in 4K.' },
  { question: 'Ist IPTV in Deutschland legal?', answer: 'Die rechtliche Situation von IPTV in Deutschland ist komplex. StreamDACH ist ein technischer Streaming-Service. Wir empfehlen, sich über die aktuellen Gesetze zu informieren und nur legale Inhalte zu konsumieren.' },
  { question: 'Welche Internetgeschwindigkeit brauche ich in Deutschland?', answer: 'Für HD-Streaming empfehlen wir mindestens 16 Mbit/s, für 4K-Streaming mindestens 25 Mbit/s. Die meisten deutschen DSL- und Kabelanschlüsse sind hierfür ausreichend.' },
  { question: 'Kann ich StreamDACH auf meinem Samsung oder LG Smart TV in Deutschland nutzen?', answer: 'Ja. StreamDACH unterstützt Samsung Tizen TVs, LG WebOS TVs und alle Android-basierten Smart TVs. Wir bieten detaillierte Setup-Anleitungen für jedes Modell.' },
]

const relatedLinks = [
  { title: 'IPTV auf Firestick installieren', href: '/guides/firestick', desc: 'Perfekt für Amazon Fire TV Stick Nutzer in Deutschland' },
  { title: 'IPTV auf Smart TV', href: '/guides/smart-tv', desc: 'Samsung, LG & Sony Setup für deutsche Fernseher' },
  { title: 'IPTV vs Sky Deutschland', href: '/iptv-vs-sky-deutschland', desc: 'Vergleich: StreamDACH oder Sky?' },
  { title: 'IPTV vs DAZN', href: '/iptv-vs-dazn', desc: 'Sport-Streaming im Vergleich' },
]

export default function IPTVGermanyPage() {
  const schemas = [
    LocalBusinessSchema('DE'),
    BreadcrumbSchema([
      { name: 'Home', url: 'https://streamdach.shop/' },
      { name: 'IPTV Deutschland', url: 'https://streamdach.shop/iptv-germany' },
    ]),
    FAQSchema(germanFAQ),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <div className="container-tight px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: 'IPTV Deutschland', href: '/iptv-germany' }]} />
      </div>

      <section className="section-padding pt-12">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-brand-blue" />
              <span className="text-sm text-zinc-300">Deutschlandweite Abdeckung</span>
            </div>
            <h1 className="heading-1 mb-6">
              IPTV Deutschland <span className="text-gradient">2026</span>
            </h1>
            <p className="body-large mb-8">
              Das beste IPTV für Deutschland mit allen deutschen Sendern, Sky, DAZN, 
              Bundesliga und Champions League in 4K. Über 15.000 Kanäle für Berlin, München, 
              Hamburg und ganz Deutschland.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={BRAND.whatsappLink} target="_blank" className="btn-primary flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Jetzt in Deutschland bestellen
              </a>
              <Link href="/pricing" className="btn-outline flex items-center gap-2">
                Preise ansehen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="heading-2 text-center mb-12">Deutsche Kanäle bei StreamDACH</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {germanChannels.map((cat) => (
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

          <div className="glass-card p-8 md:p-12 mb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-glow-blue opacity-10" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-6 h-6 text-brand-blue" />
                  <span className="text-brand-blue font-semibold">Sport-Streaming</span>
                </div>
                <h2 className="heading-2 mb-6">Bundesliga, Champions League & mehr</h2>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Verpasse kein Spiel mehr. Mit StreamDACH hast du Zugriff auf Sky Sport Bundesliga, 
                  DAZN, Eurosport und alle wichtigen Sport-Sender. Alle Spiele der Bundesliga, 
                  2. Bundesliga, Champions League, Europa League, DFB-Pokal und internationale 
                  Top-Ligen live und in 4K.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Alle Bundesliga-Spiele live',
                    'Champions League & Europa League',
                    'DFB-Pokal & DFL-Supercup',
                    'Premier League, La Liga, Serie A',
                    'NFL, NBA, NHL, Formel 1',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-brand-blue shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={BRAND.whatsappLink} target="_blank" className="btn-primary inline-flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Sport-Paket bestellen
                </a>
              </div>
              <div className="glass-card p-6 space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">DAZN</div>
                    <div>
                      <div className="font-medium text-white">DAZN 1 & 2</div>
                      <div className="text-xs text-zinc-500">Champions League, Bundesliga</div>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">Sky</div>
                    <div>
                      <div className="font-medium text-white">Sky Sport Bundesliga</div>
                      <div className="text-xs text-zinc-500">Alle Bundesliga-Spiele</div>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold text-xs">EU</div>
                    <div>
                      <div className="font-medium text-white">Eurosport 1 & 2</div>
                      <div className="text-xs text-zinc-500">Tennis, Radsport, Wintersport</div>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="heading-2 text-center mb-12">IPTV in deiner Stadt</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { city: 'Berlin', href: '/iptv-berlin' },
                { city: 'München', href: '/iptv-munich' },
                { city: 'Hamburg', href: '/iptv-hamburg' },
                { city: 'Köln', href: '/iptv-koeln' },
                { city: 'Frankfurt', href: '/iptv-frankfurt' },
                { city: 'Stuttgart', href: '/iptv-stuttgart' },
                { city: 'Düsseldorf', href: '/iptv-duesseldorf' },
                { city: 'Dresden', href: '/iptv-dresden' },
              ].map((item) => (
                <Link
                  key={item.city}
                  href={item.href}
                  className="glass-card-hover p-6 text-center group"
                >
                  <MapPin className="w-5 h-5 text-brand-blue mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-white">IPTV {item.city}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="heading-2 text-center mb-8">Weiterführende Artikel</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="glass-card-hover p-6 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-brand-blue transition-colors mb-1">
                      {link.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={germanFAQ} title="IPTV Deutschland FAQ" />
    </>
  )
}