import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Banner } from '@several-ui/banner';
import { CollapsibleCard } from '@several-ui/collapsible-card';
import { Separator } from '@several-ui/separator';
import { Fragment } from 'react';

import { CharacterTalismanRow } from '~/components/character/CharacterTalismanRow';
import { getCharacterTalisman } from '~/data/getCharacterTalisman';
import { getItemInformation } from '~/data/getItemInformation';
import { type Server } from '~/types/neople';

export type CharacterTalismanCardProps = {
  characterId: string;
  serverId: Server['serverId'];
};

export const CharacterTalismanCard = async ({ characterId, serverId }: CharacterTalismanCardProps) => {
  const talismans = await getCharacterTalisman({ characterId, serverId });
  const talismansItemInformations = await Promise.all(
    talismans.map(async (talisman) => await getItemInformation({ itemId: talisman.talisman.itemId })),
  );

  return (
    <CollapsibleCard defaultOpen title='Talisman'>
      {talismans?.length ? (
        <div className='-m-4 flex flex-col'>
          <Banner
            appearance='warning'
            className='m-4'
            prefix={<ExclamationTriangleIcon className='h-3 w-3' />}
            size='sm'
          >
            Neople currently doesn&apos;t support rune images.
          </Banner>
          <Separator />

          {talismans.map((talisman, index) => {
            const isLast = index === talismans.length - 1;

            return (
              <Fragment key={index}>
                <CharacterTalismanRow talisman={talisman} talismanInformation={talismansItemInformations?.[index]} />
                {!isLast && <Separator />}
              </Fragment>
            );
          })}
        </div>
      ) : (
        <p>Unable to retrieve talisman information</p>
      )}
    </CollapsibleCard>
  );
};
