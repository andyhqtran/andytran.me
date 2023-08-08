import { type Metadata } from 'next';

import { AdvancementList } from '~/components/ranking/AdvancementList';
import { FavoritesAdvancementList } from '~/components/ranking/FavoritesAdvancementList';

export default function Page() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-1 pb-6 pt-10'>
        <h1 className='text-2xl text-slate-12'>Fame Ranking</h1>
        <p className='text-base text-slate-11'>See top 100 players with the most fame by class.</p>
      </div>

      <FavoritesAdvancementList />

      <AdvancementList />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Rankings | Dungeon Fighter Online Resources',
};
