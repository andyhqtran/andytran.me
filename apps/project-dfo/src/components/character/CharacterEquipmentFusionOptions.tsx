import { Option } from '~/types/neople';

export type CharacterEquipmentFusionOptionsProps = {
  options?: Option[];
  title: string;
};

export const CharacterEquipmentFusionOptions = ({ options, title }: CharacterEquipmentFusionOptionsProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-sm font-medium text-slate-12'>{title}</div>

      {options && (
        <div className='flex flex-col gap-1'>
          {options.map((option, index) => (
            <div className='text-xs text-slate-11' key={index}>
              {option.explainDetail}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
