"use client"

import { useState } from "react"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import {
  Download,
  Smartphone,
  Monitor,
  ImageIcon,
} from "lucide-react"

type Format = "mobile" | "desktop"

const wallpapers = [
  {
    id: "wp1",
    name: "SWN Face",
    format: "mobile",
    file: "swn-face.jpeg",
  },
  {
    id: "wp2",
    name: "Character",
    format: "mobile",
    file: "swn-character.png",
  },
  {
    id: "wp3",
    name: "Green Pink",
    format: "mobile",
    file: "green-pink.png",
  },
  {
    id: "wp4",
    name: "Brand Sheet",
    format: "desktop",
    file: "brand-sheet.jpeg",
  },
  {
    id: "wp5",
    name: "Blue Red",
    format: "desktop",
    file: "blue-red.jpeg",
  },
  {
    id: "wp6",
    name: "Yellow Green",
    format: "desktop",
    file: "yellow-green.png",
  },
]

export default function GaleriePage() {
  const [filter, setFilter] = useState<"all" | Format>("all")

  const filteredWallpapers =
    filter === "all"
      ? wallpapers
      : wallpapers.filter((item) => item.format === filter)

  return (
    <div>
      <PageHeader
        kicker="FONDS D'ÉCRAN"
        title="GALERIE"
        description="Découvrez l'univers visuel SWN et téléchargez gratuitement vos créations préférées."
        accent="green"
      />

      <section className="mx-auto max-w-7xl px-4 py-12">

        {/* FILTRES */}

        <div className="mb-10 flex flex-wrap justify-center gap-3">

          <button
            onClick={() => setFilter("all")}
            className={`rounded-full px-5 py-2 text-sm transition ${
              filter === "all"
                ? "bg-swn-green text-black"
                : "border border-border"
            }`}
          >
            Tout
          </button>

          <button
            onClick={() => setFilter("mobile")}
            className={`rounded-full px-5 py-2 text-sm transition ${
              filter === "mobile"
                ? "bg-swn-green text-black"
                : "border border-border"
            }`}
          >
            Mobile
          </button>

          <button
            onClick={() => setFilter("desktop")}
            className={`rounded-full px-5 py-2 text-sm transition ${
              filter === "desktop"
                ? "bg-swn-green text-black"
                : "border border-border"
            }`}
          >
            Desktop
          </button>

        </div>

        {/* GALERIE */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {filteredWallpapers.map((wp) => (
            <article
              key={wp.id}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className={`relative overflow-hidden ${
                  wp.format === "mobile"
                    ? "aspect-[9/16]"
                    : "aspect-video"
                }`}
              >
                <Image
                  src={`/${wp.file}`}
                  alt={wp.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">

                  {wp.format === "mobile" ? (
                    <Smartphone className="h-3 w-3" />
                  ) : (
                    <Monitor className="h-3 w-3" />
                  )}

                  {wp.format === "mobile"
                    ? "Mobile"
                    : "Desktop"}

                </span>
              </div>

              <div className="flex items-center justify-between p-4">

                <div>

                  <h2 className="font-marker text-lg tracking-wide">
                    {wp.name}
                  </h2>

                  <p className="text-xs text-muted-foreground">
                    {wp.format === "mobile"
                      ? "1080 × 1920"
                      : "1920 × 1080"}
                  </p>

                </div>

                <a
                  href={`/${wp.file}`}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-swn-green px-4 py-2 text-sm font-medium text-black transition hover:scale-105"
                >
                  <Download className="h-4 w-4" />
                  Télécharger
                </a>

              </div>
            </article>
          ))}
        </div>

        {/* SECTION BAS */}

        <div className="mt-16 rounded-3xl border border-border bg-card p-8 text-center">

          <ImageIcon className="mx-auto mb-4 h-10 w-10 text-swn-green" />

          <h3 className="mb-3 font-heading text-2xl">
            Univers SWN
          </h3>

          <p className="mx-auto max-w-2xl text-muted-foreground">
            Chaque création SWN représente une identité visuelle unique,
            inspirée du street art, de la culture urbaine et de la liberté
            créative.
          </p>

        </div>
      </section>
    </div>
  )
}