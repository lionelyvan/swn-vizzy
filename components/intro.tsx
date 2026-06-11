'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Intro() {
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Allow finishing only once per session for a snappy feel
    const seen = sessionStorage.getItem('swn-intro')
    if (seen) {
      setHidden(true)
      return
    }
    const t1 = setTimeout(() => setDone(true), 2600)
    const t2 = setTimeout(() => {
      setHidden(true)
      sessionStorage.setItem('swn-intro', '1')
    }, 3300)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (hidden) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background ${
        done ? 'animate-loader-out' : ''
      }`}
    >
      {/* radial spotlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,199,137,0.12),transparent_60%)]" />

      {/* Character spray reveal */}
      <div className="relative animate-spray">
        <div className="absolute -inset-10 rounded-full bg-swn-green/10 blur-3xl" />
        <div className="relative h-48 w-48 overflow-hidden rounded-full ring-2 ring-swn-green/60 drop-shadow-[0_0_30px_rgba(0,199,137,0.45)] sm:h-64 sm:w-64">
          <Image
            src="/swn-face.jpeg"
            alt=""
            width={320}
            height={320}
            priority
            className="h-full w-full scale-110 object-cover"
          />
        </div>
        {/* paint drips under the face */}
        <div className="absolute inset-x-0 -bottom-2 flex justify-center gap-3">
          {[
            { c: 'bg-swn-pink', h: '44px', d: '0.2s' },
            { c: 'bg-swn-green', h: '64px', d: '0.35s' },
            { c: 'bg-swn-blue', h: '38px', d: '0.5s' },
            { c: 'bg-swn-pink', h: '54px', d: '0.65s' },
          ].map((drip, i) => (
            <span
              key={i}
              className={`block w-1.5 rounded-b-full ${drip.c} animate-drip`}
              style={
                {
                  ['--drip-h' as string]: drip.h,
                  animationDelay: drip.d,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>

      {/* Wordmark */}
      <h1 className="mt-12 font-heading text-5xl tracking-widest text-swn-green text-glow-green sm:text-6xl">
        SWN
      </h1>

      {/* Loading bar — tag style */}
      <div className="mt-6 flex w-56 flex-col items-center gap-2">
        <div className="relative h-2.5 w-full overflow-hidden rounded-full border border-border bg-secondary">
          <div className="animate-bar-fill h-full rounded-full bg-gradient-to-r from-swn-green via-swn-blue to-swn-pink" />
        </div>
        <span className="font-marker text-xs tracking-wider text-muted-foreground">
          chargement de la crew…
        </span>
      </div>
    </div>
  )
}
