import { Cross2Icon } from '@radix-ui/react-icons';
import { IconButton } from '@several-ui/icon-button';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { trackClickedFavoriteAdvancementCard } from '~/analytics/trackClickedFavoriteAdvancementCard';
import { Advancement, ADVANCEMENTS } from '~/constants/advancements';
import { Routes } from '~/constants/Routes';

export type FavoritesAdvancementCardProps = {
  id: Advancement['id'];
};

export const FavoritesAdvancementCard = ({ id = 'berserker' }) => {
  const advancement = ADVANCEMENTS.find((advancement) => advancement.id === id);

  if (!advancement) return null;

  return (
    <div
      className={twMerge(
        'group/favorite-advancement relative aspect-square overflow-hidden rounded border border-slate-5 bg-slate-2',
      )}
      data-testid='FAVORITE_ADVANCEMENT_CARD'
    >
      <Link
        className='group/favorite-advancement-link block h-full w-full'
        data-testid='FAVORITE_ADVANCEMENT_CARD_LINK'
        href={`${Routes.Ranking}/${id}`}
        onClick={() => trackClickedFavoriteAdvancementCard({ id })}
      >
        <Image
          alt={`Image of ${advancement.name}`}
          className='pointer-events-none object-cover transition-transform group-hover/favorite-advancement:scale-110 group-focus-visible/favorite-advancement-link:scale-110'
          fill
          id={advancement.id}
          src={`/assets/characters/${advancement.characterId}-${advancement.id}.jpeg`}
        />
      </Link>

      <IconButton appearance='outline' className='absolute right-1 top-1' color='slate' size='xs'>
        <Cross2Icon className='h-2 w-2' />
      </IconButton>
    </div>
  );
};
