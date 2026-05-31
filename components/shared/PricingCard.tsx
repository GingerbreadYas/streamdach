'use client'

import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { BRAND } from '@/lib/constants'

interface PricingCardProps {
  name: string
  price: string
  period: string
  features: string[]
  popular?: boolean
  index: number
}

export default function PricingCard({ name, price, period, features, popular, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative glass-card p-8 ${popular ? 'border-brand-blue/50 ring-1 ring-brand-blue/20' : ''}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-brand-blue text-brand-black text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
            <Zap className="w-3 h-3" />
            BELIEBTESTE Wahl
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-white">€{price}</span>
        </div>
        <p className="text-sm text-zinc-500 mt-1">{period}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
            <Check className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={BRAND.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-center py-4 rounded-xl font-semibold transition-all ${
          popular
            ? 'bg-brand-blue text-brand-black hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]'
            : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
        }`}
      >
        Jetzt bestellen
      </a>
    </motion.div>
  )
}