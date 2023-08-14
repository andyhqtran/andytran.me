import { Dialog, type DialogProps } from '@several-ui/dialog';

import { CharacterEquipmentEnchant } from '~/components/character/CharacterEquipmentEnchant';
import { CharacterEquipmentFusionOptions } from '~/components/character/CharacterEquipmentFusionOptions';
import { CharacterEquipmentOptions } from '~/components/character/CharacterEquipmentOptions';
import { type Equipment } from '~/types/neople';

export type CharacterEquipmentDialogProps = Pick<DialogProps, 'onOpenChange' | 'open'> & {
  equip: Equipment;
};

export const CharacterEquipmentDialog = ({ equip, onOpenChange, open }: CharacterEquipmentDialogProps) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={open} title={`${equip.itemTypeDetail} details`}>
      <div className='grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          {!!equip.reinforce && (
            <div className='text-xs'>
              {equip.amplificationName ? (
                <span className='text-purple-9'>
                  +{equip.reinforce} {equip.amplificationName}
                </span>
              ) : (
                <span className='text-blue-12'>+{equip.reinforce} Reinforce</span>
              )}
            </div>
          )}

          {equip.enchant?.status && (
            <CharacterEquipmentEnchant enchants={equip.enchant.status} explain={equip.enchant.explain} />
          )}

          {equip.bakalInfo?.options && (
            <CharacterEquipmentFusionOptions options={equip.bakalInfo.options} title='Fusion options (Bakal)' />
          )}

          {equip?.machineRevolutionInfo && (
            <CharacterEquipmentFusionOptions
              options={equip.machineRevolutionInfo.options}
              title='Fusion options (Machine Revolution)'
            />
          )}

          {equip?.ispinsInfo && (
            <CharacterEquipmentFusionOptions options={equip.ispinsInfo.options} title='Fusion options (Ispins)' />
          )}
          {equip?.dimensionCloisterInfo && (
            <CharacterEquipmentFusionOptions
              options={equip.dimensionCloisterInfo.options}
              title='Fusion options (Hall of Dimensions)'
            />
          )}
        </div>
        <div className='flex flex-col gap-6'>
          {equip?.growInfo && (
            <CharacterEquipmentOptions
              buff={equip.growInfo.total.buff}
              damage={equip.growInfo.total.damage}
              level={equip.growInfo.total.level}
              options={equip.growInfo.options}
            />
          )}
        </div>
      </div>
    </Dialog>
  );
};
