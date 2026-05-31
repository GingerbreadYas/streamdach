import { Metadata } from 'next'
import { PAGE_SEO } from '@/lib/seo'
import { BRAND } from '@/lib/constants'
import { BreadcrumbSchema, HowToSchema, FAQSchema } from '@/lib/schema'
import Breadcrumb from '@/components/shared/Breadcrumb'
import FAQSection from '@/components/shared/FAQSection'

export const metadata: Metadata = PAGE_SEO.firestick

const steps = [
  'Gehe auf deinem Fire TV Stick zu "Einstellungen" > "Mein Fire TV" > "Entwickleroptionen" und aktiviere "Apps aus unbekannten Quellen".',
  'Suche im Amazon App Store nach "Downloader" und installiere die App.',
  'Öffne Downloader und gib die URL für IPTV Smarters Pro ein (oder unsere bereitgestellte Download-URL).',
  'Installiere IPTV Smarters Pro und öffne die App.',
  'Gib deine StreamDACH Zugangsdaten ein: Username, Password und Server-URL (erhältst du nach Bestellung).',
  'Warte, bis die Kanäle und VOD geladen sind. Das kann bei der ersten Einrichtung 1-2 Minuten dauern.',
  'Wähle deinen Lieblingssender und starte das Streaming in HD oder 4K.',
]

const firestickFAQ = [
  { question: 'Brauche ich einen Fire TV Stick 4K?', answer: 'Ein Fire TV Stick 4K oder Fire TV Stick 4K Max wird empfohlen für beste Performance. Der standard Fire TV Stick funktioniert ebenfalls, kann aber bei 4K-Streams an seine Grenzen stoßen.' },
  { question: 'Ist Downloader sicher?', answer: 'Downloader ist eine offizielle App aus dem Amazon App Store und völlig sicher. Sie wird von Millionen Nutzern weltweit verwendet, um Apps zu installieren.' },
  { question: 'Was ist IPTV Smarters Pro?', answer: 'IPTV Smarters Pro ist eine der beliebtesten IPTV-Apps für Firestick. Sie bietet eine benutzerfreundliche Oberfläche, EPG-Unterstützung und VOD-Integration.' },
  { question: 'Meine Streams frieren ein — was tun?', answer: 'Stelle sicher, dass du eine stabile Internetverbindung hast (mindestens 16 Mbit/s). Verwende bei Möglichkeit LAN statt WLAN. Starte den Firestick neu und wähle in den App-Einstellungen einen anderen Player (VLC oder MX Player).' },
  { question: 'Kann ich TiviMate statt IPTV Smarters nutzen?', answer: 'Ja, TiviMate ist eine exzellente Alternative und bietet ein noch moderneres Interface. Die Einrichtung erfolgt ähnlich über Downloader. Wir empfehlen TiviMate für fortgeschrittene Nutzer.' },
]

export default function FirestickGuidePage() {
  const howToSchema = HowToSchema(
    'IPTV auf Amazon Fire TV Stick installieren',
    steps,
    'https://streamdach.shop/guides/firestick',
    'https://streamdach.shop/images/firestick-guide.jpg'
  )

  const schemas = [
    howToSchema,
    BreadcrumbSchema([
      { name: 'Home', url: 'https://streamdach.shop/' },
      { name: 'Guides', url: 'https://streamdach.shop/guides' },
      { name: 'Firestick', url: 'https://streamdach.shop/guides/firestick' },
    ]),
    FAQSchema(firestickFAQ),
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="container-tight px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[
          { label: 'Guides', href: '/guides' },
          { label: 'Firestick', href: '/guides/firestick' },
        ]} />
      </div>

      <article className="section-padding pt-12">
        <div className="container-tight px-4 sm:px-6 lg:px-8 max-w-4xl">
          <header className="mb-16">
            <h1 className="heading-1 mb-6">IPTV auf Fire TV Stick installieren</h1>
            <p className="body-large">
              Schritt-für-Schritt Anleitung für Amazon Fire TV Stick (4K, Lite, Max). 
              Installiere IPTV Smarters Pro oder TiviMate in unter 10 Minuten.
            </p>
          </header>

          <div className="space-y-8 mb-16">
            {steps.map((step, i) => (
              <div key={i} id={`step-${i + 1}`} className="glass-card p-8 flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-blue text-brand-black font-bold text-xl flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Schritt {i + 1}</h3>
                  <p className="text-zinc-400 leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 bg-brand-blue/5 border-brand-blue/20 mb-16">
            <h3 className="heading-3 mb-4">Noch Fragen zur Einrichtung?</h3>
            <p className="text-zinc-400 mb-6">
              Unser Support hilft dir bei der Einrichtung auf dem Fire TV Stick. 
              Schreib uns einfach auf WhatsApp — wir antworten in Minuten.
            </p>
            <a href={BRAND.whatsappLink} target="_blank" className="btn-primary inline-flex items-center gap-2">
              WhatsApp Support kontaktieren
            </a>
          </div>
        </div>
      </article>

      <FAQSection items={firestickFAQ} title="Firestick FAQ" />
    </>
  )
}