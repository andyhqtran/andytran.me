import { RankingsList } from '~/components/rankings/RankingsList';
import { getJobs } from '~/data/getJobs';

export default async function Page() {
  const jobs = await getJobs();

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-1 pb-6 pt-10'>
        <h1 className='text-2xl text-slate-12'>Rankings</h1>
        <p className='text-base text-slate-11'>See the top players with the most fame by class.</p>
      </div>
      <RankingsList jobs={jobs} />
    </div>
  );
}
