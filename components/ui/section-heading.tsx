type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeading({ eyebrow, title, description, centered = true }: SectionHeadingProps) {
  return (
    <div className={centered ? 'mx-auto mb-12 max-w-2xl text-center' : 'mb-8 max-w-2xl'}>
      <p className="font-serif text-sm tracking-[0.25em] text-gold-500 uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl text-stone-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-stone-600 sm:text-lg">{description}</p> : null}
    </div>
  )
}
