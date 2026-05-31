'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'
import { NAV_LINKS, BRAND } from '@/lib/constants'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="container-tight px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-indigo-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-brand-black" />
            </div>
            <span className="text-xl font-bold tracking-tight group-hover:text-brand-blue transition-colors">
              Stream<span className="text-brand-blue">DACH</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.label} 
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.href ? (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                )}

                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 glass-card p-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-zinc-300 hover:text-brand-blue hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-6 flex items-center gap-2"
            >
              <span>WhatsApp</span>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-dark border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.href ? (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-lg font-medium text-zinc-300 hover:text-white py-2"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <div className="text-lg font-medium text-zinc-400 py-2">{link.label}</div>
                  )}
                  {link.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm text-zinc-500 hover:text-brand-blue py-2 pl-4"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                href={BRAND.whatsappLink}
                target="_blank"
                className="btn-primary w-full text-center mt-4 block"
              >
                WhatsApp Support
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}