import type { NextSeoProps } from 'next-seo';

export const NEXT_SEO_DEFAULTS: NextSeoProps = {
  title: 'Andy Tran',
  description: 'UX Engineer at Air Labs',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.andytran.me/',
    title: 'Andy Tran',
    description: 'UX Engineer at Air Labs',
    images: [],
    siteName: 'Andy Tran',
  },
  twitter: {
    handle: '@andyhqtran',
    site: 'https://andytran.me',
    cardType: 'summary_large_image',
  },
};
