'use client';
import { VisuallyHidden } from '@several-ui/visually-hidden';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { CharacterAvatarDialog } from '~/components/character/CharacterAvatarDialog';
import { EquipmentImage } from '~/components/EquipmentImage';
import { ITEM_RARITY } from '~/constants/itemRarity';
import { type ItemInformation } from '~/fetchers/neople/fetchItemInformation';
import { type Avatar } from '~/types/neople';

export type CharacterAvatarRowProps = {
  avatar: Avatar;
  avatarInformation?: ItemInformation;
};

export const CharacterAvatarRow = ({ avatar, avatarInformation }: CharacterAvatarRowProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div
        className='relative flex min-h-[72px] cursor-pointer items-center gap-8 bg-slate-2 p-4 hover:bg-slate-3'
        data-testid='CHARACTER_AVATAR_ROW'
        data-id={avatar.itemId}
      >
        <button
          className='absolute inset-0 rounded'
          onClick={() => {
            setIsDialogOpen(true);
          }}
        >
          <VisuallyHidden>Open equipment details</VisuallyHidden>
        </button>

        <div className='flex min-w-[72px] gap-2'>
          <EquipmentImage itemId={avatar.itemId} itemName={avatar.itemName} rarity={ITEM_RARITY[avatar.itemRarity]} />

          {avatar?.clone && (
            <EquipmentImage itemId={avatar.clone.itemId} itemName={avatar.clone.itemName} rarity='common' />
          )}
        </div>

        <div className='hidden min-w-[48px] text-sm font-medium text-blue-12 sm:block' />

        <div className='flex grow flex-col gap-1'>
          {avatarInformation?.setItemName && (
            <div
              className='truncate text-xs text-green-11'
              data-testid='CHARACTER_AVATAR_ROW_SET_NAME'
              data-id={avatarInformation.setItemId}
            >
              {avatarInformation.setItemName}
            </div>
          )}

          <div className='flex items-baseline gap-1'>
            <span className='truncate text-xs font-medium text-slate-12' data-testid='CHARACTER_AVATAR_ROW_ITEM_NAME'>
              {avatar.itemName}
            </span>
            <span
              className='hidden whitespace-nowrap text-xs text-slate-11 sm:block'
              data-testid='CHARACTER_AVATAR_ROW_ITEM_TYPE'
            >
              {avatar.slotName}
            </span>
          </div>

          {avatar.optionAbility && <div className='truncate text-xs text-slate-11'>{avatar.optionAbility}</div>}

          {!!avatar.clone?.itemName && (
            <div className='truncate text-[10px] text-slate-11'>[Clone] {avatar.clone.itemName}</div>
          )}
        </div>

        <div className='hidden shrink-0 flex-col items-end sm:flex'>
          {avatar?.emblems?.map((emblem, index) => (
            <span
              className={twMerge(
                'text-[10px]',
                emblem.itemName.includes('Platinum') && 'text-orange-11',
                emblem.itemName.includes('Red') && 'text-red-11',
                emblem.itemName.includes('Blue') && 'text-blue-11',
                emblem.itemName.includes('Yellow') && 'text-yellow-11',
                emblem.itemName.includes('Green') && 'text-green-11',
              )}
              key={index}
            >
              {emblem.itemName}
            </span>
          ))}
        </div>
      </div>

      <CharacterAvatarDialog
        avatar={avatar}
        avatarInformation={avatarInformation}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
};
