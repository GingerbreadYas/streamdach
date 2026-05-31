import { Metadata } from 'next'
import { PAGE_SEO } from '@/lib/seo'
import { BRAND } from '@/lib/constants'
import { BreadcrumbSchema, HowToSchema, FAQSchema } from '@/lib/schema'
import Breadcrumb from '@/components/shared/Breadcrumb'
import FAQSection from '@/components/shared/FAQSection'

export const metadata: Metadata = PAGE_SEO.smarttv

const steps = [
  'Prüfe, ob dein Smart TV Android TV (Sony, TCL, Philips), Tizen (Samsung) oder WebOS (LG) nutzt.',
  'Für Android TV: Öffne den Google Play Store und suche nach "IPTV Smarters Pro" oder "TiviMate". Installiere die App.',
  'Für Samsung Tizen: Öffne den App Store, suche nach "Smart IPTV" (SiPTV) oder "SS IPTV" und installiere die App.',
  'Für LG WebOS: Öffne den LG Content Store, suche nach "Smart IPTV" und installiere die App.',
  'Starte die IPTV-App und gib deine StreamDACH Zugangsdaten ein (Username, Password, Server-URL).',
  'Lade die Playlist oder M3U-URL, die du nach deiner Bestellung erhältst.',
  'Warte, bis die Kanäle geladen sind, und beginne mit dem Streaming.',
]

const smartTVFAQ = [
  { question: 'Funktioniert StreamDACH auf Samsung Smart TVs?', answer: 'Ja. Samsung Smart TVs mit Tizen OS unterstützen Smart IPTV (SiPTV) und SS IPTV. Alternativ kannst du einen Fire TV Stick oder Android TV Box anschließen.' },
  { question: 'Kann ich IPTV auf LG WebOS nutzen?', answer: 'Ja. LG Smart TVs mit WebOS unterstützen die Smart IPTV App aus dem LG Content Store. Die Einrichtung ist einfach und dauert nur wenige Minuten.' },
  { question: 'Mein Sony TV hat Android TV — welche App ist am besten?', answer: 'Für Android TV empfehlen wir IPTV Smarters Pro oder TiviMate aus dem Google Play Store. Beide Apps bieten das beste Streaming-Erlebnis.' },
  { question: 'Die App lässt sich nicht installieren — was tun?', answer: 'Manche älteren Smart TVs haben keinen App Store. In diesem Fall empfehlen wir einen externen Streaming-Stick wie den Amazon Fire TV Stick 4K oder eine Android TV Box.' },
]

export default function SmartTVGuidePage() {
  const schemas = [
    HowToSchema('IPTV auf Smart TV installieren', steps, 'https://streamdach.shop/guides/smart-tv', 'https://streamdach.shop/images/smart-tv-guide.jpg'),
    BreadcrumbSchema([
      { name: 'Home', url: 'https://streamdach.shop/' },
      { name: 'Guides', url: 'https://streamdach.shop/guides' },
      { name: 'Smart TV', url: 'https://streamdach.shop/guides/smart-tv' },
    ]),
    FAQSchema(smartTVFAQ),
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="container-tight px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[
          { label: 'Guides', href: '/guides' },
          { label: 'Smart TV', href: '/guides/smart-tv' },
        ]} />
      </div>

      <article className="section-padding pt-12">
        <div className="container-tight px-4 sm:px-6 lg:px-8 max-w-4xl">
          <header className="mb-16">
            <h1 className="heading-1 mb-6">IPTV auf Smart TV installieren</h1>
            <p className="body-large">
              Komplette Anleitung für Samsung Tizen, LG WebOS, Sony Android TV und alle 
              gängigen Smart TV Modelle. Inklusive App-Empfehlungen.
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
            <h3 className="heading-3 mb-4">Smart TV Probleme?</h3>
            <p className="text-zinc-400 mb-6">
              Wir helfen dir bei der Einrichtung auf deinem Fernseher. Schreib uns auf WhatsApp 
              mit deinem TV-Modell — wir finden die beste Lösung.
            </p>
            <a href={BRAND.whatsappLink} target="_blank" className="btn-primary inline-flex items-center gap-2">
              WhatsApp Support
            </a>
          </div>
        </div>
      </article>

      <FAQSection items={smartTVFAQ} title="Smart TV FAQ" />
    </>
  )
}