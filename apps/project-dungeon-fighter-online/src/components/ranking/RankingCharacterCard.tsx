import Image from 'next/image';
import Link from 'next/link';

import { Routes } from '~/constants/Routes';

export type RankingCharacterCardProps = {
  characterId: string;
  subAdvancementId: string;
  subAdvancementName: string;
};

export const RankingCharacterCard = ({
  characterId,
  subAdvancementId,
  subAdvancementName,
}: RankingCharacterCardProps) => {
  return (
    <Link
      className='group/character relative aspect-square grow cursor-pointer overflow-hidden rounded border border-slate-5 bg-slate-2'
      data-character-id={characterId}
      data-sub-advancement-id={subAdvancementId}
      data-testid='RANKING_CHARACTER_CARD'
      href={`${Routes.Ranking}/${subAdvancementId}`}
    >
      <Image
        alt={`Image of ${subAdvancementName}`}
        className='pointer-events-none object-cover transition-transform group-hover/character:scale-125 group-focus-visible/character:scale-125'
        fill
        src={`/assets/characters/${characterId}-${subAdvancementId}.jpeg`}
      />

      <div className='pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity group-hover/character:opacity-100 group-focus-visible/character:opacity-100'>
        <div className='absolute inset-0 h-full w-full bg-slate-1 opacity-90' />

        {!!subAdvancementName && <div className='relative z-10 text-xs font-semibold'>{subAdvancementName}</div>}
      </div>
    </Link>
  );
};
