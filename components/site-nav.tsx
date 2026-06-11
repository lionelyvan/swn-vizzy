'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/exposition', label: 'Exposition' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/laboratoire', label: 'Laboratoire' },
  { href: '/contact', label: 'Contact' },
]

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/swn-character.png"
            alt="Logo SWN"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
          />
          <span className="font-heading text-2xl tracking-wider text-swn-green text-glow-green">
            SWN
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`rounded-full px-4 py-2 font-marker text-sm tracking-wide transition-colors ${
                    active
                      ? 'bg-swn-green text-primary-foreground'
                      : 'text-foreground/80 hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-4 py-3 md:hidden">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 font-marker text-base tracking-wide ${
                    active
                      ? 'bg-swn-green text-primary-foreground'
                      : 'text-foreground/80 hover:bg-secondary'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </header>
  )
}
