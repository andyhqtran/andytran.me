import { CollapsibleCard } from '@several-ui/collapsible-card';
import { Separator } from '@several-ui/separator';
import { Fragment } from 'react';

import { CharacterEquipmentRow } from '~/components/character/CharacterEquipmentRow';
import { getCharacterEquipment } from '~/data/getCharactersEquipment';
import { type Character } from '~/fetchers/neople/fetchCharacters';
import { type Server } from '~/fetchers/neople/fetchServers';

export type CharacterEquipmentCardProps = {
  characterId: Character['characterId'];
  serverId: Server['serverId'];
};

export const CharacterEquipmentCard = async ({ characterId, serverId }: CharacterEquipmentCardProps) => {
  const equipment = await getCharacterEquipment({ characterId, serverId });

  return (
    <CollapsibleCard defaultOpen title='Equipment'>
      <div className='-m-4 flex flex-col'>
        {equipment ? (
          equipment?.map((equip, index) => {
            const isLast = index === equipment.length - 1;
            return (
              <Fragment key={index}>
                <CharacterEquipmentRow equip={equip} />
                {!isLast && <Separator />}
              </Fragment>
            );
          })
        ) : (
          <p>No equipment entries.</p>
        )}
      </div>
    </CollapsibleCard>
  );
};
