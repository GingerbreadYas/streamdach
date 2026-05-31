import { Metadata } from 'next'
import { PAGE_SEO } from '@/lib/seo'
import { BRAND } from '@/lib/constants'
import FAQSection from '@/components/shared/FAQSection'

export const metadata: Metadata = PAGE_SEO.faq

const generalFAQ = [
  { question: 'Was ist StreamDACH?', answer: 'StreamDACH ist ein Premium IPTV-Service, der speziell für den DACH-Raum (Deutschland, Österreich, Schweiz) optimiert ist. Wir bieten über 15.000 Live-TV-Kanäle und 80.000 Video-on-Demand-Inhalte in HD und 4K Qualität.' },
  { question: 'Wie funktioniert IPTV?', answer: 'IPTV (Internet Protocol Television) sendet TV-Signale über das Internet statt über Satellit oder Kabel. Du benötigst lediglich eine Internetverbindung und ein kompatibles Gerät.' },
  { question: 'Ist IPTV legal?', answer: 'Die Legalität von IPTV hängt von der Quelle der Inhalte ab. StreamDACH ist ein technischer Streaming-Service. Wir empfehlen, sich über die geltenden Gesetze zu informieren.' },
  { question: 'Welche Geräte werden unterstützt?', answer: 'StreamDACH funktioniert auf: Smart TV, Amazon Fire TV Stick, Android Smartphones & Tablets, iPhone & iPad, Windows PC, MAG Box, Enigma2 Receiver.' },
  { question: 'Wie lange dauert die Aktivierung?', answer: 'Nach Zahlungseingang erfolgt die Aktivierung in der Regel innerhalb von 5 Minuten. Du erhältst deine Zugangsdaten per E-Mail oder WhatsApp.' },
  { question: 'Wie kann ich bezahlen?', answer: 'Wir akzeptieren PayPal, Kreditkarte, Banküberweisung und Kryptowährungen. Alle Zahlungen sind SSL-verschlüsselt.' },
  { question: 'Gibt es eine Vertragsbindung?', answer: 'Nein. Alle Pakete sind ohne Vertragsbindung. Du kannst jederzeit kündigen oder dein Abo nicht verlängern.' },
  { question: 'Kann ich mehrere Geräte gleichzeitig nutzen?', answer: 'Standardmäßig ist 1 Verbindung pro Abo enthalten. Für Multi-Device-Streaming bieten wir spezielle Pakete an.' },
  { question: 'Was ist EPG?', answer: 'EPG (Electronic Program Guide) ist der elektronische Programmführer. Er zeigt dir, was gerade läuft und was als Nächstes kommt.' },
  { question: 'Was ist VOD?', answer: 'VOD (Video on Demand) bedeutet, dass du Filme, Serien und Dokumentationen jederzeit abrufen kannst. StreamDACH bietet über 80.000 VOD-Inhalte.' },
  { question: 'Was ist Catch-Up TV?', answer: 'Catch-Up TV ermöglicht es dir, verpasste Sendungen der letzten 7 Tage nachzuholen. Diese Funktion ist im 12+1 Monate Paket inklusive.' },
  { question: 'Warum frieren manche Streams?', answer: 'Freezing ist meist auf eine langsame Internetverbindung zurückzuführen. Nutze LAN statt WLAN und prüfe deine Geschwindigkeit.' },
  { question: 'Wie erreiche ich den Support?', answer: 'WhatsApp ist der schnellste Weg: +33756757598. Wir antworten in der Regel innerhalb von Minuten.' },
  { question: 'Bietet ihr Testaccounts an?', answer: 'Wir bieten keine kostenlosen Tests an, um unsere Serverqualität zu schützen. Unser 1-Monats-Paket ist das perfekte Test-Paket.' },
]

export default function FAQPage() {
  return (
    <>
      <section className="section-padding pt-32">
        <div className="container-tight px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="heading-1 mb-6">Häufig gestellte Fragen</h1>
            <p className="body-large">Antworten auf alle wichtigen Fragen zu StreamDACH, IPTV, Einrichtung, Zahlung und technischen Details.</p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <div className="glass-card p-8 text-center">
              <h3 className="heading-3 mb-4">Frage nicht dabei?</h3>
              <p className="text-zinc-400 mb-6">
                Schreib uns auf WhatsApp — wir antworten in Minuten und helfen dir persönlich.
              </p>
              <a href={BRAND.whatsappLink} target="_blank" className="btn-primary inline-flex items-center gap-2">
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={generalFAQ} title="" />
    </>
  )
}