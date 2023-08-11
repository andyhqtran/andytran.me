import { CollapsibleCard } from '@several-ui/collapsible-card';

import { AvatarCardItem } from '~/components/character/avatar-card/AvatarCardItem';
import { getCharacterAvatar } from '~/data/getCharacterAvatar';

export const AvatarCard = async ({ characterId, serverId }) => {
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
