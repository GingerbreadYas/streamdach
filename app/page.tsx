import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { 
  Play, Tv, Film, Trophy, Monitor, Globe, 
  Gamepad2, ArrowRight, Star, Users, Clock, Award, MessageCircle
} from 'lucide-react'
import { PAGE_SEO } from '@/lib/seo'
import { PRICING, BRAND } from '@/lib/constants'
import PricingCard from '@/components/shared/PricingCard'
import FAQSection from '@/components/shared/FAQSection'
import TrustIndicators from '@/components/shared/TrustIndicators'

export const metadata: Metadata = PAGE_SEO.home

// SEO Optimized Features (Targeting Low-Comp Keywords)
const features = [
  { icon: Tv, title: '15.000+ Live Kanäle', desc: 'Stabiles IPTV Abo für deutsche, österreichische und Schweizer Sender in HD & 4K ohne Aussetzer.' },
  { icon: Film, title: '80.000+ VOD Filme & Serien', desc: 'Riesige Mediathek inklusive aktueller Blockbuster, Serien und Dokus über M3U oder Portal abrufbar.' },
  { icon: Trophy, title: 'Live Sport & Bundesliga', desc: 'Kein Spiel verpassen: Bundesliga, Champions League und Motorsport flüssig streamen.' },
  { icon: Monitor, title: 'Alle IPTV Geräte', desc: 'Kompatibel mit Smart TV (Samsung, LG), Fire TV Stick, Android Box, Apple TV und Enigma2.' },
  { icon: Globe, title: 'EPG & 7-Tage Catch-Up', desc: 'Integrierter elektronischer Programmführer (EPG) und Replay-Funktion für verpasste Sendungen.' },
  { icon: Gamepad2, title: 'Anti-Freeze Technologie', desc: 'Hochleistungsserver garantieren 99.9% Uptime für ein Premium IPTV Erlebnis ohne Buffering.' },
]

const devices = [
  { name: 'Fire TV Stick', icon: '🔥', desc: 'Einfaches Setup via Downloader App' },
  { name: 'Smart TV', icon: '📺', desc: 'Samsung, LG, Sony (Smart IPTV, IBO)' },
  { name: 'Android', icon: '🤖', desc: 'Android TV Box & Smartphones' },
  { name: 'Apple', icon: '🍎', desc: 'iOS, iPadOS & Apple TV (GSE, Smarters)' },
  { name: 'Windows', icon: '💻', desc: 'VLC Player & Windows IPTV Apps' },
  { name: 'MAG Box', icon: '📡', desc: 'Stalker Portal & Enigma2 Receiver' },
]

const testimonials = [
  { name: 'Markus K.', location: 'München', text: 'Endlich stabiles IPTV für Bundesliga. Kein Freezing mehr, Bildqualität ist top! Beste Alternative zu Kabel.', rating: 5 },
  { name: 'Sarah W.', location: 'Wien', text: 'ORF und alle deutschen Sender perfekt. Der Support antwortet innerhalb Minuten auf WhatsApp.', rating: 5 },
  { name: 'Thomas B.', location: 'Zürich', text: 'SRF und RTS laufen einwandfrei. 12+1 Monate Abo ist unschlagbar im Preis.', rating: 5 },
  { name: 'Lisa M.', location: 'Berlin', text: 'Firestick Setup war super einfach mit der Anleitung. M3U Playlist laden und los gehts.', rating: 5 },
]

const homeFAQ = [
  { question: 'Was ist StreamDACH IPTV?', answer: 'StreamDACH ist ein Premium IPTV-Anbieter speziell für Deutschland, Österreich und die Schweiz. Wir bieten über 15.000 Live-TV-Kanäle und 80.000 Video-on-Demand-Inhalte in flüssiger HD und 4K Qualität.' },
  { question: 'Ist IPTV bei StreamDACH legal?', answer: 'StreamDACH ist ein technischer Streaming-Service. Die rechtliche Nutzung hängt von den lokalen Gesetzen des Nutzers ab. Wir empfehlen, sich über die geltenden Regelungen im jeweiligen Land zu informieren.' },
  { question: 'Wie richte ich IPTV auf dem Fire TV Stick oder Smart TV ein?', answer: 'Das Setup ist sehr einfach. Wir senden Ihnen eine Schritt-für-Schritt Anleitung für Apps wie IPTV Smarters Pro, IBO Player oder Flix IPTV. Sie können sich via XTREAM Codes, Stalker Portal oder M3U-Link verbinden.' },
  { question: 'Wie lange dauert die IPTV Aktivierung?', answer: 'Die Aktivierung Ihres Zugangs erfolgt in der Regel innerhalb von 5 Minuten nach Zahlungseingang. Sie erhalten Ihre Zugangsdaten direkt per E-Mail oder WhatsApp.' },
  { question: 'Was benötige ich für ruckelfreies IPTV?', answer: 'Sie benötigen eine stabile Internetverbindung (mindestens 16 Mbit/s für HD, 25 Mbit/s für 4K), ein kompatibles Endgerät und unsere Serverdaten.' },
  { question: 'Wie kann ich mein IPTV Abo bezahlen?', answer: 'Wir akzeptieren sichere Zahlungsmethoden wie PayPal, Kreditkarte, Banküberweisung und Kryptowährungen. Alle Zahlungen werden SSL-verschlüsselt abgewickelt.' },
]

// Generate JSON-LD for Google Rich Results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homeFAQ.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

