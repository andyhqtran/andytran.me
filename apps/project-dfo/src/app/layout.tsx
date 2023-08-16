import './globals.css';

import { HighlightInit } from '@highlight-run/next/client';
import { ErrorBoundary } from '@highlight-run/next/client';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import Script from 'next/script';

import { Providers } from '~/app/providers';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HighlightInit
        excludedHostnames={['localhost']}
        networkRecording={{
          enabled: true,
          recordHeadersAndBody: true,
          urlBlocklist: [],
        }}
        projectId={process.env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID}
        tracingOrigins
      />
      <html lang='en' suppressHydrationWarning>
        <body className='antialiased'>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
          <Script id='google-analytics'>
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
          </Script>

          <ErrorBoundary showDialog={process.env.NEXT_PUBLIC_ENV === 'production'}>
            <Providers>
              <Header />

              <main className='mx-auto max-w-3xl px-6 py-8'>{children}</main>

              <Footer />
              <Analytics />
            </Providers>
          </ErrorBoundary>
        </body>
      </html>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Dungeon Fighter Online Resources',
  description:
    "Discover the ultimate Dungeon Fighter Online resource hub! Explore comprehensive rankings, in-depth guides, and an extensive database search to enhance your gaming experience. Whether you're a seasoned adventurer or just starting your journey, our website is your one-stop destination for mastering the game.",
};
