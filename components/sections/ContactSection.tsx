import { SectionHeading } from '@/components/ui/section-heading'
import { SectionReveal } from '@/components/ui/section-reveal'

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-blush-100 py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Booking"
          title="Reserve Your Makeup Session"
          description="Share your event details and we will get back with availability, package options, and a personalized consultation."
        />

        <SectionReveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="space-y-5 rounded-3xl border border-blush-200 bg-white p-7 shadow-sm sm:p-8">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-stone-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-blush-300 bg-ivory px-4 py-3 text-stone-800 outline-none transition focus:border-gold-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-stone-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-blush-300 bg-ivory px-4 py-3 text-stone-800 outline-none transition focus:border-gold-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-stone-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-blush-300 bg-ivory px-4 py-3 text-stone-800 outline-none transition focus:border-gold-500"
                  placeholder="Tell us about your occasion, date, and preferred look"
                />
              </div>

              <button
                type="submit"
                className="inline-flex rounded-full bg-gold-500 px-7 py-3 text-sm font-medium tracking-[0.15em] text-white uppercase transition hover:bg-gold-600"
              >
                Book Now
              </button>
            </form>

            <div className="rounded-3xl border border-blush-200 bg-ivory p-7 shadow-sm sm:p-8">
              <h3 className="font-serif text-3xl text-stone-900">Let&apos;s Connect</h3>
              <p className="mt-4 text-stone-600">
                We offer makeup bookings across bridal events, private parties, and editorial sessions.
              </p>
              <div className="mt-8 space-y-5 text-stone-700">
                <div>
                  <p className="text-sm tracking-[0.18em] text-gold-600 uppercase">Phone</p>
                  <p className="mt-1 text-lg">+91 98765 43210</p>
                </div>
                <div>
                  <p className="text-sm tracking-[0.18em] text-gold-600 uppercase">Email</p>
                  <p className="mt-1 text-lg">hello@radianttouchstudio.com</p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
