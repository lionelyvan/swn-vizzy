export function PageHeader({
  kicker,
  title,
  description,
  accent = 'green',
}: {
  kicker: string
  title: string
  description: string
  accent?: 'green' | 'pink' | 'blue'
}) {
  const accentMap = {
    green: 'text-swn-green text-glow-green border-swn-green/40 bg-swn-green/10',
    pink: 'text-swn-pink text-glow-pink border-swn-pink/40 bg-swn-pink/10',
    blue: 'text-swn-blue border-swn-blue/40 bg-swn-blue/10',
  }
  const titleColor = {
    green: 'text-swn-green text-glow-green',
    pink: 'text-swn-pink text-glow-pink',
    blue: 'text-swn-blue',
  }
  return (
    <header className="border-b border-border py-12 text-center sm:py-16">
      <span
        className={`inline-block rounded-full border px-4 py-1.5 font-marker text-xs tracking-wider ${accentMap[accent]}`}
      >
        {kicker}
      </span>
      <h1
        className={`mt-5 font-heading text-5xl tracking-wide text-balance sm:text-6xl ${titleColor[accent]}`}
      >
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-pretty px-4 leading-relaxed text-muted-foreground">
        {description}
      </p>
    </header>
  )
}
