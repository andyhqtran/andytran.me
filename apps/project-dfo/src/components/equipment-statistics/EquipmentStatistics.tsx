import { useState } from 'react';

import { EquipmentStatisticsItem } from '~/components/equipment-statistics/EquipmentStatisticsItem';
import { EquipmentVisualizer } from '~/components/equipment-visualizer/EquipmentVisualizer';
import { Equipment } from '~/constants/equipmentType';

export const EquipmentStatistics = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment>({
    id: 'weapon',
    label: 'Weapon',
  });

  return (
    <div className='flex items-start gap-8'>
      <EquipmentVisualizer onSelect={setSelectedEquipment} selectedEquipment={selectedEquipment} />

      <div className='flex grow flex-col gap-4'>
        <div className='text-sm font-medium text-slate-12'>Stats for weapon</div>

        <div className='flex flex-col gap-3'>
          <EquipmentStatisticsItem count={120} label='Item 1' maxCount={200} />
          <EquipmentStatisticsItem count={30} label='Item 2' maxCount={200} />
          <EquipmentStatisticsItem count={30} label='Item 3' maxCount={200} />
          <EquipmentStatisticsItem count={10} label='Item 4' maxCount={200} />
        </div>
      </div>
    </div>
  );
};
