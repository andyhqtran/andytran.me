import { CharacterEquipment } from '~/data/getCharactersEquipment';

export type EquipmentCardBakalFusionOptionsProps = {
  options: CharacterEquipment['bakalInfo']['options'];
};

export const EquipmentCardBakalFusionOptions = ({ options }: EquipmentCardBakalFusionOptionsProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-sm font-medium text-slate-12'>Bakal fusion options</div>

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
