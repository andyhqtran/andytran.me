'use client';
import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import { IconButton } from '@several-ui/icon-button';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { Advancement, ADVANCEMENTS } from '~/constants/advancements';
import { Routes } from '~/constants/Routes';

export type AdvancementCardProps = {
  id: Advancement['id'];
};

export const AdvancementCard = ({ id }: AdvancementCardProps) => {
  const advancement = ADVANCEMENTS.find((advancement) => advancement.id === id);
  const isFavorited = false;

  if (!advancement) return null;

  return (
    <div
      className={twMerge(
        'group/advancement relative aspect-square overflow-hidden rounded border border-slate-5 bg-slate-2',
      )}
      data-testid='ADVANCEMENT_CARD'
    >
      <Link className='group/advancement-link' data-testid='ADVANCEMENT_CARD_LINK' href={`${Routes.Ranking}/${id}`}>
        <Image
          alt={`Image of ${advancement.name}`}
          className='pointer-events-none object-cover transition-transform group-hover/advancement:scale-125 group-focus-visible/advancement-link:scale-125'
          fill
          id={id}
          src={`/assets/characters/${advancement.characterId}-${advancement.id}.jpeg`}
        />

        <div className='absolute inset-0 bg-slate-1 opacity-0 transition-opacity group-hover/advancement:opacity-80 group-focus-visible/advancement-link:opacity-80' />

        <div
          className='absolute inset-0 flex items-center justify-center text-center text-xs font-semibold text-slate-12 opacity-0 transition-opacity group-hover/advancement:opacity-100 group-focus-visible/advancement-link:opacity-100'
          data-testid='ADVANCEMENT_CARD_TITLE'
        >
          {advancement.name}
        </div>
      </Link>

      <IconButton
        appearance='outline'
        className={twMerge(
          'absolute right-2 top-2 transition-opacity group-focus-within/advancement:opacity-100 group-hover/advancement:opacity-100',
          isFavorited ? 'opacity-100' : 'opacity-0',
        )}
        color='slate'
        size='sm'
      >
        {isFavorited ? <StarFilledIcon className='h-3 w-3' /> : <StarIcon className='h-3 w-3' />}
      </IconButton>
    </div>
  );
};
