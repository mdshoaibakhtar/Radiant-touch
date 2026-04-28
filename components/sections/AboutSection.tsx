import Image from 'next/image'
import { SectionHeading } from '@/components/ui/section-heading'
import { SectionReveal } from '@/components/ui/section-reveal'

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-ivory py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About"
          title="Artistry Rooted In Elegance"
          description="With years of professional experience, Radiant Touch blends modern trends with timeless techniques for every face and occasion."
        />

        <SectionReveal>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative min-h-[380px] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1200&q=80"
                alt="Makeup artist preparing client"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-5 rounded-3xl border border-blush-200 bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-stone-900">Hi, I&apos;m Aisha</h3>
              <p className="text-stone-600">
                I specialize in personalized makeup looks that celebrate natural features while adding polished luxury.
                Every session begins with skin analysis, style alignment, and a tailored beauty plan.
              </p>
              <p className="text-stone-600">
                From traditional bridal artistry to soft editorial glam, my goal is simple: make you feel confident,
                radiant, and authentically you.
              </p>
              <div className="grid gap-4 pt-2 text-sm text-stone-700 sm:grid-cols-2">
                <div className="rounded-2xl bg-blush-100 p-4">
                  <p className="font-serif text-2xl text-gold-600">8+ Years</p>
                  <p>Professional experience</p>
                </div>
                <div className="rounded-2xl bg-blush-100 p-4">
                  <p className="font-serif text-2xl text-gold-600">700+</p>
                  <p>Happy clients served</p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
