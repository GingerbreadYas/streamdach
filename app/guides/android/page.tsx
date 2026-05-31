import { Metadata } from 'next'
import { PAGE_SEO } from '@/lib/seo'
import { BRAND } from '@/lib/constants'
import { BreadcrumbSchema, HowToSchema, FAQSchema } from '@/lib/schema'
import Breadcrumb from '@/components/shared/Breadcrumb'
import FAQSection from '@/components/shared/FAQSection'

export const metadata: Metadata = PAGE_SEO.android

const steps = [
  'Öffne den Google Play Store auf deinem Android TV, Handy oder Tablet.',
  'Suche nach "IPTV Smarters Pro" und installiere die offizielle App.',
  'Alternativ: Lade die APK-Datei von unserer Website herunter und erlaube "Unbekannte Quellen" in den Einstellungen.',
  'Öffne IPTV Smarters Pro und wähle "Login with Xtream Codes API".',
  'Gib deine StreamDACH Zugangsdaten ein: Username, Password und Server-URL.',
  'Warte, bis die App die Kanäle, Filme und Serien lädt.',
  'Nutze die EPG-Funktion für das TV-Programm und starte deinen ersten Stream.',
]

const androidFAQ = [
  { question: 'Welche Android-Version wird benötigt?', answer: 'Wir empfehlen Android 7.0 (Nougat) oder höher für beste Performance. Ältere Versionen können eingeschränkt funktionieren.' },
  { question: 'Kann ich StreamDACH auf meinem Android Handy nutzen?', answer: 'Ja. IPTV Smarters Pro und TiviMate sind auch für Android Smartphones und Tablets verfügbar. Perfekt für unterwegs.' },
  { question: 'Was ist besser: IPTV Smarters oder TiviMate?', answer: 'IPTV Smarters Pro ist einfacher für Anfänger. TiviMate bietet ein moderneres Interface und mehr Funktionen, ist aber kostenpflichtig (Premium).' },
  { question: 'Mein Android TV hat keinen Play Store — was tun?', answer: 'Nutze die "Downloader" App oder einen USB-Stick, um die APK-Datei manuell zu installieren. Wir senden dir die Datei auf WhatsApp.' },
]

export default function AndroidGuidePage() {
  const schemas = [
    HowToSchema('IPTV auf Android TV installieren', steps, 'https://streamdach.shop/guides/android', 'https://streamdach.shop/images/android-guide.jpg'),
    BreadcrumbSchema([
      { name: 'Home', url: 'https://streamdach.shop/' },
      { name: 'Guides', url: 'https://streamdach.shop/guides' },
      { name: 'Android', url: 'https://streamdach.shop/guides/android' },
    ]),
    FAQSchema(androidFAQ),
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="container-tight px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[
          { label: 'Guides', href: '/guides' },
          { label: 'Android TV', href: '/guides/android' },
        ]} />
      </div>

      <article className="section-padding pt-12">
        <div className="container-tight px-4 sm:px-6 lg:px-8 max-w-4xl">
          <header className="mb-16">
            <h1 className="heading-1 mb-6">IPTV auf Android TV & Handy installieren</h1>
            <p className="body-large">
              Komplette Anleitung für Android TV Box, Android Fernseher, Smartphone und Tablet. 
              Inklusive APK-Download und Xtream Codes Einrichtung.
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
            <h3 className="heading-3 mb-4">Android Hilfe benötigt?</h3>
            <p className="text-zinc-400 mb-6">
              Wir unterstützen dich bei der Android-Einrichtung. Schick uns einfach eine WhatsApp 
              mit deinem Gerätemodell.
            </p>
            <a href={BRAND.whatsappLink} target="_blank" className="btn-primary inline-flex items-center gap-2">
              WhatsApp Support
            </a>
          </div>
        </div>
      </article>

      <FAQSection items={androidFAQ} title="Android TV FAQ" />
    </>
  )
}