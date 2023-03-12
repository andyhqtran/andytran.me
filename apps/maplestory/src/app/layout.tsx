import './globals.css';

import { Footer, Header, ProjectNavigation, ThemeProviderWrapper } from '@several/components';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import type { ReactNode } from 'react';

import { AnalyticsWrapper } from '~/components/AnalyticsWrapper';
import { Routes } from '~/constants/routes';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html className={classNames('antialiased', inter.className)} lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <NextSeo themeColor='#0091FF' useAppDir={true} />
      </head>
      <body className='bg-slate-1 selection:bg-blue-9'>
        <ThemeProviderWrapper>
          <Header />

          <ProjectNavigation
            navigation={[
              {
                label: 'Members',
                href: Routes.Members,
              },
              {
                label: 'Resources',
                href: Routes.Resources,
              },
              {
                label: 'Events',
                href: Routes.Events,
              },
            ]}
            title={
              <Link className='hover:underline' href={Routes.Root}>
                MapleStory
              </Link>
            }
          />
          {children}
          <Footer />
        </ThemeProviderWrapper>

        <AnalyticsWrapper />
      </body>
    </html>
  );
}
