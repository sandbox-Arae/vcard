import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VCard Platform',
  description: 'Starter demo with Next.js + Tailwind + simple auth'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
