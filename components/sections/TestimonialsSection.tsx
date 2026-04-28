'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { SectionReveal } from '@/components/ui/section-reveal'
import { testimonials } from '@/lib/site-data'

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = testimonials.length

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % total)
    }, 5500)

    return () => clearInterval(timer)
  }, [total])

  const activeTestimonial = useMemo(() => testimonials[activeIndex], [activeIndex])

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + total) % total)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % total)
  }

  return (
    <section id="testimonials" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved By Brides & Beauty Clients"
          description="Kind words from clients who trusted Radiant Touch for their most special moments."
        />

        <SectionReveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-blush-200 bg-ivory p-8 text-center shadow-sm sm:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <p className="mb-5 text-gold-500">★★★★★</p>
                <p className="font-serif text-2xl leading-relaxed text-stone-900 sm:text-3xl">&ldquo;{activeTestimonial.quote}&rdquo;</p>
                <p className="mt-6 text-lg font-medium text-stone-800">{activeTestimonial.name}</p>
                <p className="text-sm tracking-wider text-stone-500 uppercase">{activeTestimonial.role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goToPrevious}
                className="rounded-full border border-blush-300 px-4 py-2 text-sm text-stone-700 transition hover:border-gold-400 hover:text-gold-600"
              >
                Prev
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Go to testimonial ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      activeIndex === index ? 'w-6 bg-gold-500' : 'bg-blush-300'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={goToNext}
                className="rounded-full border border-blush-300 px-4 py-2 text-sm text-stone-700 transition hover:border-gold-400 hover:text-gold-600"
              >
                Next
              </button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
