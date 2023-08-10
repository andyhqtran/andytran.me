'use client';
import { Button } from '@several-ui/button';
import { Dialog } from '@several-ui/dialog';
import { useState } from 'react';

import { EquipmentCardBakalFusionOptions } from '~/components/character/equipment-card/EquipmentCardBakalFusionOptions';
import { EquipmentCardEnchant } from '~/components/character/equipment-card/EquipmentCardEnchant';
import { EquipmentCardOptions } from '~/components/character/equipment-card/EquipmentCardOptions';
import { EquipmentImage } from '~/components/EquipmentImage';
import { CharacterEquipment } from '~/data/getCharactersEquipment';

export type EquipmentCardItemProps = {
  equip: CharacterEquipment;
};

export const EquipmentCardItem = ({ equip }: EquipmentCardItemProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className='flex items-center gap-8 border-b border-slate-5 py-4 first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0'>
        <div className='flex min-w-[72px] gap-2'>
          <EquipmentImage alt={equip.itemName} itemId={equip.itemId} />

          {equip?.upgradeInfo && <EquipmentImage alt={equip.upgradeInfo.itemName} itemId={equip.upgradeInfo.itemId} />}
        </div>

        <div className='min-w-[48px] text-sm font-medium text-blue-12'>
          <span className={equip.amplificationName ? 'text-purple-9' : 'text-blue-12'}>+{equip.reinforce}</span>
          {(equip.slotId === 'WEAPON' || equip.slotId === 'SUPPORT_WEAPON') && `/${equip.refine}`}
        </div>

        <div className='flex grow flex-col gap-1'>
          <div className='flex items-baseline gap-1 text-sm font-medium text-slate-12'>
            {equip.itemName} <span className='text-xs text-slate-11'>{equip.itemTypeDetail}</span>
          </div>
          {equip.upgradeInfo && <div className='text-xs text-red-11'>{equip.upgradeInfo.itemName}</div>}

          {equip.growInfo && (
            <div className='flex gap-4 text-xs text-blue-11'>
              {equip.growInfo.options.map((option, index) => (
                <span key={index}>{option.level}</span>
              ))}

              <span>{equip.growInfo.total.level}</span>
            </div>
          )}
        </div>

        <div className='flex justify-end'>
          <Button appearance='ghost' color='slate' onClick={() => setIsDialogOpen(true)} size='sm'>
            View details
          </Button>
        </div>
      </div>

      <Dialog title={`${equip.itemTypeDetail} details`} onOpenChange={setIsDialogOpen} open={isDialogOpen}>
        <div className='grid grid-cols-2 gap-x-8'>
          <div className='flex flex-col gap-6'>
            {equip.amplificationName ? (
              <div className='text-xs text-purple-9'>
                +{equip.reinforce} {equip.amplificationName}
              </div>
            ) : (
              <div className='text-xs text-blue-12'>+{equip.reinforce} Reinforce</div>
            )}

            {equip?.enchant && <EquipmentCardEnchant details={equip.enchant.explain} enchants={equip.enchant.status} />}
            {equip.bakalInfo && <EquipmentCardBakalFusionOptions options={equip.bakalInfo.options} />}
          </div>

          <div className='flex flex-col gap-6'>
            {equip?.growInfo && (
              <EquipmentCardOptions
                buff={equip.growInfo.total.buff}
                damage={equip.growInfo.total.damage}
                level={equip.growInfo.total.level}
                options={equip.growInfo.options}
              />
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};
