import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Flame, Sparkles, Palette } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* HERO */}
      <section className="relative flex flex-col items-center gap-8 py-14 sm:py-20 lg:flex-row lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block rounded-full border border-swn-pink/40 bg-swn-pink/10 px-4 py-1.5 font-marker text-xs tracking-wider text-swn-pink">
            SWN · ORIGINAL · CREW
          </span>
          <h1 className="mt-5 font-heading text-5xl leading-[0.95] tracking-wide text-balance sm:text-7xl">
            UN VISAGE.
            <br />
            <span className="text-swn-green text-glow-green">UNE ATTITUDE.</span>
            <br />
            <span className="text-swn-pink text-glow-pink">UNE MARQUE.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground lg:mx-0">
            Design audacieux et expressif, inspiré du street art. SWN représente
            l&apos;énergie créative et l&apos;originalité.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link
              href="/galerie"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-swn-green px-6 font-marker tracking-wide text-primary-foreground transition-transform hover:scale-105"
            >
              Voir la galerie
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/exposition"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-secondary px-6 font-marker tracking-wide transition-colors hover:bg-muted"
            >
              L&apos;exposition
            </Link>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,140,255,0.18),transparent_65%)]" />
          <Image
            src="/swn-face.jpeg"
            alt="Personnage emblématique SWN au visage vert, cheveux roses et flammes bleues"
            width={560}
            height={560}
            priority
            className="mx-auto w-full max-w-md object-contain drop-shadow-[0_0_40px_rgba(0,199,137,0.35)]"
          />
        </div>
      </section>

      {/* PALETTE STRIP */}
      <section className="grid grid-cols-2 gap-3 py-6 sm:grid-cols-4">
        {[
          { name: 'GREEN', hex: '', cls: 'bg-swn-green' },
          { name: 'PINK', hex: '', cls: 'bg-swn-pink' },
          { name: 'BLUE', hex: '', cls: 'bg-swn-blue' },
          { name: 'WHITE', hex: '', cls: 'bg-foreground' },
          
        ].map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3"
          >
            <span className={`h-10 w-10 shrink-0 rounded-full ${c.cls}`} />
            <div className="leading-tight">
              <p className="font-marker text-sm tracking-wide">{c.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{c.hex}</p>
            </div>
          </div>
        ))}
      </section>

      {/* SECTIONS GRID */}
      <section className="py-12">
        <h2 className="mb-8 font-heading text-3xl tracking-wide sm:text-4xl">
          EXPLORE L&apos;UNIVERS
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              href: '/exposition',
              title: 'Exposition',
              desc: 'Les pièces phares de la marque, mises en scène.',
              icon: Flame,
              color: 'text-swn-pink',
            },
            {
              href: '/galerie',
              title: 'Galerie',
              desc: 'Fonds d’écran à télécharger pour mobile & desktop.',
              icon: Palette,
              color: 'text-swn-green',
            },
            {
              href: '/laboratoire',
              title: 'Laboratoire',
              desc: 'Les expérimentations et concepts en cours.',
              icon: Sparkles,
              color: 'text-swn-blue',
            },
          ].map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-colors hover:border-swn-green/50"
            >
              <s.icon className={`h-8 w-8 ${s.color}`} />
              <h3 className="mt-4 font-heading text-2xl tracking-wide">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-marker text-sm text-foreground/80 transition-transform group-hover:translate-x-1">
                Découvrir <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
