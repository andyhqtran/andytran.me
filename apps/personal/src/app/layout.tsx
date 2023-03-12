import './globals.css';

import { Footer, ThemeProviderWrapper } from '@several/components';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { NextSeo } from 'next-seo';
import type { ReactNode } from 'react';

import { AnalyticsWrapper } from '~/components/AnalyticsWrapper';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={classNames('antialiased', inter.className)} lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <NextSeo themeColor='#0091FF' useAppDir={true} />
      </head>
      <body className='bg-slate-1 selection:bg-blue-9'>
        <ThemeProviderWrapper>
          {children}
          <Footer />
        </ThemeProviderWrapper>

        <AnalyticsWrapper />
      </body>
    </html>
  );
}
