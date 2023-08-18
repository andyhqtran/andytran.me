'use client';
import { VisuallyHidden } from '@several-ui/visually-hidden';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { CharacterTalismanDialog } from '~/components/character/CharacterTalismanDialog';
import { EquipmentImage } from '~/components/EquipmentImage';
import { ItemInformation } from '~/fetchers/neople/fetchItemInformation';
import { type Talisman } from '~/types/neople';
import { getRuneBorderColor, getRuneTextColor } from '~/utils/getRuneColor';

export type CharacterTalismanRowProps = {
  talisman: Talisman;
  talismanInformation: ItemInformation;
};

export const CharacterTalismanRow = ({ talisman, talismanInformation }: CharacterTalismanRowProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div
        className='relative flex min-h-[72px] cursor-pointer items-center gap-8 bg-slate-2 p-4 hover:bg-slate-3'
        data-testid='CHARACTER_TALISMAN_ROW'
        data-id={talisman.talisman.itemId}
      >
        <button
          className='absolute inset-0 rounded'
          onClick={() => {
            setIsDialogOpen(true);
          }}
        >
          <VisuallyHidden>Open talisman details</VisuallyHidden>
        </button>

        <div className='flex min-w-[72px] gap-2 sm:min-w-[152px]'>
          <EquipmentImage itemId={talisman.talisman.itemId} itemName={talisman.talisman.itemName} rarity='common' />

          {talisman.runes?.map((rune, index) => (
            <EquipmentImage
              className={twMerge(getRuneBorderColor(rune.itemName), 'hidden sm:block')}
              itemId={rune.itemId}
              itemName={rune.itemName}
              key={index}
            />
          ))}
        </div>

        <div className='flex grow flex-col gap-1'>
          <div className='flex items-baseline gap-1'>
            <span className='truncate text-xs font-medium text-slate-12' data-testid='CHARACTER_AVATAR_ROW_ITEM_NAME'>
              {talisman.talisman.itemName}
            </span>
          </div>

          <div className='flex items-center gap-1 truncate'>
            {talisman.talisman.runeTypes.map((runeType, index) => (
              <div className={twMerge('text-[10px]', getRuneTextColor(runeType))} key={index}>
                [{runeType}]
              </div>
            ))}
          </div>
        </div>

        <div className='hidden shrink-0 flex-col items-end sm:flex'>
          {talisman.runes?.map((rune, index) => (
            <span className={twMerge('text-[10px]', getRuneTextColor(rune.itemName))} key={index}>
              {rune.itemName.replace(/^.*\[(.*?)\].*$/, '$1')}
            </span>
          ))}
        </div>
      </div>

      <CharacterTalismanDialog
        talisman={talisman}
        talismanInformation={talismanInformation}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
};
