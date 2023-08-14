import { type Metadata } from 'next';

import { CharacterSearchBar } from '~/components/character/CharacterSearchBar';

export default async function Page() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-1 pb-6 pt-10'>
        <h1 className='text-2xl text-slate-12'>Character search</h1>
        <p className='text-base text-slate-11'>
          The characters page is still a work-in-progress and contains limited information.
        </p>
      </div>

      <div>
        <CharacterSearchBar />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Character search | Dungeon Fighter Online Resources',
};
