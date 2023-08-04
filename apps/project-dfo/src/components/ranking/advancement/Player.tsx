import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { Routes } from '~/constants/Routes';

export type PlayerProps = {
  fame: number;
  guild?: string;
  id: string;
  name: string;
  rank: number;
};

export const Player = ({ fame = 0, guild, id, name = 'Untitled', rank = 0 }: PlayerProps) => {
  const isTopPlayer = rank === 1;

  return (
    <Link
      className={twMerge(
        'flex items-center justify-between gap-4 rounded border border-slate-5 bg-slate-2 py-4 pr-4 hover:bg-slate-3',
        isTopPlayer ? 'border border-blue-5 bg-blue-2 hover:bg-blue-3' : undefined,
      )}
      href={`${Routes.Character}/${id}`}
    >
      <div className='flex gap-4'>
        <div className='flex min-w-[96px] flex-col items-center justify-center border-r border-slate-5'>
          <span className={twMerge('text-xs text-slate-11', isTopPlayer ? 'text-blue-9' : undefined)}>Rank</span>
          <div
            className={twMerge(
              'text-2xl font-bold tracking-wide text-slate-12',
              isTopPlayer ? 'text-blue-9' : undefined,
            )}
          >
            {rank}
          </div>
        </div>

        <div
          className={twMerge(
            'h-14 w-14 rounded border border-slate-5 bg-slate-2',
            isTopPlayer ? 'border-blue-5 bg-blue-2' : undefined,
          )}
        />

        <div className='flex items-center'>
          <div className='flex flex-col'>
            <h2 className='text-sm text-slate-12'>{name}</h2>
            {!!guild && <p className='text-xs text-slate-11'>{guild}</p>}
            <p className='text-xs text-slate-11'>{fame.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
          </div>
          <div className='flex gap-2'>
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
          </div>
          <div className='flex gap-2'>
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
          </div>
          <div className='flex gap-2'>
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
            <div className='h-6 w-6 rounded border border-slate-5 bg-slate-2' />
          </div>
        </div>
      </div>
    </Link>
  );
};
