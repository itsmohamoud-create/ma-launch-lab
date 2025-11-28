import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SocialBanner from '@/components/ui/SocialBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MA Transform Lab',
  description: 'Transform your mind, body, and business',
  metadataBase: new URL('https://ma-transform-lab.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MA Transform Lab',
    description: 'Transform your mind, body, and business',
    url: 'https://ma-transform-lab.vercel.app',
    siteName: 'MA Transform Lab',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MA Transform Lab',
    description: 'Transform your mind, body, and business',
    images: ['/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SocialBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
