import { Metadata } from 'next'
import Link from 'next/link'
import { PAGE_SEO } from '@/lib/seo'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = PAGE_SEO.blog

const blogPosts = [
  { slug: 'bestes-iptv-deutschland-2026', title: 'Bestes IPTV Deutschland 2026: Vergleich & Test', excerpt: 'Wir vergleichen die besten IPTV-Anbieter in Deutschland für 2026.', date: '2026-01-15', readTime: '8 Min', category: 'Vergleich' },
  { slug: 'iptv-bundesliga-champions-league', title: 'IPTV für Bundesliga & Champions League: Der komplette Guide', excerpt: 'So siehst du alle Bundesliga-Spiele und Champions-League-Matches live.', date: '2026-01-10', readTime: '12 Min', category: 'Sport' },
  { slug: 'firestick-iptv-einrichten', title: 'Firestick IPTV einrichten: Die ultimative Anleitung 2026', excerpt: 'Schritt-für-Schritt Guide für Amazon Fire TV Stick.', date: '2026-01-05', readTime: '10 Min', category: 'Guide' },
]

export default function BlogPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-tight px-4">
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-6">StreamDACH Blog</h1>
          <p className="body-large">Aktuelle News, Guides, Reviews und Tipps rund um IPTV.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="glass-card-hover overflow-hidden flex flex-col">
              <div className="h-48 bg-gradient-to-br from-brand-blue/20 to-indigo-500/20 flex items-center justify-center">
                <span className="text-4xl opacity-50">📝</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                  <span className="bg-brand-blue/10 text-brand-blue px-2 py-1 rounded-full">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
                <h2 className="font-semibold text-white mb-3">{post.title}</h2>
                <p className="text-sm text-zinc-400 mb-4 flex-1">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-brand-blue text-sm font-medium inline-flex items-center gap-1">
                  Weiterlesen <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}