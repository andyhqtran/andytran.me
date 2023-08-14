import { twMerge } from 'tailwind-merge';

import { type Emblem } from '~/types/neople';

export type CharacterAvatarEmblemsProps = {
  emblems: Emblem[];
};

export const CharacterAvatarEmblems = ({ emblems }: CharacterAvatarEmblemsProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-sm font-medium text-slate-12'>Emblems</div>

      <div className='flex flex-col gap-1'>
        {emblems?.map((emblem, index) => (
          <div
            className={twMerge(
              'text-xs text-slate-11',
              emblem.itemName.includes('Platinum') && 'text-orange-11',
              emblem.itemName.includes('Red') && 'text-red-11',
              emblem.itemName.includes('Blue') && 'text-blue-11',
              emblem.itemName.includes('Yellow') && 'text-yellow-11',
              emblem.itemName.includes('Green') && 'text-green-11',
            )}
            key={index}
          >
            {emblem.itemName}
          </div>
        ))}
      </div>
    </div>
  );
};