export default function HomePage() {
  return (
    <>
      {/* Inject Structured Data into the <head> */}
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-glow-blue opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />

        <div className="container-tight px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-sm text-zinc-300">Premium IPTV Anbieter für DACH & Europa</span>
            </div>

            <h1 className="heading-1 mb-6">
              Das beste IPTV für{' '}
              <span className="text-gradient">Deutschland, Österreich & Schweiz</span>
            </h1>

            <p className="body-large max-w-2xl mx-auto mb-10">
              Stabiles IPTV Abo kaufen: 15.000+ Live-Kanäle • 80.000+ VOD • Bundesliga & Champions League in 4K • 
              Anti-Freeze Technologie • Sofortige Aktivierung
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg flex items-center gap-2">
                <Play className="w-5 h-5" />
                Zugang über WhatsApp anfragen
              </a>
              <Link href="/pricing" className="btn-outline text-lg flex items-center gap-2">
                IPTV Tarife ansehen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <TrustIndicators />
          </header>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-brand-black/50 backdrop-blur-sm">
          <div className="container-tight px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Users, value: '50.000+', label: 'Aktive Nutzer' },
                { icon: Star, value: '4.9/5', label: 'Kundenbewertung' },
                { icon: Clock, value: '99.9%', label: 'Server Uptime' },
                { icon: Award, value: '15.000+', label: 'Live Kanäle' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-brand-blue" aria-hidden="true" />
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-dark/50">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Warum StreamDACH als Ihr IPTV Anbieter?</h2>
            <p className="body-large max-w-2xl mx-auto">
              Premium Streaming-Erlebnis mit technologischem Vorsprung für den DACH-Raum. Ohne Aussetzer, ohne Pufferung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <article key={feature.title} className="glass-card-hover p-8">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-brand-blue" aria-hidden="true" />
                </div>
                <h3 className="heading-3 mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">IPTV einrichten auf allen Geräten</h2>
            <p className="body-large">Egal ob Fernseher, Handy oder Streaming-Stick — unsere IPTV M3U & Portale laufen überall</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {devices.map((device) => (
              <Link
                key={device.name}
                href={`/guides/${device.name.toLowerCase().replace(/ /g, '-')}`}
                className="glass-card-hover p-6 text-center group"
                title={`IPTV auf ${device.name} einrichten`}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform" aria-hidden="true">{device.icon}</div>
                <div className="font-medium text-white text-sm mb-1">{device.name}</div>
                <div className="text-xs text-zinc-500">{device.desc}</div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/guides" className="text-brand-blue hover:text-white transition-colors inline-flex items-center gap-2">
              Alle IPTV Setup-Guides ansehen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-dark/50" id="pricing">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Transparente IPTV Preise, keine versteckten Kosten</h2>
            <p className="body-large">Wähle dein Paket. Jederzeit kündbar. Sofortige Aktivierung via WhatsApp.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {PRICING.map((plan, i) => (
              <PricingCard key={plan.id} {...plan} index={i} />
            ))}
          </div>

          <div className="text-center mt-8 text-sm text-zinc-500">
            * Alle Preise inkl. MwSt. Zahlung per PayPal, Kreditkarte oder Krypto.
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Erfahrungen unserer Kunden</h2>
            <p className="body-large">Über 2.800 zufriedene Nutzer im DACH-Raum vertrauen unserem Service</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <article key={i} className="glass-card p-6">
                <div className="flex gap-1 mb-4" aria-label={`Bewertung: ${t.rating} von 5 Sternen`}>
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-blue text-brand-blue" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm mb-4 leading-relaxed">"{t.text}"</p>
                <div className="text-sm">
                  <span className="text-white font-medium">{t.name}</span>
                  <span className="text-zinc-500"> • {t.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-dark/50">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">IPTV Sender für dein Land</h2>
            <p className="body-large">Lokale Kanäle, DACH Support, ausfallsichere Server</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { country: 'Deutschland', href: '/iptv-germany', flag: '🇩🇪', channels: 'ARD, ZDF, Sky, DAZN, RTL, ProSieben' },
              { country: 'Österreich', href: '/iptv-austria', flag: '🇦🇹', channels: 'ORF, ServusTV, Puls 4, Sky AT, ATV' },
              { country: 'Schweiz', href: '/iptv-switzerland', flag: '🇨🇭', channels: 'SRF, RTS, RSI, 3+, TeleZüri' },
            ].map((item) => (
              <Link
                key={item.country}
                href={item.href}
                className="glass-card-hover p-8 text-center group"
                title={`IPTV Kanäle für ${item.country}`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.flag}</div>
                <h3 className="heading-3 mb-2">IPTV {item.country}</h3>
                <p className="text-sm text-zinc-400">{item.channels}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={homeFAQ} />

      <section className="section-padding">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-glow-blue opacity-20" />
            <div className="relative z-10">
              <h2 className="heading-2 mb-6">Bereit für ein Premium IPTV Erlebnis?</h2>
              <p className="body-large max-w-2xl mx-auto mb-8">
                Schreib uns auf WhatsApp, lade die M3U Playlist oder melde dich im Portal an und erhalte innerhalb von 5 Minuten deinen Zugang. 
                Teste deuiptv.shop risikofrei.
              </p>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Jetzt auf WhatsApp schreiben
              </a>
              <p className="mt-4 text-sm text-zinc-500">Antwort innerhalb von Minuten garantiert</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}