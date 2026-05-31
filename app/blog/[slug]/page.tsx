import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  return {
    title: `${resolvedParams.slug.replace(/-/g, ' ')} | StreamDACH Blog`,
    description: 'Blog-Artikel auf StreamDACH.',
  }
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params
  return (
    <section className="section-padding pt-32">
      <div className="container-tight px-4 max-w-3xl">
        <Link href="/blog" className="text-zinc-400 hover:text-brand-blue inline-flex items-center gap-2 mb-8">
          <ArrowLeft className="w-4 h-4" /> Zurück zum Blog
        </Link>
        <h1 className="heading-1 mb-6 capitalize">{resolvedParams.slug.replace(/-/g, ' ')}</h1>
        <p className="text-zinc-400">
          Dies ist ein Platzhalter für den vollständigen Blog-Artikel. 
          In der Produktion wird hier MDX oder CMS-Content gerendert.
        </p>
      </div>
    </section>
  )
}
