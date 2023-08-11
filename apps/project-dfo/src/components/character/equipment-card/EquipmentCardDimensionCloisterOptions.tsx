import { type CharacterEquipment } from '~/fetchers/fetchCharacterEquipment';

export type EquipmentCardDimensionCloisterOptionsProps = {
  options: CharacterEquipment['bakalInfo']['options'];
};

export const EquipmentCardDimensionCloisterOptions = ({ options }: EquipmentCardDimensionCloisterOptionsProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-sm font-medium text-slate-12'>Hall of Dimensions fusion options</div>

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
