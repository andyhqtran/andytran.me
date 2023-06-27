import { gql } from 'graphql-request';
import Image from 'next/image';
import Link from 'next/link';

import { SimulacraSkills } from '~/components/SimulacraSkills';
import { Routes } from '~/constants/routes';
import { Hygraph } from '~/lib/hygraph/Hygraph';

async function getSimulacra(slug: string) {
  const query = gql`
    query getSimulacra($slug: String!) {
      simulacras(where: { slug: $slug }) {
        image {
          height
          id
          url
          width
        }
        name
        weapon {
          advancements {
            id
            effect
          }
          name
          skills {
            activationSequence
            description
            id
            name
            type
          }
        }
      }
    }
  `;

  const data = await Hygraph.request(query, { slug });

  return data.simulacras[0];
}

export default async function Page({ params: { slug } }) {
  const simulacra = await getSimulacra(slug);
  console.log(simulacra);

  return (
    <div className='flex flex-col gap-6'>
      <Link
        className='flex items-center gap-2 text-sm text-slate-11 hover:text-slate-12 hover:underline'
        href={Routes.Simulacra}
      >
        {/* <BiArrowBack className='block h-4 w-4' /> */}
        All simulacras
      </Link>

      <section className='relative overflow-hidden rounded bg-slate-2 p-6'>
        {simulacra.image ? (
          <Image
            alt={simulacra.name}
            className='top pointer-events-none absolute top-0 left-0 w-80 select-none opacity-10'
            height={simulacra.image.height}
            src={simulacra.image.url}
            width={simulacra.image.width}
          />
        ) : null}
        <h1 className='text-xl font-semibold text-slate-12'>{simulacra.name}</h1>
        <h2 className='text-sm text-slate-11'>{simulacra.weapon.name}</h2>
      </section>

      <section className='rounded bg-slate-2 p-6'>
        <h3 className='text-lg font-semibold text-slate-12'>Advancements</h3>

        <div className='flex flex-col gap-2'>
          {simulacra.weapon.advancements.map((advancement, index) => (
            <div className='flex gap-4' key={advancement.id}>
              <div className='text-sm text-slate-11'>{index + 1}</div>
              <p className='text-sm text-slate-11'>{advancement.effect}</p>
            </div>
          ))}
        </div>
      </section>

      <SimulacraSkills skills={simulacra.weapon.skills} />
    </div>
  );
}
