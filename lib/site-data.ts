export type NavItem = {
  label: string
  href: string
}

export type ServiceItem = {
  title: string
  description: string
}

export type GalleryItem = {
  src: string
  alt: string
}

export type TestimonialItem = {
  name: string
  role: string
  quote: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const services: ServiceItem[] = [
  {
    title: 'Bridal Makeup',
    description:
      'A timeless, camera-ready bridal look tailored to your skin tone, dress palette, and wedding lighting.',
  },
  {
    title: 'Party Makeup',
    description:
      'Soft glam or statement glam with flawless blending, luminous skin prep, and long-wear finish.',
  },
  {
    title: 'Photoshoot Makeup',
    description:
      'Editorial precision for studio and outdoor shoots, designed to perform beautifully under every lens.',
  },
]

export const galleryImages: GalleryItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    alt: 'Bride with soft glam makeup look',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    alt: 'Close-up beauty portrait with nude tones',
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    alt: 'Elegant party makeup with glowing skin',
  },
  {
    src: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?auto=format&fit=crop&w=900&q=80',
    alt: 'Model with warm-toned photoshoot makeup',
  },
  {
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
    alt: 'Professional makeup detail with soft highlight',
  },
  {
    src: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    alt: 'Luxury beauty portrait in natural light',
  },
]

export const testimonials: TestimonialItem[] = [
  {
    name: 'Ananya Kapoor',
    role: 'Bride',
    quote:
      'My wedding makeup looked flawless in person and in every photo. The finish stayed radiant all day without feeling heavy.',
  },
  {
    name: 'Rhea Malhotra',
    role: 'Fashion Client',
    quote:
      'Radiant Touch understood my face shape and skin texture instantly. The final look was elegant, modern, and exactly on-brief.',
  },
  {
    name: 'Sanya Verma',
    role: 'Event Client',
    quote:
      'The attention to detail was incredible. I felt confident, polished, and still completely like myself.',
  },
]
