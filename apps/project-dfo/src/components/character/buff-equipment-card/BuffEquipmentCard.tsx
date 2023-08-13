import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { CollapsibleCard } from '@several-ui/collapsible-card';

import { BuffEquipmentCardAvatarItem } from '~/components/character/buff-equipment-card/BuffEquipmentCardItem';
import { getCharacterBuffAvatar } from '~/data/getCharacterBuffAvatar';
import { getItemInformation } from '~/data/getItemInformation';
import { type Character } from '~/fetchers/neople/fetchCharacters';
import { Server } from '~/types/neople';

export type BuffEquipmentCardProps = {
  characterId: Character['characterId'];
  serverId: Server['serverId'];
};

export const BuffEquipmentCard = async ({ characterId, serverId }: BuffEquipmentCardProps) => {
  const buffAvatar = await getCharacterBuffAvatar({ characterId, serverId });

  const bufferAvatarItemInformations = await Promise.all(
    buffAvatar.map(async (avatar) => await getItemInformation({ itemId: avatar.itemId })),
  );

  return (
    <CollapsibleCard defaultOpen title='Buff equipment'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-4 rounded border border-yellow-7 bg-yellow-3 px-4 py-2 text-xs text-yellow-11'>
          <ExclamationTriangleIcon className='h-3 w-3 shrink-0' />
          Neople currently doesn&apos;t return buff equipment information.
        </div>
      </div>

      {buffAvatar.map((avatar, index) => (
        <BuffEquipmentCardAvatarItem
          avatar={avatar}
          itemInformation={bufferAvatarItemInformations[index]}
          key={index}
        />
      ))}
    </CollapsibleCard>
  );
};
