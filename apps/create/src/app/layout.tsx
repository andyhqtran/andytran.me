import './globals.css';

import { Providers } from '~/app/providers';
import { RecoilProvider } from '~/components/RecoilProvider';
import { ThemeProvider } from '~/components/ThemeProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='h-full' lang='en' suppressHydrationWarning>
      <body className='h-full antialiased'>
        <RecoilProvider>
          <ThemeProvider>
            <Providers>{children}</Providers>
          </ThemeProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
