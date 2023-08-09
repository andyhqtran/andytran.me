import { type Metadata } from 'next';

import { Changelog } from '~/components/changelog/Changelog';
import { Roadmap } from '~/components/roadmap/Roadmap';

export default function Page() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-1 pb-6 pt-10'>
        <h1 className='text-2xl text-slate-12'>DFO.gg</h1>
        <p className='text-base text-slate-11'>This tool is coming soon.</p>
      </div>

      <Roadmap />

      <Changelog />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Home | Dungeon Fighter Online Resources',
};
