import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://streamdach.shop'

  const routes = [
    '',
    '/pricing',
    '/iptv-germany',
    '/iptv-austria',
    '/iptv-switzerland',
    '/iptv-europe',
    '/iptv-berlin',
    '/iptv-munich',
    '/iptv-vienna',
    '/iptv-zurich',
    '/guides/firestick',
    '/guides/smart-tv',
    '/guides/android',
    '/guides/tivimate',
    '/guides/troubleshooting',
    '/blog',
    '/contact',
    '/faq',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/pricing' ? 0.9 : 0.8,
  }))
}