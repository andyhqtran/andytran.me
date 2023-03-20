import './globals.css';

import { Providers } from '~/app/providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='h-full' lang='en' suppressHydrationWarning>
      <body className='h-full antialiased'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
