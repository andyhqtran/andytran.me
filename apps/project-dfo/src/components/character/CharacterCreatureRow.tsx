'use client';
import { VisuallyHidden } from '@several-ui/visually-hidden';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { CharacterCreatureDialog } from '~/components/character/CharacterCreatureDialog';
import { EquipmentImage } from '~/components/EquipmentImage';
import { ITEM_RARITY } from '~/constants/itemRarity';
import { type ItemInformation } from '~/fetchers/neople/fetchItemInformation';
import { type Creature } from '~/types/neople';

export type CharacterCreatureRowProps = {
  creature: Creature;
  creatureInformation: ItemInformation;
};

export const CharacterCreatureRow = ({ creature, creatureInformation }: CharacterCreatureRowProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div
        className='relative flex min-h-[72px] cursor-pointer items-center gap-8 bg-slate-2 p-4 hover:bg-slate-3'
        data-testid='CHARACTER_CREATURE_ROW'
        data-id={creature.itemId}
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
          <EquipmentImage
            itemId={creature.itemId}
            itemName={creature.itemName}
            rarity={ITEM_RARITY[creature.itemRarity]}
          />

          {creature?.clone?.itemId && (
            <EquipmentImage itemId={creature.clone.itemId} itemName={creature.clone.itemName} rarity='common' />
          )}
        </div>

        <div className='hidden min-w-[48px] text-sm font-medium text-blue-12 sm:block' />

        <div className='flex grow flex-col gap-1'>
          {creatureInformation?.setItemName && (
            <div
              className='truncate text-xs text-green-11'
              data-testid='CHARACTER_AVATAR_ROW_SET_NAME'
              data-id={creatureInformation.setItemId}
            >
              {creatureInformation.setItemName}
            </div>
          )}

          <div className='flex items-baseline gap-1'>
            <span className='truncate text-xs font-medium text-slate-12' data-testid='CHARACTER_AVATAR_ROW_ITEM_NAME'>
              {creature.itemName}
            </span>
          </div>

          {!!creature.clone?.itemName && (
            <div className='truncate text-[10px] text-slate-11'>[Clone] {creature.clone.itemName}</div>
          )}
        </div>

        <div className='hidden shrink-0 flex-col items-end sm:flex'>
          {creature?.artifact?.map((artifact, index) => (
            <span
              className={twMerge(
                'text-[10px]',
                artifact.slotColor === 'RED' && 'text-red-11',
                artifact.slotColor === 'BLUE' && 'text-blue-11',
                artifact.slotColor === 'GREEN' && 'text-green-11',
              )}
              key={index}
            >
              {artifact.itemName}
            </span>
          ))}
        </div>
      </div>

      <CharacterCreatureDialog
        creature={creature}
        creatureInformation={creatureInformation}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
};
