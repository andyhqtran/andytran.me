import { type Enchant, type EnchantStatus } from '~/types/neople';
import { conslidateEnchantStatus } from '~/utils/conslidateEnchantStatus';

export type CharacterEquipmentEnchantProps = Pick<Enchant, 'explain'> & {
  enchants: EnchantStatus[];
};

export const CharacterEquipmentEnchant = ({ enchants, explain }: CharacterEquipmentEnchantProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-sm font-medium text-slate-12'>Enchantment</div>

      <div className='flex flex-col gap-1'>
        {!!explain && <div className='text-xs text-green-11'>{explain}</div>}

        {conslidateEnchantStatus(enchants)?.map((enchant, index) => (
          <div className='text-xs text-green-11' key={index}>
            {enchant?.name} +{enchant.value}
          </div>
        ))}
      </div>
    </div>
  );
};
