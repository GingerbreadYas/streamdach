import { WithContext, Organization, WebSite, BreadcrumbList, FAQPage, Product, Article, LocalBusiness, HowTo } from 'schema-dts'

const BRAND = {
  name: 'StreamDACH',
  url: 'https://streamdach.shop',
  logo: 'https://streamdach.shop/logo.png',
  whatsapp: '+33756757598',
  email: 'support@streamdach.shop',
}

export function OrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND.name,
    url: BRAND.url,
    logo: BRAND.logo,
    email: BRAND.email,
    telephone: BRAND.whatsapp,
    sameAs: [
      'https://t.me/streamdach',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND.whatsapp,
      contactType: 'customer service',
      availableLanguage: ['German', 'English'],
      areaServed: ['DE', 'AT', 'CH', 'EU'],
    },
  }
}

export function WebsiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND.name,
    url: BRAND.url,
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: `${BRAND.url}/search?q={search_term_string}`,
        // Bypasses the query-input typing strictness perfectly
        'query-input': 'required name=search_term_string',
      } as any
    ],
  }
}

export function BreadcrumbSchema(items: { name: string; url: string }[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function FAQSchema(questions: { question: string; answer: string }[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }
}

export function ProductSchema(): WithContext<Product> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'StreamDACH IPTV Abonnement',
    image: 'https://streamdach.shop/og-default.jpg',
    description: 'Premium IPTV mit 15.000+ Live-Kanälen und 80.000+ VOD in 4K Qualität',
    brand: {
      '@type': 'Brand',
      name: 'StreamDACH',
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: 14.99, // Explicit numbers format for strict typings
      highPrice: 54.99,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://streamdach.shop/pricing',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 2847, // Must be an integer type
    },
  }
}

export function ArticleSchema(title: string, description: string, url: string, date: string, image: string): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    url,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Organization',
      name: 'StreamDACH',
      url: BRAND.url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'StreamDACH',
      logo: {
        '@type': 'ImageObject',
        url: BRAND.logo,
      },
    },
  }
}

export function LocalBusinessSchema(country: string, city?: string): WithContext<LocalBusiness> {
  const names: Record<string, string> = {
    DE: 'StreamDACH Deutschland',
    AT: 'StreamDACH Österreich',
    CH: 'StreamDACH Schweiz',
  }

  const geoCoordinates = country === 'DE' ? { '@type': 'GeoCoordinates' as const, latitude: '51.1657', longitude: '10.4515' } :
                        country === 'AT' ? { '@type': 'GeoCoordinates' as const, latitude: '47.5162', longitude: '14.5501' } :
                        country === 'CH' ? { '@type': 'GeoCoordinates' as const, latitude: '46.8182', longitude: '8.2275' } : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: names[country] || 'StreamDACH',
    image: BRAND.logo,
    url: BRAND.url,
    telephone: BRAND.whatsapp,
    priceRange: '€€',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: country
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: country,
      ...(city ? { addressLocality: city } : {}), // Destructure conditionally to avoid undefined fields
    },
    ...(geoCoordinates ? { geo: geoCoordinates } : {}),
  }
}

export function HowToSchema(name: string, steps: string[], url: string, image: string): WithContext<HowTo> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description: `Schritt-für-Schritt Anleitung: ${name}`,
    image,
    totalTime: 'PT15M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'EUR',
      value: '0',
    },
    step: steps.map((text, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: `Schritt ${i + 1}`,
      text,
      url: `${url}#step-${i + 1}`,
    })),
  }
}
