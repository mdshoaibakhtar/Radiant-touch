'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bars3Icon, SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { navItems } from '@/lib/site-data'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'border-b border-blush-200/80 bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <button
          type="button"
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 text-left"
          aria-label="Go to home"
        >
          <span className="flex size-10 items-center justify-center rounded-full border border-gold-400/60 bg-white/70 text-gold-500">
            <SparklesIcon className="size-5" />
          </span>
          <span className="font-serif text-2xl tracking-wide text-stone-900">Radiant Touch</span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="text-sm tracking-wide text-stone-700 transition-colors duration-300 hover:text-gold-500"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => handleNavClick('#contact')}
          className="hidden rounded-full border border-gold-500 bg-gold-500 px-5 py-2 text-sm font-medium tracking-wide text-white transition hover:bg-gold-600 lg:inline-flex"
        >
          Book Now
        </button>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="rounded-full border border-blush-300 bg-white/90 p-2 text-stone-700 lg:hidden"
          aria-label="Open menu"
        >
          <Bars3Icon className="size-6" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-50 bg-stone-900/30 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-[84%] max-w-sm bg-white p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-10 flex items-center justify-between">
                <div className="font-serif text-2xl text-stone-900">Radiant Touch</div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border border-blush-300 p-2"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="size-5" />
                </button>
              </div>

              <div className="space-y-5">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-lg text-stone-800"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => handleNavClick('#contact')}
                className="mt-10 w-full rounded-full bg-gold-500 px-5 py-3 text-sm font-medium tracking-wide text-white"
              >
                Book Appointment
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
