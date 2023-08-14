'use client';
import { VisuallyHidden } from '@several-ui/visually-hidden';
import { useState } from 'react';

import { trackedClickedCharacterEquipmentRow } from '~/analytics/trackClickedEquipmentCard';
import { CharacterEquipmentDialog } from '~/components/character/CharacterEquipmentDialog';
import { EquipmentImage } from '~/components/EquipmentImage';
import { ITEM_RARITY } from '~/constants/itemRarity';
import { type Equipment } from '~/types/neople';
import { conslidateEnchantStatus } from '~/utils/conslidateEnchantStatus';

export type CharacterEquipmentRowProps = {
  equip: Equipment;
};

export const CharacterEquipmentRow = ({ equip }: CharacterEquipmentRowProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div
        className='relative flex min-h-[72px] cursor-pointer items-center gap-8 bg-slate-2 p-4 hover:bg-slate-3'
        data-testid='CHARACTER_EQUIPMENT_ROW'
        data-id={equip.itemId}
      >
        <button
          className='absolute inset-0 rounded'
          onClick={() => {
            setIsDialogOpen(true);
            trackedClickedCharacterEquipmentRow({
              itemId: equip.itemId,
              itemName: equip.itemName,
              itemRarity: equip.itemRarity,
              itemType: equip.itemType,
            });
          }}
        >
          <VisuallyHidden>Open equipment details</VisuallyHidden>
        </button>

        <div className='flex min-w-[72px] gap-2'>
          <EquipmentImage itemId={equip.itemId} itemName={equip.itemName} rarity={ITEM_RARITY[equip.itemRarity]} />

          {equip?.upgradeInfo && (
            <EquipmentImage
              itemId={equip.upgradeInfo.itemId}
              itemName={equip.upgradeInfo.itemName}
              rarity={ITEM_RARITY[equip.itemRarity]}
            />
          )}
        </div>

        <div className='hidden min-w-[48px] text-sm font-medium text-blue-12 sm:block'>
          <span
            className={equip.amplificationName ? 'text-purple-9' : 'text-blue-12'}
            data-testid='CHARACTER_EQUIPMENT_ROW_REINFORCE'
          >
            +{equip.reinforce}
          </span>
          {(equip.slotId === 'WEAPON' || equip.slotId === 'SUPPORT_WEAPON') && (
            <span data-testid='CHARACTER_EQUIPMENT_ROW_REFINE'>/{equip.refine}</span>
          )}
        </div>

        <div className='flex grow flex-col gap-1'>
          <div className='flex items-baseline gap-1'>
            <span
              className='truncate text-xs font-medium text-slate-12'
              data-testid='CHARACTER_EQUIPMENT_ROW_ITEM_NAME'
            >
              {equip.itemName}
            </span>
            <span
              className='hidden whitespace-nowrap text-xs text-slate-11 sm:block'
              data-testid='CHARACTER_EQUIPMENT_ROW_ITEM_TYPE'
            >
              {equip.itemType}
            </span>
          </div>

          {equip.upgradeInfo && <div className='truncate text-xs text-red-11'>{equip.upgradeInfo.itemName}</div>}

          {equip.growInfo && (
            <div className='flex gap-4 text-xs text-blue-11'>
              {equip.growInfo.options.map((option, index) => (
                <span data-testid='CHARACTER_EQUIPMENT_ROW_OPTION_LEVEL' data-option={index + 1} key={index}>
                  {option.level}
                </span>
              ))}

              <span data-testid='CHARACTER_EQUIPMENT_ROW_TOTAL_OPTION_LEVEL'>{equip.growInfo.total.level}</span>
            </div>
          )}
        </div>
        <div className='hidden shrink-0 flex-col items-end sm:flex'>
          {equip?.enchant?.status &&
            conslidateEnchantStatus(equip.enchant.status).map((enchant, index) => (
              <span className='text-[10px] text-green-11' key={index}>
                {typeof enchant.value === 'number' ? `+${enchant.value}` : enchant.value} {enchant.name}
              </span>
            ))}
        </div>
      </div>
      <CharacterEquipmentDialog equip={equip} onOpenChange={setIsDialogOpen} open={isDialogOpen} />
    </>
  );
};
