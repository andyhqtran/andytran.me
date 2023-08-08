'use client';
import { ArrowLeftIcon, BarChartIcon } from '@radix-ui/react-icons';
import { IconButton } from '@several-ui/icon-button';
import { Tooltip } from '@several-ui/tooltip';
import { useRouter } from 'next/navigation';
import { ComponentProps } from 'react';
import { useInView } from 'react-intersection-observer';
import { twMerge } from 'tailwind-merge';

import { DetailsButton } from '~/components/ranking/advancement/DetailsButton';
import { FiltersButton } from '~/components/ranking/advancement/FiltersButton';
import { StatisticsButton } from '~/components/ranking/advancement/StatisticsButton';
import { Routes } from '~/constants/Routes';

export type ToolbarProps = Pick<ComponentProps<'div'>, 'className'>;

export const Toolbar = ({ className }: ToolbarProps) => {
  const { ref: inViewRef, inView, entry } = useInView();
  const isStickied = !inView && entry;
  const router = useRouter();

  return (
    <>
      <div ref={inViewRef} />
      <div
        className={twMerge(
          'sticky top-0 flex items-center justify-between gap-2 rounded border border-slate-5 bg-slate-2 px-4 py-3',
          isStickied ? 'rounded-t-none border-t-transparent shadow-lg' : undefined,
          className,
        )}
      >
        <div className='flex gap-2'>
          <Tooltip label='Back to character selection'>
            <IconButton appearance='outline' color='slate' onClick={() => router.push(Routes.Ranking)}>
              <ArrowLeftIcon className='h-3 w-3' />
            </IconButton>
          </Tooltip>

          <StatisticsButton />

          <FiltersButton />

          <DetailsButton />
        </div>

        <p className='text-xs text-slate-11'>
          <b>Last updated:</b> 10/11/2023 10:39:32 PST
        </p>
      </div>
    </>
  );
};
