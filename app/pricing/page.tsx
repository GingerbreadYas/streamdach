import { Metadata } from 'next'
import { PRICING, BRAND } from '@/lib/constants'
import { PAGE_SEO } from '@/lib/seo'
import { ProductSchema, BreadcrumbSchema, FAQSchema } from '@/lib/schema'
import PricingCard from '@/components/shared/PricingCard'
import Breadcrumb from '@/components/shared/Breadcrumb'
import FAQSection from '@/components/shared/FAQSection'
import { Check, ArrowRight, Shield, Clock, Headphones } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = PAGE_SEO.pricing

const pricingFAQ = [
  { question: 'Wie kann ich bezahlen?', answer: 'Wir akzeptieren PayPal, Kreditkarte (Visa/Mastercard), Banküberweisung (SEPA), sowie Kryptowährungen (Bitcoin, Ethereum, USDT). Alle Transaktionen sind SSL-verschlüsselt.' },
  { question: 'Gibt es eine Vertragsbindung?', answer: 'Nein. Alle Abonnements sind ohne Vertragsbindung. Sie können jederzeit kündigen oder Ihr Abo nicht verlängern. Keine automatische Verlängerung ohne Ihr Zutun.' },
  { question: 'Wie schnell ist die Aktivierung?', answer: 'Die Aktivierung erfolgt in der Regel innerhalb von 5 Minuten nach Zahlungseingang. Bei PayPal und Kreditkarte ist dies nahezu sofort. Bei Banküberweisung kann es 1-2 Werktage dauern.' },
  { question: 'Kann ich mehrere Geräte gleichzeitig nutzen?', answer: 'Standardmäßig ist 1 Verbindung pro Abo enthalten. Für gleichzeitiges Streaming auf mehreren Geräten bieten wir Multi-Connection-Pakete an — fragen Sie uns einfach auf WhatsApp.' },
  { question: 'Gibt es eine Testzeit?', answer: 'Wir bieten keine kostenlosen Tests an, um unsere Serverqualität zu schützen. Unsere 1-Monats-Lizenz ist jedoch das perfekte "Test"-Paket mit minimalem Risiko.' },
  { question: 'Was ist inklusive im Preis?', answer: 'Alle Pakete beinhalten: 15.000+ Live-Kanäle, 80.000+ VOD, EPG (TV-Programm), Catch-Up TV (bei 12+1 Monaten), 24/7 Support und regelmäßige Server-Updates.' },
]

export default function PricingPage() {
  const breadcrumbItems = [
    { label: 'Preise', href: '/pricing' },
  ]

  const productSchema = ProductSchema()
  const breadcrumbSchema = BreadcrumbSchema([
    { name: 'Home', url: 'https://streamdach.shop/' },
    { name: 'Preise', url: 'https://streamdach.shop/pricing' },
  ])
  const faqSchema = FAQSchema(pricingFAQ)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container-tight px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="section-padding pt-12">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="heading-1 mb-6">Transparente Preise</h1>
            <p className="body-large">
              Keine versteckten Kosten. Keine Vertragsbindung. Sofortige Aktivierung. 
              Wähle das Paket, das zu dir passt.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {[
              { icon: Shield, text: 'SSL-Zahlung' },
              { icon: Clock, text: '5 Min Aktivierung' },
              { icon: Headphones, text: '24/7 Support' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-zinc-400">
                <item.icon className="w-5 h-5 text-brand-blue" />
                {item.text}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {PRICING.map((plan, i) => (
              <PricingCard 
                key={plan.id} 
                {...plan} 
                features={[...plan.features]} 
                index={i} 
              />
            ))}
          </div>

          <div className="glass-card p-8 max-w-3xl mx-auto text-center">
            <h3 className="heading-3 mb-4">Unsicher, welches Paket passt?</h3>
            <p className="text-zinc-400 mb-6">
              Schreib uns auf WhatsApp — wir beraten dich kostenlos und unverbindlich 
              zum richtigen Paket für deine Bedürfnisse.
            </p>
            <a href={BRAND.whatsappLink} target="_blank" className="btn-primary inline-flex items-center gap-2">
              Kostenlos beraten lassen <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Was ist in jedem Paket inklusive?</h2>
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-5 border-b border-white/5 text-sm">
                <div className="p-4 text-zinc-400">Feature</div>
                <div className="p-4 text-center text-zinc-400">1 Monat</div>
                <div className="p-4 text-center text-zinc-400">3 Monate</div>
                <div className="p-4 text-center text-brand-blue font-medium">6 Monate</div>
                <div className="p-4 text-center text-zinc-400">12+1 Monate</div>
              </div>
              {[
                ['15.000+ Live Kanäle', true, true, true, true],
                ['80.000+ VOD', true, true, true, true],
                ['Full HD & 4K', true, true, true, true],
                ['Anti-Freeze', true, true, true, true],
                ['EPG Guide', false, false, true, true],
                ['Catch-Up TV', false, false, false, true],
                ['Multi-Device', false, false, false, true],
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-5 border-b border-white/5 text-sm last:border-0">
                  <div className="p-4 text-white font-medium">{row[0]}</div>
                  {row.slice(1).map((val, j) => (
                    <div key={j} className="p-4 flex justify-center">
                      {val ? (
                        <Check className="w-5 h-5 text-brand-blue" />
                      ) : (
                        <span className="text-zinc-600">—</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <h2 className="heading-2 text-center mb-8">IPTV Preise für dein Land</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'IPTV Deutschland Preise', href: '/iptv-germany' },
                { label: 'IPTV Österreich Preise', href: '/iptv-austria' },
                { label: 'IPTV Schweiz Preise', href: '/iptv-switzerland' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="glass-card-hover px-6 py-3 text-sm text-zinc-300 hover:text-brand-blue transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={pricingFAQ} title="Preise & Zahlung FAQ" />
    </>
  )
}
