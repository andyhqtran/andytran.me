import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Banner } from '@several-ui/banner';
import { CollapsibleCard } from '@several-ui/collapsible-card';
import { Separator } from '@several-ui/separator';
import { Fragment } from 'react';

import { CharacterAvatarRow } from '~/components/character/CharacterAvatarRow';
import { getCharacterBuffAvatar } from '~/data/getCharacterBuffAvatar';
import { getItemInformation } from '~/data/getItemInformation';
import { type Character } from '~/fetchers/neople/fetchCharacters';
import { Server } from '~/types/neople';

export type CharacterBuffEquipmentCardProps = {
  characterId: Character['characterId'];
  serverId: Server['serverId'];
};

export const CharacterBuffEquipmentCard = async ({ characterId, serverId }: CharacterBuffEquipmentCardProps) => {
  const buffAvatars = await getCharacterBuffAvatar({ characterId, serverId });

  const buffAvatarsItemInformations = await Promise.all(
    buffAvatars.map(async (avatar) => await getItemInformation({ itemId: avatar.itemId })),
  );

  return (
    <CollapsibleCard defaultOpen title='Buff equipment'>
      {buffAvatars?.length ? (
        <div className='-m-4 flex flex-col'>
          <Banner
            appearance='warning'
            className='m-4'
            prefix={<ExclamationTriangleIcon className='h-3 w-3' />}
            size='sm'
          >
            Neople currently doesn&apos;t return buff equipment information.
          </Banner>

          <Separator />

          {buffAvatars?.map((avatar, index) => {
            const isLast = index === buffAvatars.length - 1;

            return (
              <Fragment key={index}>
                <CharacterAvatarRow avatar={avatar} avatarInformation={buffAvatarsItemInformations[index]} />
                {!isLast && <Separator />}
              </Fragment>
            );
          })}
        </div>
      ) : (
        <p>Unable to retrieve buff equipment information</p>
      )}
    </CollapsibleCard>
  );
};
