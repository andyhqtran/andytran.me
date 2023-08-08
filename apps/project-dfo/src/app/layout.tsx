import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

import { Providers } from '~/app/providers';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='antialiased'>
        <Providers>
          <Header />

          <main className='mx-auto max-w-3xl px-6 py-8'>{children}</main>

          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Dungeon Fighter Online Resources',
  description:
    'Unlock the ultimate Dungeon Fighter Online advantage with our extensive resources, detailed stats, and current rankings. Master the art of gameplay with strategic insights and guides. Rise to the top of the DFO world – start your journey now!',
};
