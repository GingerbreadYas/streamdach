'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={BRAND.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium text-sm">
        WhatsApp Support
      </span>
    </motion.a>
  )
}