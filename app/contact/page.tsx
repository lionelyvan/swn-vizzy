import { PageHeader } from '@/components/page-header'
import { Mail, Camera, MessageCircle, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact — SWN',
  description: 'Contacte la marque SWN par email ou sur les réseaux sociaux.',
}

const socials = [
  {
    icon: Camera,
    label: 'Instagram',
    handle: '@swndesign',
    href: 'https://instagram.com/swndesign_',
    color: 'hover:border-swn-pink/50 hover:text-swn-pink',
  },
  {
    icon: MessageCircle,
    label: 'TikTok',
    handle: '@swndesign',
    href: 'https://tiktok.com/@swndesign',
    color: 'hover:border-swn-blue/50 hover:text-swn-blue',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'swndesign.contact@gmail.com',
    href: 'mailto:swndesign.contact@gmail.com',
    color: 'hover:border-swn-green/50 hover:text-swn-green',
  },
]

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        kicker="ON DISCUTE ?"
        title="CONTACT"
        description="Une collab, une question, une commande ? Écris-nous directement par email ou rejoins-nous sur les réseaux."
        accent="pink"
      />

      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-3 rounded-3xl border border-border bg-card p-6 text-center transition-colors ${s.color}`}
            >
              <s.icon className="h-8 w-8" />
              <div className="leading-tight">
                <p className="font-marker tracking-wide text-foreground">
                  {s.label}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.handle}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Big email CTA */}
        <div className="mt-8 rounded-3xl border border-swn-green/30 bg-swn-green/5 p-8 text-center">
          <h2 className="font-heading text-3xl tracking-wide text-swn-green text-glow-green">
            ÉCRIS-NOUS
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            La meilleure façon de nous joindre pour toute demande sérieuse.
          </p>
          <a
            href="mailto:swndesign.contact@gmail.com"
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-swn-green px-7 font-marker tracking-wide text-primary-foreground transition-transform hover:scale-105"
          >
            <Mail className="h-4 w-4" />
            swndesign.contact@gmail.com
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-swn-blue" />
          Basé en France · Expéditions internationales
        </div>
      </section>
    </div>
  )
}
