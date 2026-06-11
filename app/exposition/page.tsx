import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'Exposition — SWN',
  description: 'Les pièces phares de la marque SWN mises en scène.',
}

const pieces = [
  {
    id: '01',
    name: 'VIZZY ORIGINAL',
    medium: 'Sérigraphie · édition limitée',
    color: 'bg-swn-green',
  },
  {
    id: '02',
    name: 'BLUE FLAMES',
    medium: 'Acrylique sur toile',
    color: 'bg-swn-blue',
  },
  {
    id: '03',
    name: 'PINK ATTITUDE',
    medium: 'Impression numérique',
    color: 'bg-swn-pink',
  },
  {
    id: '04',
    name: 'MONOCHROME',
    medium: 'Encre sur papier',
    color: 'bg-foreground',
  },
  {
    id: '05',
    name: 'STREET CREW',
    medium: 'Collage mixte',
    color: 'bg-swn-green',
  },
  {
    id: '06',
    name: 'NÉGATIF',
    medium: 'Sérigraphie inversée',
    color: 'bg-swn-pink',
  },
]

export default function ExpositionPage() {
  return (
    <div>
      <PageHeader
        kicker="GALERIE PHYSIQUE"
        title="EXPOSITION"
        description="Les pièces phares de SWN, mises en scène. Une sélection qui incarne l’énergie créative et l’attitude de la marque."
        accent="pink"
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-secondary">
                <span
                  className={`h-28 w-28 rounded-full ${p.color} opacity-80 blur-[2px] transition-transform duration-500 group-hover:scale-125`}
                />
                <span className="absolute left-4 top-4 font-heading text-3xl tracking-wider text-foreground/30">
                  {p.id}
                </span>
              </div>
              <div className="p-5">
                <h2 className="font-heading text-2xl tracking-wide">{p.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.medium}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Les visuels définitifs des œuvres seront ajoutés ici. Remplace les
          blocs colorés par tes propres images.
        </p>
      </section>
    </div>
  )
}
