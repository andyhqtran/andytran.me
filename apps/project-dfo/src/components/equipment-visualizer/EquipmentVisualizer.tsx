import { Tooltip } from '@several-ui/tooltip';
import isEqual from 'react-fast-compare';

import { EquipmentVisualizerItem } from '~/components/equipment-visualizer/EquipmentVisualizerItem';
import {
  ACCESSORY_EQUIPMENT,
  ARMOR_EQUIPMENT,
  Equipment,
  SPECIAL_EQUIPMENT,
  WEAPON_EQUIPMENT,
} from '~/constants/equipmentType';

export type EquipmentVisualizerProps = {
  onSelect: (equipment: Equipment) => void;
  selectedEquipment: Equipment;
};

export const EquipmentVisualizer = ({ onSelect, selectedEquipment }: EquipmentVisualizerProps) => {
  return (
    <div className='flex shrink-0 gap-4 rounded bg-slate-2 p-4'>
      <div className='grid grid-cols-2 content-start gap-2'>
        {ARMOR_EQUIPMENT.map((armor) => {
          return (
            <Tooltip label={`Select ${armor.label}`} key={armor.id}>
              <EquipmentVisualizerItem
                onClick={() => onSelect?.(armor)}
                state={isEqual(selectedEquipment, armor) ? 'active' : 'default'}
              />
            </Tooltip>
          );
        })}
      </div>

      <div className='grid grid-cols-2 content-start gap-2'>
        {WEAPON_EQUIPMENT.map((weapon) => {
          return (
            <Tooltip label={`Select ${weapon.label}`} key={weapon.id}>
              <EquipmentVisualizerItem
                onClick={() => onSelect?.(weapon)}
                state={isEqual(selectedEquipment, weapon) ? 'active' : 'default'}
              />
            </Tooltip>
          );
        })}

        {ACCESSORY_EQUIPMENT.map((accessory) => {
          return (
            <Tooltip label={`Select ${accessory.label}`} key={accessory.id}>
              <EquipmentVisualizerItem
                onClick={() => onSelect?.(accessory)}
                state={isEqual(selectedEquipment, accessory) ? 'active' : 'default'}
              />
            </Tooltip>
          );
        })}

        {SPECIAL_EQUIPMENT.map((specialEquipment) => {
          return (
            <Tooltip label={`Select ${specialEquipment.label}`} key={specialEquipment.id}>
              <EquipmentVisualizerItem
                onClick={() => onSelect?.(specialEquipment)}
                state={isEqual(selectedEquipment, specialEquipment) ? 'active' : 'default'}
              />
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};
