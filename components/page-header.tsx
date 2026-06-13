export function PageHeader({
  kicker,
  title,
  description,
  accent = "green",
}: {
  kicker: string
  title: string
  description: string
  accent?: "green" | "pink" | "blue"
}) {
  const accentMap = {
    green:
      "text-swn-green text-glow-green border-swn-green/40 bg-swn-green/10",
    pink:
      "text-swn-pink text-glow-pink border-swn-pink/40 bg-swn-pink/10",
    blue:
      "text-swn-blue border-swn-blue/40 bg-swn-blue/10",
  }

  const titleColor = {
    green: "text-swn-green text-glow-green",
    pink: "text-swn-pink text-glow-pink",
    blue: "text-swn-blue",
  }

  return (
    <header className="relative overflow-hidden border-b border-border py-16 text-center sm:py-24">

      {/* Effets de fond */}

      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-swn-green/10 blur-[120px]" />

      <div className="absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-swn-pink/10 blur-[120px]" />

      <div className="absolute bottom-0 left-1/2 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-swn-blue/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4">

        <span
          className={`inline-block rounded-full border px-5 py-2 font-marker text-xs tracking-[0.25em] uppercase ${accentMap[accent]}`}
        >
          {kicker}
        </span>

        <h1
          className={`mt-6 font-heading text-5xl tracking-wide text-balance sm:text-6xl lg:text-7xl ${titleColor[accent]}`}
        >
          {title}
        </h1>

        <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-swn-green to-transparent" />

        <p className="mx-auto mt-6 max-w-2xl text-pretty px-4 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>

      </div>
    </header>
  )
}