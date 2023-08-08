import { type Metadata } from 'next';

export default function Page() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-1 pb-6 pt-10'>
        <h1 className='text-2xl text-slate-12'>Statistics</h1>
        <p className='text-base text-slate-11'>Coming soon.</p>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Statistics | Dungeon Fighter Online Resources',
};
