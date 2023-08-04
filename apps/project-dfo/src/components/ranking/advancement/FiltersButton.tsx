'use client';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { Dialog } from '@several-ui/dialog';
import { IconButton } from '@several-ui/icon-button';
import { Tooltip } from '@several-ui/tooltip';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { Filters } from '~/components/ranking/advancement/Filters';

export const FiltersButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const searchParams = useSearchParams();

  const filtersSearchParams = Array.from(searchParams).filter(([key]) => key !== 'showDetails');
  const filtersCount = filtersSearchParams.length;
  const hasFilters = filtersCount > 0;

  return (
    <>
      <Tooltip label='Filter by gear'>
        <IconButton
          appearance='outline'
          className='relative'
          color={hasFilters ? 'blue' : 'slate'}
          onClick={() => setIsDialogOpen(true)}
        >
          {hasFilters && (
            <div className='absolute -right-2 -top-2 flex h-4 min-w-[16px] items-center justify-center rounded-full border border-blue-6 bg-blue-3 px-1 text-[8px] font-bold'>
              {filtersCount}
            </div>
          )}

          <MixerHorizontalIcon className='h-3 w-3' />
        </IconButton>
      </Tooltip>

      <Dialog
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title='Filters'
      >
        <Filters onApplyFilters={() => setIsDialogOpen(false)} />
      </Dialog>
    </>
  );
};
