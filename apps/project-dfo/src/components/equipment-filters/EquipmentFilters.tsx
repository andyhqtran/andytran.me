import { Button } from '@several-ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

import { EquipmentVisualizer } from '~/components/equipment-visualizer/EquipmentVisualizer';
import { Equipment, EquipmentType } from '~/constants/equipmentType';

export type EquipmentFilter = {
  id: EquipmentType;
  value: string;
};

export type EquipmentFiltersProp = {
  onApplyFilters?: (filters?: { [key in EquipmentFilter['id']]?: EquipmentFilter['value'] }) => void;
};

export const EquipmentFilters = ({ onApplyFilters }: EquipmentFiltersProp) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<{ [key in EquipmentFilter['id']]?: EquipmentFilter['value'] } | undefined>(
    undefined,
  );
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment>();

  const handleClearFilters = useCallback(() => {
    setFilters(undefined);
    router.push(pathname);
  }, [pathname, router]);

  const handleApplyFilters = useCallback(() => {
    const currentSearchParams = new URLSearchParams(Array.from(searchParams));

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          currentSearchParams.set(key, value);
        }
      });
    }

    router.push(`${pathname}${currentSearchParams ? `?${currentSearchParams.toString()}` : ''}`);
  }, [filters, pathname, router, searchParams]);

  return (
    <div className='flex flex-col items-start gap-8'>
      <div className='flex w-full gap-8'>
        <EquipmentVisualizer onSelect={setSelectedEquipment} selectedEquipment={selectedEquipment} />

        <div className='grid grow grid-cols-2 gap-4'>
          <div className='flex h-12 w-full items-center gap-2 rounded border border-slate-4 bg-slate-1 px-2'>
            <div className='h-8 w-8 shrink-0 rounded bg-slate-2' />
            <div className='truncate text-xs text-slate-11'>Item name</div>
          </div>
          <div className='flex h-12 w-full items-center gap-2 rounded border border-slate-4 bg-slate-1 px-2'>
            <div className='h-8 w-8 shrink-0 rounded bg-slate-2' />
            <div className='truncate text-xs text-slate-11'>Item name</div>
          </div>
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
