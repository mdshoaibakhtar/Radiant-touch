'use client'

import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import { SectionHeading } from '@/components/ui/section-heading'
import { SectionReveal } from '@/components/ui/section-reveal'
import { services } from '@/lib/site-data'

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Services"
          title="Signature Makeup Experiences"
          description="Each package is designed to blend precision artistry, skin-friendly products, and long-lasting sophistication."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                className="group h-full rounded-3xl border border-blush-200 bg-ivory p-7 shadow-sm"
              >
                <span className="mb-5 inline-flex rounded-full border border-gold-300 bg-white p-3 text-gold-500">
                  <SparklesIcon className="size-5" />
                </span>
                <h3 className="font-serif text-2xl text-stone-900">{service.title}</h3>
                <p className="mt-4 text-stone-600">{service.description}</p>
                <div className="mt-6 h-0.5 w-12 bg-gold-400 transition-all duration-300 group-hover:w-20" />
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
