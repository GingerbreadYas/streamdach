import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
  noIndex?: boolean
  alternates?: Record<string, string>
}

export function generateSEO({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/og-default.jpg',
  noIndex = false,
  alternates = {},
}: SEOProps): Metadata {
  const url = `https://streamdach.shop${path}`

  return {
    title: `${title} | StreamDACH`,
    description,
    keywords: ['IPTV', 'StreamDACH', ...keywords],
    metadataBase: new URL('https://streamdach.shop'),
    alternates: {
      canonical: url,
      languages: {
        'de-DE': url,
        'de-AT': url,
        'de-CH': url,
        'en': url,
        ...alternates,
      },
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: `${title} | StreamDACH`,
      description,
      url,
      siteName: 'StreamDACH',
      locale: 'de_DE',
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | StreamDACH`,
      description,
      images: [ogImage],
    },
    verification: {
      google: 'YOUR_GOOGLE_VERIFICATION',
    },
    other: {
      'whatsapp:number': '+33756757598',
    },
  }
}

export const PAGE_SEO = {
  home: generateSEO({
    title: 'Premium IPTV Deutschland, Österreich, Schweiz | 15.000+ Kanäle',
    description: 'StreamDACH bietet Premium IPTV für DACH mit 15.000+ Live-Kanälen, 80.000+ VOD, 4K Qualität & Anti-Freeze. Bundesliga, Champions League, Sky, DAZN. Jetzt testen!',
    path: '/',
    keywords: ['IPTV Deutschland', 'IPTV Österreich', 'IPTV Schweiz', 'IPTV DACH', 'IPTV 4K', 'Bundesliga IPTV', 'Champions League Stream'],
  }),
  pricing: generateSEO({
    title: 'IPTV Preise & Abonnements | Ab 14,99€/Monat',
    description: 'StreamDACH IPTV Preise: 1 Monat 14,99€, 3 Monate 28,99€, 6 Monate 38,99€, 12+1 Monate 54,99€. Premium Qualität, keine Vertragsbindung. Jetzt bestellen!',
    path: '/pricing',
    keywords: ['IPTV Preise', 'IPTV Abo', 'IPTV kosten', 'IPTV Angebot', 'günstiges IPTV'],
  }),
  germany: generateSEO({
    title: 'IPTV Deutschland 2026 | 15.000+ Deutsche & Internationale Kanäle',
    description: 'Bestes IPTV für Deutschland: ARD, ZDF, Sky Deutschland, DAZN, Bundesliga, Champions League. 4K Streaming, stabile Server, EPG. Jetzt auf StreamDACH!',
    path: '/iptv-germany',
    keywords: ['IPTV Deutschland', 'IPTV Germany', 'deutsche IPTV Kanäle', 'IPTV Berlin', 'IPTV München', 'Sky IPTV', 'DAZN IPTV'],
  }),
  austria: generateSEO({
    title: 'IPTV Österreich 2026 | ORF, Sky, ServusTV & Internationale Kanäle',
    description: 'Premium IPTV für Österreich: ORF 1, ORF 2, ServusTV, Sky Austria, Bundesliga, Champions League. 4K Qualität, Anti-Freeze Technologie. StreamDACH.',
    path: '/iptv-austria',
    keywords: ['IPTV Österreich', 'IPTV Austria', 'ORF IPTV', 'ServusTV Stream', 'IPTV Wien', 'Sky Austria IPTV'],
  }),
  switzerland: generateSEO({
    title: 'IPTV Schweiz 2026 | SRF, RTS, RSI & 15.000+ Kanäle in 4K',
    description: 'Bestes IPTV für die Schweiz: SRF 1, SRF 2, RTS, RSI, TeleZüri, Sky Schweiz, Bundesliga, Champions League. 4K Streaming, Schweizer Server. StreamDACH.',
    path: '/iptv-switzerland',
    keywords: ['IPTV Schweiz', 'IPTV Switzerland', 'SRF IPTV', 'RTS Stream', 'IPTV Zürich', 'Schweizer IPTV'],
  }),
  europe: generateSEO({
    title: 'IPTV Europa | Premium Streaming für ganz Europa',
    description: 'StreamDACH IPTV Europa: 15.000+ internationale Kanäle aus UK, Frankreich, Italien, Spanien, Polen, Türkei. 4K, VOD, EPG. Europaweite Server.',
    path: '/iptv-europe',
    keywords: ['IPTV Europa', 'IPTV Europe', 'internationales IPTV', 'IPTV UK', 'IPTV Frankreich', 'europäisches IPTV'],
  }),
  firestick: generateSEO({
    title: 'IPTV auf Firestick installieren | Schritt-für-Schritt Guide 2026',
    description: 'Lerne, wie du IPTV auf Amazon Fire TV Stick installierst: Downloader, IPTV Smarters, TiviMate Setup. Einfache Anleitung für Anfänger. StreamDACH Guide.',
    path: '/guides/firestick',
    keywords: ['IPTV Firestick', 'Fire TV Stick IPTV', 'IPTV Smarters Firestick', 'TiviMate Firestick', 'IPTV installieren'],
  }),
  smarttv: generateSEO({
    title: 'IPTV auf Smart TV installieren | Samsung, LG, Sony Guide 2026',
    description: 'IPTV auf Samsung Smart TV, LG WebOS, Sony Android TV installieren. Smart IPTV, SS IPTV, Tizen App Setup. Komplette Anleitung von StreamDACH.',
    path: '/guides/smart-tv',
    keywords: ['IPTV Smart TV', 'Samsung IPTV', 'LG IPTV', 'Smart IPTV App', 'IPTV auf Fernseher'],
  }),
  android: generateSEO({
    title: 'IPTV auf Android TV & Handy installieren | Kompletter Guide',
    description: 'IPTV auf Android TV, Android Handy & Tablet installieren: IPTV Smarters, TiviMate, XCIPTV. APK Download, M3U Setup, EPG Konfiguration. StreamDACH.',
    path: '/guides/android',
    keywords: ['IPTV Android', 'Android TV IPTV', 'IPTV Smarters Android', 'IPTV APK', 'IPTV Handy'],
  }),
  troubleshooting: generateSEO({
    title: 'IPTV Probleme lösen | Buffering, Freezing, Login Hilfe 2026',
    description: 'IPTV funktioniert nicht? Lösungen für Buffering, Freezing, Black Screen, Login-Fehler, Kanäle laden nicht. Troubleshooting Guide von StreamDACH Support.',
    path: '/guides/troubleshooting',
    keywords: ['IPTV Probleme', 'IPTV buffering', 'IPTV freezing', 'IPTV funktioniert nicht', 'IPTV Hilfe'],
  }),
  blog: generateSEO({
    title: 'IPTV Blog | News, Guides, Reviews & Tipps 2026',
    description: 'StreamDACH IPTV Blog: Aktuelle News, Setup-Guides, Geräte-Reviews, Vergleiche und Tipps für IPTV in Deutschland, Österreich und Schweiz.',
    path: '/blog',
    keywords: ['IPTV Blog', 'IPTV News', 'IPTV Tipps', 'IPTV Reviews', 'IPTV Guide'],
  }),
  contact: generateSEO({
    title: 'Kontakt | StreamDACH IPTV Support & Vertrieb',
    description: 'Kontaktiere StreamDACH per WhatsApp, Telegram oder E-Mail. 24/7 Support für IPTV in Deutschland, Österreich, Schweiz. Schnelle Antwort garantiert.',
    path: '/contact',
    keywords: ['IPTV Kontakt', 'IPTV Support', 'IPTV WhatsApp', 'IPTV Hilfe'],
  }),
  faq: generateSEO({
    title: 'IPTV FAQ | Häufig gestellte Fragen zu StreamDACH',
    description: 'Antworten auf alle IPTV Fragen: Was ist IPTV? Ist IPTV legal? Welche Geräte? Wie installieren? Buffering? Zahlung? StreamDACH FAQ.',
    path: '/faq',
    keywords: ['IPTV FAQ', 'IPTV Fragen', 'IPTV legal', 'IPTV was ist das', 'IPTV erklärt'],
  }),
} as const