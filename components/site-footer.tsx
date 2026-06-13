import Link from 'next/link'
import { Camera } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      {/* tag marquee */}
      <div className="overflow-hidden border-b border-border py-3">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-heading text-xl tracking-widest">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-8">
              <span className="text-swn-green">SWN</span>
              <span className="text-swn-pink">UN VISAGE</span>
              <span className="text-swn-blue">UNE ATTITUDE</span>
              <span className="text-swn-green">UNE MARQUE</span>
              <span className="text-swn-pink">STREET ART</span>
              <span className="text-swn-blue">ORIGINAL · CREW</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-3xl tracking-wider text-swn-green text-glow-green">
            SWN
          </p>
          <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Design audacieux et expressif, inspiré du street art. SWN représente
            l&apos;énergie créative et l&apos;originalité sans compromis.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <div className="flex gap-3">
            {[
              { href: '/exposition', label: 'Exposition' },
              { href: '/galerie', label: 'Galerie' },
              { href: '/laboratoire', label: 'Laboratoire' },
              { href: '/contact', label: 'Contact' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <a
            href="https://instagram.com/swndesign_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-swn-pink"
          >
            <Camera className="h-4 w-4" />
            @swndesign
          </a>
        </div>
      </div>

      <p className="pb-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SWN — Tous droits réservés.
      </p>
    </footer>
  )
}
