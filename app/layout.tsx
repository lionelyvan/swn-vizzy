import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Bangers, Permanent_Marker } from 'next/font/google'
import './globals.css'
import { Intro } from '@/components/intro'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const bangers = Bangers({
  variable: '--font-bangers',
  weight: '400',
  subsets: ['latin'],
})
const marker = Permanent_Marker({
  variable: '--font-marker',
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SWN — Street Wear Original',
  description:
    'SWN. Un visage, une attitude, une marque. Galerie street-art, expositions, laboratoire créatif et fonds d’écran à télécharger.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#00c789',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`dark ${geistSans.variable} ${geistMono.variable} ${bangers.variable} ${marker.variable} bg-background`}
    >
      <body className="font-sans antialiased grain min-h-dvh">
        <Intro />
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
