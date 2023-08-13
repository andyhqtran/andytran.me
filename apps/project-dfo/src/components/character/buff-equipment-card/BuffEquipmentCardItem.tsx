'use client';
import { Button } from '@several-ui/button';
import { Dialog } from '@several-ui/dialog';
import { useState } from 'react';

import { EquipmentImage } from '~/components/EquipmentImage';
import { ITEM_RARITY } from '~/constants/itemRarity';
import { BuffAvatar } from '~/fetchers/neople/fetchCharacterBuffAvatar';
import { ItemInformation } from '~/fetchers/neople/fetchItemInformation';

export type BuffEquipmentCardAvatarItemProps = {
  avatar: BuffAvatar;
  itemInformation: ItemInformation;
};

export const BuffEquipmentCardAvatarItem = ({ avatar, itemInformation }: BuffEquipmentCardAvatarItemProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div
        className='flex items-center gap-8 border-b border-slate-5 py-4 first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0'
        data-id={avatar.itemId}
      >
        <div className='flex min-w-[72px] gap-2'>
          <EquipmentImage itemId={avatar.itemId} itemName={avatar.itemName} rarity={ITEM_RARITY[avatar.itemRarity]} />
        </div>

        <div className='min-w-[48px]' />

        <div className='flex grow flex-col gap-1'>
          <div className='flex items-baseline gap-1 text-sm font-medium text-slate-12'>
            {avatar.itemName} <span className='text-xs text-slate-11'>{avatar.slotName}</span>
          </div>
          <div className='text-xs text-green-11'>{itemInformation.setItemName}</div>

          {/* {avatar.emblems && (
            <div className='flex flex-col gap-1'>
              {avatar.emblems.map((emblem, index) => (
                <div className='text-xs text-green-11' key={index}>
                  {emblem.itemName}
                </div>
              ))}
            </div>
          )} */}
        </div>

        <div className='flex justify-end'>
          <Button appearance='ghost' color='slate' onClick={() => setIsDialogOpen(true)} size='sm'>
            View details
          </Button>
        </div>
      </div>

      <Dialog onOpenChange={setIsDialogOpen} open={isDialogOpen} title={`${avatar.itemName} details`}>
        <div className='grid grid-cols-2 gap-x-8'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <div className='text-sm font-medium text-slate-12'>Emblems</div>
              {avatar.emblems && (
                <div className='flex flex-col gap-1'>
                  {avatar.emblems.map((emblem, index) => (
                    <div className='text-xs text-green-11' data-id={emblem} key={index}>
                      {emblem.itemName}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className='flex flex-col gap-2'>
              <div className='text-sm font-medium text-slate-12'>Item details</div>

              <p className='text-xs text-slate-11'>{itemInformation.itemExplainDetail}</p>
            </div>
          </div>

          <div />
        </div>
      </Dialog>
    </>
  );
};
