import { PageHeader } from '@/components/page-header'
import { FlaskConical, Beaker, Atom, Wand } from 'lucide-react'

export const metadata = {
  title: 'Laboratoire — SWN',
  description: 'Les expérimentations et concepts en cours de la marque SWN.',
}

const experiments = [
  {
    icon: FlaskConical,
    tag: 'WIP',
    title: 'Variations de flammes',
    desc: 'Exploration de nouvelles formes de flammes : bleu électrique, dégradés et textures graffiti.',
    color: 'text-swn-blue',
  },
  {
    icon: Beaker,
    tag: 'CONCEPT',
    title: 'Palette étendue',
    desc: 'Recherche de couleurs complémentaires au trio vert / rose / bleu sans casser l’identité.',
    color: 'text-swn-green',
  },
  {
    icon: Atom,
    tag: 'PROTO',
    title: 'Personnages dérivés',
    desc: 'Nouvelles expressions et attitudes du visage emblématique pour la prochaine collection.',
    color: 'text-swn-pink',
  },
  {
    icon: Wand,
    tag: 'R&D',
    title: 'Textures & matières',
    desc: 'Tests d’impression : brodé, floqué, réfléchissant et sérigraphie sur supports variés.',
    color: 'text-swn-green',
  },
]

export default function LaboratoirePage() {
  return (
    <div>
      <PageHeader
        kicker="R&D CRÉATIVE"
        title="LABORATOIRE"
        description="L’atelier d’expérimentation de SWN. Concepts, prototypes et idées en cours avant d’intégrer la collection."
        accent="blue"
      />

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {experiments.map((e) => (
            <article
              key={e.title}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <e.icon className={`h-8 w-8 ${e.color}`} />
                <span className="rounded-full border border-border bg-secondary px-3 py-1 font-marker text-xs tracking-wider text-muted-foreground">
                  {e.tag}
                </span>
              </div>
              <h2 className="mt-4 font-heading text-2xl tracking-wide">
                {e.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {e.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-swn-blue/30 bg-swn-blue/5 p-8 text-center">
          <h3 className="font-heading text-3xl tracking-wide text-swn-blue">
            CE LABO ÉVOLUE
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Reviens régulièrement : chaque expérimentation validée devient une
            future pièce de la marque SWN.
          </p>
        </div>
      </section>
    </div>
  )
}
