import { CollapsibleCard } from '@several-ui/collapsible-card';

import { EquipmentCardItem } from '~/components/character/equipment-card/EquipmentCardItem';
import { getCharactersEquipment } from '~/data/getCharactersEquipment';

export const EquipmentCard = async ({ characterId, serverId }) => {
  const equipment = await getCharactersEquipment({ characterId, serverId });

  return (
    <CollapsibleCard defaultOpen title='Equipment'>
      <div className='flex flex-col'>
        {equipment?.map((equip, index) => (
          <EquipmentCardItem equip={equip} key={index} />
        ))}
      </div>
    </CollapsibleCard>
  );
};
