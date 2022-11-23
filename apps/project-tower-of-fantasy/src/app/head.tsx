import { NextSeo } from 'next-seo';

import { NEXT_SEO_DEFAULTS } from '~/constants/seo';

export default async function Head() {
  return <NextSeo {...NEXT_SEO_DEFAULTS} useAppDir={true} />;
}
