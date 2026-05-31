import { Metadata } from 'next'
import { PAGE_SEO } from '@/lib/seo'
import { BRAND } from '@/lib/constants'
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = PAGE_SEO.contact

export default function ContactPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-tight px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="heading-1 mb-6">Kontakt</h1>
          <p className="body-large">Wir sind für dich da. Kontaktiere uns per WhatsApp für die schnellste Antwort.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <a href={BRAND.whatsappLink} target="_blank" className="glass-card-hover p-8 text-center group">
            <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-[#25D366]" />
            </div>
            <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-sm text-zinc-400 mb-3">Schnellste Antwort — in Minuten</p>
            <span className="text-brand-blue text-sm font-medium">{BRAND.whatsapp}</span>
          </a>

          <a href={`mailto:${BRAND.email}`} className="glass-card-hover p-8 text-center group">
            <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-brand-blue" />
            </div>
            <h3 className="font-semibold text-white mb-2">E-Mail</h3>
            <p className="text-sm text-zinc-400 mb-3">Antwort innerhalb 24h</p>
            <span className="text-brand-blue text-sm font-medium">{BRAND.email}</span>
          </a>

          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-brand-blue" />
            </div>
            <h3 className="font-semibold text-white mb-2">Erreichbarkeit</h3>
            <p className="text-sm text-zinc-400 mb-3">Wir sind für dich da</p>
            <span className="text-brand-blue text-sm font-medium">24/7 Support</span>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto text-center">
          <MapPin className="w-8 h-8 text-brand-blue mx-auto mb-4" />
          <h2 className="heading-3 mb-4">DACH & Europa</h2>
          <p className="text-zinc-400 mb-6">
            StreamDACH ist spezialisiert auf den deutschsprachigen Raum. 
            Wir bieten lokalen Support auf Deutsch für Deutschland, Österreich und die Schweiz.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['🇩🇪 Deutschland', '🇦🇹 Österreich', '🇨🇭 Schweiz', '🇪🇺 Europa'].map((region) => (
              <span key={region} className="glass-card px-4 py-2 text-sm text-zinc-300">{region}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}