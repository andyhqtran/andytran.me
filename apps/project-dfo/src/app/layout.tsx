import './globals.css';

import { Analytics } from '@vercel/analytics/react';

import { Providers } from '~/app/providers';
import { Header } from '~/components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='antialiased'>
        <Providers>
          <Header />

          <main className='mx-auto max-w-3xl px-6'>{children}</main>

          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
