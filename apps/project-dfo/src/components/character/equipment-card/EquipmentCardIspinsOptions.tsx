import { type CharacterEquipment } from '~/fetchers/fetchCharacterEquipment';

export type EquipmentCardIspinsOptionsProps = {
  options: CharacterEquipment['bakalInfo']['options'];
};

export const EquipmentCardIspinsOptions = ({ options }: EquipmentCardIspinsOptionsProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-sm font-medium text-slate-12'>Ispins fusion options</div>

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
