'use client';
import Image, { type ImageProps } from 'next/image';
import Link, { type LinkProps } from 'next/link';
import { twMerge } from 'tailwind-merge';

import { trackClickedRankingAdvancementCard } from '~/analytics/trackClickedAdvancementCard';

export type RankingsAdvancementCardProps = Pick<LinkProps, 'href'> &
  Pick<ImageProps, 'src'> & {
    id: string;
    title: string;
  };

export const RankingsAdvancementCard = ({ id, href, src, title }: RankingsAdvancementCardProps) => {
  return (
    <div
      className={twMerge(
        'group/advancement relative aspect-square overflow-hidden rounded border border-slate-5 bg-slate-2',
      )}
      data-id={id}
      data-testid='RANKINGS_ADVANCEMENT_CARD'
    >
      <Link
        className='group/advancement-link relative block h-full w-full'
        data-testid='RANKINGS_ADVANCEMENT_CARD_LINK'
        href={href}
        onClick={() => trackClickedRankingAdvancementCard({ id })}
      >
        <Image
          alt={`Image of ${title}`}
          className='pointer-events-none object-cover transition-transform group-hover/advancement:scale-125 group-focus-visible/advancement-link:scale-125'
          fill
          id={id}
          priority
          sizes='200px'
          src={src}
        />

        <div className='absolute inset-0 bg-slate-1 opacity-0 transition-opacity group-hover/advancement:opacity-80 group-focus-visible/advancement-link:opacity-80' />

        <div
          className='absolute inset-0 flex items-center justify-center text-center text-xs font-semibold text-slate-12 opacity-0 transition-opacity group-hover/advancement:opacity-100 group-focus-visible/advancement-link:opacity-100'
          data-testid='ADVANCEMENT_CARD_TITLE'
        >
          {title}
        </div>
      </Link>
    </div>
  );
};
