import { NextSeo, NextSeoProps } from 'next-seo';

import { NEXT_SEO_DEFAULTS } from '~/constants/seo';

export default async function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULTS,
    title: 'test',
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
