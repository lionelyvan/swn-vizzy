'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

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
    <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        {/* LOGO */}

        <Link
          href="/"
          className="group relative flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 rounded-full bg-swn-green/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <Image
            src="/swn-character.png"
            alt="Logo SWN"
            width={42}
            height={42}
            className="relative h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />

          <span className="font-heading text-2xl tracking-wider text-swn-green text-glow-green">
            SWN
          </span>
        </Link>

        {/* DESKTOP */}

        <ul className="hidden items-center gap-2 md:flex">
          {links.map((l) => {
            const active = pathname === l.href

            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`
                    relative
                    rounded-full
                    px-4
                    py-2
                    font-marker
                    text-sm
                    tracking-wide
                    transition-all
                    duration-300
                    ${
                      active
                        ? 'bg-swn-green text-black shadow-lg shadow-swn-green/20'
                        : 'text-foreground/80 hover:bg-secondary hover:text-foreground'
                    }
                  `}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA DESKTOP */}

        <div className="hidden md:block">
          <Link
            href="/galerie"
            className="inline-flex items-center gap-2 rounded-full bg-swn-pink px-5 py-2.5 font-marker text-sm tracking-wide text-white transition-all duration-300 hover:scale-105"
          >
            Explorer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* MOBILE BUTTON */}

        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

      </nav>

      {/* MOBILE MENU */}

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          md:hidden
          ${open ? 'max-h-[500px]' : 'max-h-0'}
        `}
      >
        <div className="border-t border-border bg-card/70 backdrop-blur-xl">

          <ul className="flex flex-col gap-2 p-4">

            {links.map((l) => {
              const active = pathname === l.href

              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`
                      block
                      rounded-2xl
                      px-4
                      py-3
                      font-marker
                      transition-all
                      ${
                        active
                          ? 'bg-swn-green text-black'
                          : 'hover:bg-secondary'
                      }
                    `}
                  >
                    {l.label}
                  </Link>
                </li>
              )
            })}

            <Link
              href="/galerie"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-swn-pink px-4 py-3 font-marker text-white"
            >
              Explorer SWN
              <ArrowRight className="h-4 w-4" />
            </Link>

          </ul>
        </div>
      </div>
    </header>
  )
}