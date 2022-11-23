import { gql } from 'graphql-request';
import { NextSeo, NextSeoProps } from 'next-seo';

import { NEXT_SEO_DEFAULTS } from '~/constants/seo';
import { Hygraph } from '~/lib/hygraph/Hygraph';

async function getSimulacra(slug: string) {
  const query = gql`
    query getSimulacra($slug: String!) {
      simulacras(where: { slug: $slug }) {
        name
      }
    }
  `;

  const data = await Hygraph.request(query, { slug });

  return data.simulacras[0];
}
export default async function Head({ params: { slug } }) {
  const simulacra = await getSimulacra(slug);
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULTS,
    title: simulacra.name,
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
