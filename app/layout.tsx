import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jasper Timmer | Tech Lead',
  description: 'Jasper Timmer is a tech lead with a helicopter view.',
  keywords: ['software engineer', 'tech lead', 'innovation'],
  authors: [{ name: 'Jasper Timmer' }],
  openGraph: {
    title: 'Jasper Timmer | Tech Lead',
    description: 'Jasper Timmer is a tech lead with a helicopter view.',
    url: 'https://www.jaspertimmer.nl',
    siteName: 'Jasper Timmer',
    images: [
      {
        url: 'https://www.jaspertimmer.nl/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jasper Timmer - Tech Lead',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasper Timmer | Tech Lead',
    description: 'Jasper Timmer is a tech lead with a helicopter view.',
    images: ['https://www.jaspertimmer.nl/img/og-image.jpg'],
    creator: '@jjwtimmer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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

