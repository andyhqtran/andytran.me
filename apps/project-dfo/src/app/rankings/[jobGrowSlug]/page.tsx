import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Banner } from '@several-ui/banner';
import Link from 'next/link';

import { RankingsCharacterList } from '~/components/rankings/RankingsCharacterList';
import { Routes } from '~/constants/Routes';
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

  if (!jobGrow) {
    return (
      <div className='flex flex-col'>
        <div className='mb-8 flex flex-col gap-3 pb-6 pt-10'>
          <div className='flex flex-col gap-1'>
            <h1 className='text-2xl text-slate-12'>Rankings not found</h1>

            <p className='text-base text-slate-11'>
              The rankings you&apos;re looking for doesn&apos;t exist.&nbsp;
              <Link href={Routes.Rankings}>Click here</Link> to see all the available rankings.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='relative z-0 flex flex-col'>
      <div className='mb-8 flex flex-col gap-3 pb-6 pt-10'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-2xl text-slate-12'>{jobGrow?.jobGrowName} ranking</h1>

          <p className='text-base text-slate-11'>The top characters for {jobGrow?.jobGrowName}</p>
        </div>
      </div>

      <Banner appearance='warning' className='mb-4' prefix={<ExclamationTriangleIcon className='h-3 w-3' />} size='sm'>
        This page is still under development and may not display the correct information, or any information at all.
      </Banner>

      <RankingsCharacterList jobId={job.jobId} jobGrowId={jobGrow.jobGrowId} />
    </div>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const jobs = await getJobs();
  const job = jobs.find((job) => job.jobGrow.find((jobGrow) => jobGrow.jobGrowSlug === params.jobGrowSlug));
  const jobGrow = job?.jobGrow.find((jobGrow) => jobGrow.jobGrowSlug === params.jobGrowSlug);

  if (!jobGrow) {
    return {
      title: 'Rankings not found | Dungeon Fighter Online Resources',
    };
  }

  return {
    title: `${jobGrow?.jobGrowName} Rankings | Dungeon Fighter Online Resources`,
  };
}