import './globals.css'

import { Inter } from '@next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'This is an IMDB clone to learn NextJS 13',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: [
    {
      rel: 'icon',
      type: 'icon',
      url: '/favicon.ico',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
