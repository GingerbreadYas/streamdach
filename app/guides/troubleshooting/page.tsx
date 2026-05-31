import { Metadata } from 'next'
import { PAGE_SEO } from '@/lib/seo'
import { BRAND } from '@/lib/constants'
import { BreadcrumbSchema, FAQSchema } from '@/lib/schema'
import Breadcrumb from '@/components/shared/Breadcrumb'
import FAQSection from '@/components/shared/FAQSection'
import { AlertTriangle, Wifi, RefreshCw, Monitor, Lock, Zap } from 'lucide-react'

export const metadata: Metadata = PAGE_SEO.troubleshooting

const issues = [
  {
    icon: Wifi,
    title: 'Buffering & Freezing',
    desc: 'Stream stoppt alle paar Sekunden oder lädt ständig nach.',
    solutions: [
      'Internetgeschwindigkeit testen (mindestens 16 Mbit/s für HD)',
      'Vom WLAN auf LAN-Kabel wechseln',
      'VPN deaktivieren (kann die Verbindung verlangsamen)',
      'Andere App oder Player testen (VLC, MX Player)',
      'Router für 30 Sekunden vom Strom trennen',
      'In der App einen anderen Server/Stream wählen',
    ],
  },
  {
    icon: Lock,
    title: 'Login funktioniert nicht',
    desc: 'Fehlermeldung bei der Anmeldung oder "User not found".',
    solutions: [
      'Username und Password auf Tippfehler prüfen',
      'Server-URL korrekt eingeben (ohne Leerzeichen)',
      'Groß- und Kleinschreibung beachten',
      'App neu installieren und Zugangsdaten erneut eingeben',
      'Bei dauerhaften Problemen: Support kontaktieren',
    ],
  },
  {
    icon: Monitor,
    title: 'Black Screen / Kein Bild',
    desc: 'Ton ist da, aber Bildschirm bleibt schwarz.',
    solutions: [
      'Anderen Player in den Einstellungen wählen',
      'Hardware-Beschleunigung deaktivieren',
      'Auflösung in den App-Einstellungen reduzieren (1080p statt 4K)',
      'Gerät neu starten',
      'Codec-Einstellungen prüfen',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Kanäle laden nicht',
    desc: 'Playlist wird nicht aktualisiert oder Kanäle fehlen.',
    solutions: [
      'Internetverbindung prüfen',
      'App-Cache leeren (Einstellungen > Apps > Cache löschen)',
      'Playlist manuell neu laden',
      'App auf neueste Version aktualisieren',
      'Bei fehlenden Kanälen: Support kontaktieren für Server-Update',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'App stürzt ab',
    desc: 'IPTV App schließt sich unerwartet.',
    solutions: [
      'App-Cache und -Daten löschen',
      'App neu installieren',
      'Betriebssystem aktualisieren',
      'Andere IPTV-App testen (TiviMate, XCIPTV)',
      'Gerätemodell prüfen — ältere Geräte haben Performance-Probleme',
    ],
  },
  {
    icon: Zap,
    title: 'Bildqualität ist schlecht',
    desc: 'Pixeliges Bild oder niedrige Auflösung.',
    solutions: [
      'In den App-Einstellungen 4K/HD auswählen',
      'Internetgeschwindigkeit prüfen (25 Mbit/s für 4K)',
      'Weniger Geräte im gleichen Netzwerk streamen lassen',
      'Streaming-Zeitpunkt ändern (weniger Traffic)',
      'Anderen Server in den Einstellungen wählen',
    ],
  },
]

const troubleshootFAQ = [
  { question: 'Mein Stream friert ständig ein — liegt das an StreamDACH?', answer: 'Freezing ist meist auf eine langsame oder instabile Internetverbindung zurückzuführen. Prüfe deine Geschwindigkeit und wechsle bei Möglichkeit auf LAN. Unsere Server laufen mit 99.9% Uptime.' },
  { question: 'Was bedeutet "User already connected"?', answer: 'Diese Meldung erscheint, wenn dein Account auf mehreren Geräten gleichzeitig genutzt wird. Standard-Abos erlauben nur 1 gleichzeitige Verbindung. Für Multi-Device-Nutzung kontaktiere uns auf WhatsApp.' },
  { question: 'Warum sind manche Kanäle offline?', answer: 'Gelegentlich können einzelne Sender kurzzeitig offline sein aufgrund von Wartungsarbeiten oder Sender-Updates. Wir aktualisieren unsere Listen mehrmals täglich. Melde fehlende Kanäle auf WhatsApp.' },
  { question: 'Soll ich ein VPN nutzen?', answer: 'Ein VPN ist nicht erforderlich für StreamDACH. In manchen Fällen kann ein VPN sogar die Verbindung verlangsamen. Wenn du ein VPN nutzt, teste mit deaktiviertem VPN.' },
  { question: 'Wie kontaktiere ich den Support am schnellsten?', answer: 'WhatsApp ist der schnellste Weg: +33756757598. Wir antworten in der Regel innerhalb von Minuten. Alternativ erreichst du uns per Telegram oder E-Mail.' },
]

export default function TroubleshootingPage() {
  const schemas = [
    BreadcrumbSchema([
      { name: 'Home', url: 'https://streamdach.shop/' },
      { name: 'Guides', url: 'https://streamdach.shop/guides' },
      { name: 'Hilfe & Troubleshooting', url: 'https://streamdach.shop/guides/troubleshooting' },
    ]),
    FAQSchema(troubleshootFAQ),
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="container-tight px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[
          { label: 'Guides', href: '/guides' },
          { label: 'Hilfe', href: '/guides/troubleshooting' },
        ]} />
      </div>

      <section className="section-padding pt-12">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="heading-1 mb-6">IPTV Probleme lösen</h1>
            <p className="body-large">
              Die häufigsten IPTV-Probleme und ihre Lösungen. Buffering, Freezing, Login-Fehler, 
              Black Screen — hier findest du die Antworten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-24">
            {issues.map((issue) => (
              <div key={issue.title} className="glass-card p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                    <issue.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="font-semibold text-white">{issue.title}</h3>
                </div>
                <p className="text-sm text-zinc-500 mb-4">{issue.desc}</p>
                <ul className="space-y-2">
                  {issue.solutions.map((sol) => (
                    <li key={sol} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-brand-blue mt-1">•</span>
                      {sol}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 md:p-12 text-center bg-brand-blue/5 border-brand-blue/20">
            <h2 className="heading-2 mb-4">Problem nicht gelöst?</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Unser technischer Support hilft dir persönlich weiter. Schick uns eine WhatsApp 
              mit deinem Problem — wir antworten in Minuten und führen dich Schritt für Schritt 
              zur Lösung.
            </p>
            <a href={BRAND.whatsappLink} target="_blank" className="btn-primary inline-flex items-center gap-2">
              <Zap className="w-5 h-5" />
              WhatsApp Support kontaktieren
            </a>
          </div>
        </div>
      </section>

      <FAQSection items={troubleshootFAQ} title="Technische FAQ" />
    </>
  )
}