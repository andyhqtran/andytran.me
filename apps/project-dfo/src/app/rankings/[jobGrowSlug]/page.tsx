import { getJobs } from '~/data/getJobs';

export type PageProps = {
  params: {
    jobGrowSlug: string;
  };
};

export default async function Page({ params }: PageProps) {
  const jobs = await getJobs();
  const job = jobs.find((job) => job.jobGrow.find((jobGrow) => jobGrow.jobGrowSlug === params.jobGrowSlug));
  const jobGrow = job?.jobGrow.find((jobGrow) => jobGrow.jobGrowSlug === params.jobGrowSlug);

  return (
    <div className='relative z-0 flex flex-col'>
      <div className='mb-8 flex flex-col gap-3 pb-6 pt-10'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-2xl text-slate-12'>{jobGrow?.jobGrowName} ranking</h1>

          <p className='text-base text-slate-11'>
            We&apos; currently working on a solution to display the top characters per advancement.
          </p>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const jobs = await getJobs();
  const job = jobs.find((job) => job.jobGrow.find((jobGrow) => jobGrow.jobGrowSlug === params.jobGrowSlug));
  const jobGrow = job?.jobGrow.find((jobGrow) => jobGrow.jobGrowSlug === params.jobGrowSlug);

  return {
    title: `${jobGrow?.jobGrowName} Rankings | Dungeon Fighter Online Resources`,
  };
}
