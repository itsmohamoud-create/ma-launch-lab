import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SparkleCursor from '@/components/ui/SparkleCursor'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'MA Transform Lab | Systems for Mind, Body & Business Mastery',
  description: 'The strategic educational ecosystem. Ignite your growth with AI, Wellness, and Entrepreneurship systems.',
  metadataBase: new URL('https://matransformlab.com'),
  openGraph: {
    title: 'MA Transform Lab',
    description: 'Mind, Body & Business Mastery',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased selection:bg-purple selection:text-white`}>
        <SparkleCursor />
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
