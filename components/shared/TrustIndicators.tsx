import { Shield, Zap, Headphones, RotateCcw } from 'lucide-react'
import { TRUST_BADGES } from '@/lib/constants'

const iconMap = {
  Shield,
  Zap,
  Headphones,
  RotateCcw,
}

export default function TrustIndicators() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {TRUST_BADGES.map((badge) => {
        const Icon = iconMap[badge.icon as keyof typeof iconMap]
        return (
          <div key={badge.label} className="glass-card p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-3">
              <Icon className="w-6 h-6 text-brand-blue" />
            </div>
            <div className="font-medium text-white text-sm">{badge.label}</div>
            <div className="text-xs text-zinc-500 mt-1">{badge.sub}</div>
          </div>
        )
      })}
    </div>
  )
}