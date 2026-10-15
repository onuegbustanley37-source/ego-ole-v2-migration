import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SITE } from '@/lib/config';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
  },
  icons: {
    icon: '/ego-ole-logo.jpg',
  },
  themeColor: '#000000',
  viewport: { width: 'device-width', initialScale: 1 },
};

// Header and Footer live here so every page gets them automatically — never add them inside a page.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-black">
      <body className={`${inter.className} min-h-screen overflow-x-hidden bg-black`}>
        <div className="flex min-h-screen flex-col bg-black">
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
