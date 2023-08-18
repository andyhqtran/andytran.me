import { CollapsibleCard } from '@several-ui/collapsible-card';

import { CharacterCreatureRow } from '~/components/character/CharacterCreatureRow';
import { getCharacterCreature } from '~/data/getCharacterCreature';
import { getItemInformation } from '~/data/getItemInformation';
import { type Server } from '~/types/neople';
import { type Character } from '~/types/rankings';

export type CharacterCreatureCardProps = {
  characterId: Character['characterId'];
  serverId: Server['serverId'];
};

export const CharacterCreatureCard = async ({ characterId, serverId }: CharacterCreatureCardProps) => {
  const creature = await getCharacterCreature({ characterId, serverId });
  const creatureInformation = creature ? await getItemInformation({ itemId: creature.itemId }) : undefined;

  return (
    <CollapsibleCard defaultOpen title='Creature'>
      {creature ? (
        <div className='-m-4 flex flex-col'>
          <CharacterCreatureRow creature={creature} creatureInformation={creatureInformation} />
        </div>
      ) : (
        <p>Unable to retrieve creature information</p>
      )}
    </CollapsibleCard>
  );
};
