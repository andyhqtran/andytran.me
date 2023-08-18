import { twMerge } from 'tailwind-merge';

import { type Rune } from '~/types/neople';
import { getRuneTextColor } from '~/utils/getRuneColor';

export type CharacterTalismanRunesProps = {
  runes: Rune[];
};

export const CharacterTalismanRunes = ({ runes }: CharacterTalismanRunesProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-sm font-medium text-slate-12'>Runes</div>

      <div className='flex flex-col gap-1'>
        {runes?.map((rune, index) => (
          <div
            className={twMerge('text-xs text-slate-11', getRuneTextColor(rune.itemName))}
            data-id={rune.itemId}
            key={index}
          >
            {rune.itemName}
          </div>
        ))}
      </div>
    </div>
  );
};
