import { CollapsibleCard } from '@several-ui/collapsible-card';
import Image from 'next/image';

import { getCharactersEquipment } from '~/data/getCharactersEquipment';

export const EquipmentCard = async ({ characterId, serverId }) => {
  const equipment = await getCharactersEquipment({ characterId, serverId });

  return (
    <CollapsibleCard defaultOpen title='Equipment'>
      <div className='flex flex-col gap-8'>
        {equipment.map((equip) => (
          <>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-4'>
                <div className='flex gap-1'>
                  <Image
                    alt={equip.itemName}
                    height={32}
                    src={`https://img-api.dfoneople.com/df/items/${equip.itemId}`}
                    width={32}
                  />
                  {equip.upgradeInfo && (
                    <Image
                      alt={equip.upgradeInfo.itemName}
                      height={32}
                      src={`https://img-api.dfoneople.com/df/items/${equip.upgradeInfo.itemId}`}
                      width={32}
                    />
                  )}
                </div>

                <div className='text-sm font-medium'>
                  <span className='text-blue-12'>{equip.reinforce}</span>/
                  <span className='text-blue-9'>{equip.refine}</span>
                </div>

                <div>
                  <div className='text-sm font-medium text-slate-12'>
                    {equip.itemName} <span className='text-xs text-slate-11'>{equip.itemTypeDetail}</span>
                  </div>
                  <div className='text-xs text-red-11'>{equip.upgradeInfo?.itemName}</div>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-x-8'>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-col gap-1'>
                    <div className='text-sm text-slate-12'>Enchantment</div>
                    <div>{equip.enchant?.explain}</div>
                    {equip.enchant?.status.map((status, index) => (
                      <div key={index}>
                        {status?.name} +{status.value}
                      </div>
                    ))}
                  </div>

                  <div className='flex flex-col gap-1'>
                    <div className='text-sm text-slate-12'>Bakal fusion options</div>
                    <div className='flex flex-col gap-1'>
                      {equip.bakalInfo?.options.map((option, index) => (
                        <div key={index}>{option.explainDetail}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  {equip.growInfo && (
                    <div className='flex flex-col gap-2'>
                      <div className='flex flex-col gap-1'>
                        <div className='text-sm text-slate-12'>Growth options</div>
                        <div>
                          Total damage value: <span className='text-blue-9'>{equip.growInfo.total.damage}</span>
                        </div>
                        <div>
                          Total growth option levels: <span className='text-blue-9'>{equip.growInfo.total.level}</span>
                        </div>
                      </div>
                      {equip.growInfo?.options?.map((option, index) => (
                        <div className='flex flex-col gap-1' key={index}>
                          <div className='text-xs font-medium text-slate-12'>
                            Option {index + 1} - Lv{option.level} ({option.expRate}%)
                          </div>
                          <div className='text-slate-11' key={index}>
                            {option.explainDetail}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </CollapsibleCard>
  );
};
