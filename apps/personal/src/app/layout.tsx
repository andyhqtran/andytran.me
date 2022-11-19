'use client';
import './globals.css';

import { NextSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

import { AnalyticsWrapper } from '~/components/AnalyticsWrapper';
import { Footer } from '~/components/Footer';
import { NEXT_SEO_DEFAULTS } from '~/constants/seo';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className='antialiased' lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <NextSeo {...NEXT_SEO_DEFAULTS} themeColor='#0091FF' useAppDir={true} />
      </head>
      <body className='bg-slate-1 selection:bg-blue-9'>
        <ThemeProvider attribute='data-theme'>
          {children}
          <Footer />
        </ThemeProvider>

        <AnalyticsWrapper />
      </body>
    </html>
  );
}
