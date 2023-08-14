import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Banner } from '@several-ui/banner';

import { CharacterSearchBar } from '~/components/character/CharacterSearchBar';
import { CharacterSearchList } from '~/components/character/CharacterSearchList';
import { getCharacters } from '~/data/getCharacters';

export type PageProps = {
  params: {
    characterName: string;
  };
};

export default async function Page({ params }: PageProps) {
  const characters = await getCharacters({
    characterName: params.characterName,
    limit: 50,
    serverId: 'all',
    wordType: 'full',
  });

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-1 pb-6 pt-10'>
        <h1 className='text-2xl text-slate-12'>
          Search results for: <span className='underline'>{params.characterName}</span>
        </h1>
        <p className='text-base text-slate-11'>
          {characters.length} character{characters.length > 1 && 's'} found.
        </p>
      </div>

      <div className='relative z-0'>
        <CharacterSearchBar className='mb-8' characterName={params.characterName} />

        {characters?.length > 0 ? (
          <>
            <Banner appearance='info' className='mb-4' prefix={<InfoCircledIcon className='h-3 w-3' />} size='sm'>
              Avatar images are not currently supported by Neople&apos;s API.
            </Banner>

            <CharacterSearchList characters={characters} />
          </>
        ) : (
          <p className='text-sm text-slate-11'>No characters found.</p>
        )}
      </div>
    </div>
  );
}

export const generateMetadata = async ({ params }: PageProps) => {
  const characterName = params.characterName;

  return {
    title: `Search results for ${characterName} - Dungeon Fighter Online Resources`,
  };
};
