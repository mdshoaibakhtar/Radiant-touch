'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden scroll-mt-24">
      <Image
        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1800&q=80"
        alt="Luxury makeup artist at work"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/45 to-stone-900/20" />
      <div className="container-shell relative z-10 pt-20">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 font-serif text-sm tracking-[0.35em] text-gold-200 uppercase">Radiant Touch Studio</p>
          <h1 className="font-serif text-5xl leading-tight text-white sm:text-6xl md:text-7xl">Enhance Your Natural Beauty</h1>
          <p className="mt-6 max-w-xl text-base text-rose-50 sm:text-lg">
            Signature makeup artistry crafted for weddings, editorial shoots, and unforgettable evenings with graceful,
            skin-first beauty.
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-flex rounded-full border border-gold-300 bg-gold-500 px-8 py-3 text-sm font-medium tracking-[0.15em] text-white uppercase transition hover:bg-gold-600"
          >
            Book Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
