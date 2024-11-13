import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salt og Pepar - Geometriske Studiar',
  description: 'Utforsking av form og funksjon gjennom parametrisk design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nn">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}