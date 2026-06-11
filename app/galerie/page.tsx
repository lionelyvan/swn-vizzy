'use client'

import { PageHeader } from '@/components/page-header'
import { Download, Smartphone, Monitor } from 'lucide-react'

type Format = 'mobile' | 'desktop'

const wallpapers: {
  id: string
  name: string
  format: Format
  gradient: string
}[] = [
  {
    id: 'wp1',
    name: 'Green Energy',
    format: 'mobile',
    gradient: 'from-swn-green/40 to-background',
  },
  {
    id: 'wp2',
    name: 'Pink Attitude',
    format: 'mobile',
    gradient: 'from-swn-pink/40 to-background',
  },
  {
    id: 'wp3',
    name: 'Blue Flames',
    format: 'mobile',
    gradient: 'from-swn-blue/40 to-background',
  },
  {
    id: 'wp4',
    name: 'Crew Desktop',
    format: 'desktop',
    gradient: 'from-swn-green/30 to-swn-blue/20',
  },
  {
    id: 'wp5',
    name: 'Original Desktop',
    format: 'desktop',
    gradient: 'from-swn-pink/30 to-background',
  },
  {
    id: 'wp6',
    name: 'Street Desktop',
    format: 'desktop',
    gradient: 'from-swn-blue/30 to-swn-green/20',
  },
]

export default function GaleriePage() {
  return (
    <div>
      <PageHeader
        kicker="FONDS D’ÉCRAN"
        title="GALERIE"
        description="Habille ton écran aux couleurs de SWN. Fonds d’écran mobile et desktop à télécharger gratuitement."
        accent="green"
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {wallpapers.map((wp) => (
            <article
              key={wp.id}
              className="overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div
                className={`relative flex items-center justify-center bg-gradient-to-br ${wp.gradient} ${
                  wp.format === 'mobile' ? 'aspect-[9/16]' : 'aspect-video'
                }`}
              >
                <span className="font-heading text-2xl tracking-wider text-foreground/40">
                  SWN
                </span>
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-background/70 px-2.5 py-1 text-xs text-foreground/80 backdrop-blur">
                  {wp.format === 'mobile' ? (
                    <Smartphone className="h-3 w-3" />
                  ) : (
                    <Monitor className="h-3 w-3" />
                  )}
                  {wp.format === 'mobile' ? 'Mobile' : 'Desktop'}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <div className="leading-tight">
                  <h2 className="font-marker tracking-wide">{wp.name}</h2>
                  <p className="text-xs text-muted-foreground">
                    {wp.format === 'mobile' ? '1080 × 1920' : '1920 × 1080'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      'Remplace ce placeholder par ton vrai fichier de fond d’écran pour activer le téléchargement.',
                    )
                  }
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-swn-green px-4 font-marker text-sm tracking-wide text-primary-foreground transition-transform hover:scale-105"
                >
                  <Download className="h-4 w-4" />
                  Télécharger
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          <span className="font-mono text-foreground"></span> 
        </p>
      </section>
    </div>
  )
}
