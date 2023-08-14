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
          <div className='text-xs text-green-11' key={index}>
            {emblem.itemName}
          </div>
        ))}
      </div>
    </div>
  );
};
