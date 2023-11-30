import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { GoToTop } from '@components/GoToTop';
import { Footer } from '@components/Layout/Footer';
import { Header } from '@components/Layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trend Styles',
  description:
    'Discover your unique style at Trend Styles, the ultimate destination for alternative fashion. Explore a diverse collection of edgy and unconventional clothing that empowers your individuality.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen items-center flex-col mx-auto max-w-[1440px]">
          {children}
        </main>
        <Footer />
        <GoToTop />
      </body>
    </html>
  );
}
