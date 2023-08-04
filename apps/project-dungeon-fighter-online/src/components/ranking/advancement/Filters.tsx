'use client';

import { Button } from '@several-ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { EquipmentVisualizer } from '~/components/filters/EquipmentVisualizer';

export type FilterType =
  | 'weapon'
  | 'fusion-weapon'
  | 'shoulder'
  | 'fusion-shoulder'
  | 'top'
  | 'fusion-top'
  | 'bottom'
  | 'fusion-bottom'
  | 'belt'
  | 'fusion-belt'
  | 'shoes'
  | 'fusion-shoes'
  | 'necklace'
  | 'fusion-necklace'
  | 'earring'
  | 'fusion-earring'
  | 'ring'
  | 'fusion-ring'
  | 'bracelet'
  | 'fusion-bracelet'
  | 'magicstone'
  | 'fusion-magicstone';

export type Filter = {
  id: FilterType;
  value: string;
};

export type FiltersProp = {
  onApplyFilters: (filters?: { [key in Filter['id']]?: Filter['value'] }) => void;
};
    
export const Filters = ({ onApplyFilters }: FiltersProp) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<{ [key in Filter['id']]?: Filter['value'] } | undefined>(undefined);

  const handleClearFilters = () => {
    setFilters(undefined);
    router.push(pathname);
  };

  const handleApplyFilters = () => {
    const currentSearchParams = new URLSearchParams(Array.from(searchParams));

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          currentSearchParams.set(key, value);
        }
      });
    }

      router.push(`${pathname}${currentSearchParams ? `?${currentSearchParams.toString()}` : ''}`);
  };

  return (
    <div className='flex flex-col items-start gap-8'>
      <div className='flex w-full gap-4'>
        <EquipmentVisualizer />
        <div className='grid grow grid-cols-2 gap-4'>
          <div className='flex h-12 w-full items-center gap-2 rounded border border-slate-4 bg-slate-1 px-2'>
            <div className='h-8 w-8 shrink-0 rounded bg-slate-2' />
            <div className='truncate text-xs text-slate-11'>123lij12l321lk j12lkj3 l21kj 3l2k1Item name</div>
          </div>
          <div className='h-12 w-full rounded border border-slate-4 bg-slate-1' />
        </div>
      </div>

      <div className='flex w-full justify-end gap-2'>
        <Button appearance='text' color='blue' onClick={handleClearFilters}>
          Reset
        </Button>
        <Button
          appearance='default'
          color='blue'
          disabled={!filters}
          onClick={() => {
            handleApplyFilters();
            onApplyFilters?.(filters);
          }}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};
