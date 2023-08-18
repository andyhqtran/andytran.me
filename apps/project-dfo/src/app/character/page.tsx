import { type Metadata } from 'next';

import { CharacterSearchBar } from '~/components/character/CharacterSearchBar';
import { CharacterCardSkeleton } from '~/components/CharacterCardSkeleton';

export default async function Page() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-1 pb-6 pt-10'>
        <h1 className='text-2xl text-slate-12'>Character search</h1>
        <p className='text-base text-slate-11'>
          The characters page is still a work-in-progress and contains limited information.
        </p>
      </div>

      <div className='flex flex-col gap-8'>
        <CharacterSearchBar className='z-10' />

        <div className='hidden flex-col gap-4 sm:flex'>
          <CharacterCardSkeleton className='opacity-50' />
          <CharacterCardSkeleton className='opacity-40' />
          <CharacterCardSkeleton className='opacity-30' />
          <CharacterCardSkeleton className='opacity-20' />
          <CharacterCardSkeleton className='opacity-10' />
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Character search | Dungeon Fighter Online Resources',
};
