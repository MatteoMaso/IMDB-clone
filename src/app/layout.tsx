import Header from '@/components/Header'
import './globals.css'

import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
 
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
      <body>
        {/* Header */}
        <Header />

        {/* NavBar */}
        <Navbar />

        {/* SearchBox */}

        {children}
      </body>
    </html>
  )
}
