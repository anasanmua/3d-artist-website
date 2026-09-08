import React from "react"
import type { Metadata } from 'next'
import { Chakra_Petch, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { headers } from 'next/headers'
import { LanguageProvider } from '@/lib/i18n-provider'
import { localeFromAcceptLanguage, type Locale } from '@/lib/i18n'
import './globals.css'

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: 'Jaime Rosado Garcie | Technical 3D Artist',
  description: 'Professional 3D Artist specializing in VFX, Animation, Rigging, Modeling, and Architectural Visualization',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headerList = await headers()
  const acceptLang = headerList.get('accept-language')
  const initialLocale: Locale = localeFromAcceptLanguage(acceptLang)

  return (
    <html lang={initialLocale}>
      <body className={`${chakraPetch.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <LanguageProvider initialLocale={initialLocale}>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
