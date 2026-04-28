const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.62a1.12 1.12 0 1 1 0 2.25 1.12 1.12 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7.01 3.5 3.5 0 0 0 0-7Z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M13.4 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.95.28-1.6 1.66-1.6h1.78V4.02A23.78 23.78 0 0 0 14.2 3c-2.57 0-4.34 1.55-4.34 4.4v2.2H7v3.2h2.86V22h3.54Z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M21.2 7.2a2.7 2.7 0 0 0-1.9-1.9C17.6 5 12 5 12 5s-5.6 0-7.3.3a2.7 2.7 0 0 0-1.9 1.9C2.5 8.9 2.5 12 2.5 12s0 3.1.3 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.3 7.3.3 7.3.3s5.6 0 7.3-.3a2.7 2.7 0 0 0 1.9-1.9c.3-1.7.3-4.8.3-4.8s0-3.1-.3-4.8Zm-11.3 8V8.8L15.4 12l-5.5 3.2Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-blush-200 bg-white py-8">
      <div className="container-shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-stone-600">© {new Date().getFullYear()} Radiant Touch. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.name}
              className="rounded-full border border-blush-300 p-2.5 text-stone-700 transition hover:border-gold-400 hover:text-gold-600"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
