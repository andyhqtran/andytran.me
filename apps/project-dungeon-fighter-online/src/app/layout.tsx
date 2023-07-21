import './globals.css';

import { Providers } from '~/app/providers';
import { Header } from '~/components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='h-full' lang='en' suppressHydrationWarning>
      <body className='h-full antialiased'>
        <Providers>
          <Header />

          <main className='mx-auto max-w-3xl px-8'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
