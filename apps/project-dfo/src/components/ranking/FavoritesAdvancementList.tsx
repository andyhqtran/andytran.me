// import { FavoritesAdvancementCard } from '~/components/ranking/FavoritesAdvancementCard';

export const FavoritesAdvancementList = () => {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-sm text-slate-12'>Favorites</h2>

      <div className='flex h-20 items-center justify-center rounded border border-dashed border-slate-4 bg-slate-1 p-6 text-xs text-slate-11'>
        Favorited characters will appear here.
      </div>

      {/* <div className='grid grid-cols-8 gap-4'>
        <FavoritesAdvancementCard />
      </div> */}
    </section>
  );
};
