import { CharacterEquipment } from '~/data/getCharactersEquipment';

export type EquipmentCardEnchantProps = {
  details?: CharacterEquipment['enchant']['explain'];
  enchants: CharacterEquipment['enchant']['status'];
};

export const EquipmentCardEnchant = ({ details, enchants }: EquipmentCardEnchantProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-sm font-medium text-slate-12'>Enchantment</div>

      <div className='flex flex-col gap-1'>
        {!!details && <div className='text-xs text-slate-11'>{details}</div>}

        {enchants?.map((enchant, index) => (
          <div className='text-xs text-slate-11' key={index}>
            {enchant?.name} +{enchant.value}
          </div>
        ))}
      </div>
    </div>
  );
};