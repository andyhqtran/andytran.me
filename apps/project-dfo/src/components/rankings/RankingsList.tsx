import { RankingsAdvancementCard } from '~/components/rankings/RankingsAdvancementCard';
import { Routes } from '~/constants/Routes';
import { type Job } from '~/types/neople';

export type RankingsListProps = {
  jobs: Job[];
};

export const RankingsList = ({ jobs }: RankingsListProps) => {
  return (
    <div className='flex flex-col gap-8'>
      {jobs.map((job) => (
        <section className='flex flex-col gap-4' data-id={job.jobId} key={job.jobId}>
          <div className='flex flex-col gap-1' id={job.jobSlug}>
            <h2 className='text-sm text-slate-12'>{job.jobName}</h2>
            {job?.jobExplain && <p className='text-xs text-slate-11'>{job.jobExplain}</p>}
          </div>

          <div className='grid grid-cols-5 gap-x-4'>
            {job.jobGrow.map((jobGrow) => {
              return (
                <>
                  <RankingsAdvancementCard
                    id={jobGrow.jobGrowId}
                    href={`${Routes.Rankings}/${jobGrow.jobGrowSlug}`}
                    key={jobGrow.jobGrowId}
                    title={jobGrow.jobGrowName}
                    src={`/assets/characters/${jobGrow.jobGrowImageSlug}.jpeg`}
                  />
                </>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};
