import { CollapsibleCard } from '@several-ui/collapsible-card';
import { Separator } from '@several-ui/separator';
import { Fragment } from 'react';

import { CharacterAvatarRow } from '~/components/character/CharacterAvatarRow';
import { getCharacterAvatar } from '~/data/getCharacterAvatar';
import { getItemInformation } from '~/data/getItemInformation';
import { type Server } from '~/types/neople';

export type CharacterAvatarCardProps = {
  characterId: string;
  serverId: Server['serverId'];
};

export const CharacterAvatarCard = async ({ characterId, serverId }: CharacterAvatarCardProps) => {
  const avatars = await getCharacterAvatar({ characterId, serverId });

  const avatarsItemInformations = await Promise.all(
    avatars.map(async (avatar) => await getItemInformation({ itemId: avatar.itemId })),
  );

  return (
    <CollapsibleCard defaultOpen title='Avatar'>
      {avatars?.length ? (
        <div className='-m-4 flex flex-col'>
          {avatars.map((avatar, index) => {
            const isLast = index === avatars.length - 1;

            return (
              <Fragment key={index}>
                <CharacterAvatarRow avatar={avatar} avatarInformation={avatarsItemInformations[index]} key={index} />
                {!isLast && <Separator />}
              </Fragment>
            );
          })}
        </div>
      ) : (
        <p>Unable to retrieve avatar information</p>
      )}
    </CollapsibleCard>
  );
};
