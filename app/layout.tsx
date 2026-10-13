import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ego-ole-v2-migration-vqer.bolt.host'),
  title: 'EGO OLE? - Live Onitsha Market Prices',
  description: 'Check real-time prices from 20 Onitsha markets - Main Market, Ochanja, Relief',
  openGraph: {
    title: 'EGO OLE? - Live Onitsha Market Prices',
    description: 'Check real-time prices from 20 Onitsha markets - Main Market, Ochanja, Relief',
  },
  icons: {
    icon: '/ego-ole-logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="min-h-screen flex flex-col bg-black">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
