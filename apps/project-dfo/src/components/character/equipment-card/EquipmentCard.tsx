import { CollapsibleCard } from '@several-ui/collapsible-card';

import { EquipmentCardItem } from '~/components/character/equipment-card/EquipmentCardItem';
import { getCharacterEquipment } from '~/data/getCharactersEquipment';
import { type Character } from '~/fetchers/fetchCharacters';
import { type Server } from '~/fetchers/fetchServers';

export type EquipmentCardProps = {
  characterId: Character['characterId'];
  serverId: Server['serverId'];
};

export const EquipmentCard = async ({ characterId, serverId }: EquipmentCardProps) => {
  const equipment = await getCharacterEquipment({ characterId, serverId });

  return (
    <CollapsibleCard defaultOpen title='Equipment'>
      <div className='flex flex-col'>
        {equipment ? (
          equipment?.map((equip, index) => <EquipmentCardItem equip={equip} key={index} />)
        ) : (
          <p>No equipment entries.</p>
        )}
      </div>
    </CollapsibleCard>
  );
};
