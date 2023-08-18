import { type Metadata } from 'next';
import Link from 'next/link';

import { Changelog } from '~/components/Changelog';
import { Roadmap } from '~/components/Roadmap';
import { ExternalRoutes } from '~/constants/Routes';

export default function Page() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-1 pb-6 pt-10'>
        <h1 className='text-2xl text-slate-12'>{process.env.NEXT_PUBLIC_SITE_NAME}</h1>
        <p className='text-base text-slate-11'>
          This website is still a work-in-progress, please report any bugs on{' '}
          <Link href={ExternalRoutes.Discord}>Discord</Link>.
        </p>
      </div>

      <Changelog />

      <Roadmap />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Home | Dungeon Fighter Online Resources',
};
