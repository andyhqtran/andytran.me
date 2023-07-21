import { RankingCharacterList } from '~/components/ranking/RankingCharacterList';

export default function Page() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-2xl text-slate-12'>Fame Ranking</h1>
        <p className='text-base text-slate-11'>See top 100 players with the most fame by class.</p>
      </div>

      <RankingCharacterList />
    </div>
  );
}
