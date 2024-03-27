import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { GoToTop } from '@components/GoToTop';
import { Footer } from '@components/Layout/Footer';
import { Header } from '@components/Layout/Header';
import { TooltipProvider } from '@components/UI/Tooltip';
import { ShoppingCartProvider } from '@contexts/ShoppingCartContext/ShoppingCartContext';
import { WishlistProvider } from '@contexts/WishlistContext/WishlistContext';

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
        <TooltipProvider delayDuration={200}>
          <WishlistProvider>
            <ShoppingCartProvider>
              <Header />
              <main>{children}</main>
              <Footer />
              <GoToTop />
            </ShoppingCartProvider>
          </WishlistProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
