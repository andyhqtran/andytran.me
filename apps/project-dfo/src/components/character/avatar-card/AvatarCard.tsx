import { CollapsibleCard } from '@several-ui/collapsible-card';

import { AvatarCardItem } from '~/components/character/avatar-card/AvatarCardItem';
import { getCharacterAvatar } from '~/data/getCharacterAvatar';
import { type Server } from '~/types/neople';

export type AvatarCardProps = {
  characterId: string;
  serverId: Server['serverId'];
};

export const AvatarCard = async ({ characterId, serverId }: AvatarCardProps) => {
  const avatars = await getCharacterAvatar({ characterId, serverId });

  return (
    <CollapsibleCard defaultOpen title='Avatar'>
      {avatars?.length ? (
        avatars?.map((avatar, index) => <AvatarCardItem avatar={avatar} key={index} />)
      ) : (
        <p>Unable to retrieve avatar information</p>
      )}
    </CollapsibleCard>
  );
};
