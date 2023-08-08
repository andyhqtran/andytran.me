import Link, { LinkProps } from 'next/link';
import { tv } from 'tailwind-variants';

import { PlayerAvatar } from '~/components/player/PlayerAvatar';
import { PlayerEquipment } from '~/components/player/PlayerEquipment';
import { Routes } from '~/constants/Routes';

const player = tv({
  base: 'flex min-h-[96px] items-center justify-between gap-4 rounded border py-4 pr-4 text-slate-11',
  variants: {
    appearance: {
      default: 'border-slate-5 bg-slate-2 hover:bg-slate-3',
      featured: 'border-blue-5 bg-blue-2 text-blue-9 hover:bg-blue-3',
    },
  },
  defaultVariants: {
    appearance: 'default',
  },
});

const playerRankContainer = tv({
  base: 'flex min-w-[80px] flex-col items-center justify-center border-r',
  variants: {
    appearance: {
      default: 'border-slate-5',
      featured: 'border-blue-5',
    },
  },
  defaultVariants: {
    appearance: 'default',
  },
});

const playerRank = tv({
  base: 'text-2xl font-bold tracking-wide',
  variants: {
    appearance: {
      default: 'text-slate-12',
      featured: 'text-blue-9',
    },
  },
  defaultVariants: {
    appearance: 'default',
  },
});

export type PlayerProps = Omit<LinkProps, 'href' | 'id'> & {
  fame: number;
  guild?: string;
  id: string;
  name: string;
  rank: number;
};

export const Player = ({ fame = 0, guild, id, name = 'Untitled', rank = 0, ...restOfProps }: PlayerProps) => {
  const appearance = rank === 1 ? 'featured' : 'default';

  return (
    <Link className={player({ appearance })} href={`${Routes.Character}/${id}`} {...restOfProps}>
      <div className='flex shrink-0 gap-4'>
        <div className={playerRankContainer({ appearance })}>
          <span className='text-xs'>Rank</span>
          <div className={playerRank({ appearance })}>{rank}</div>
        </div>

        <PlayerAvatar appearance={appearance} />

        <div className='flex items-center'>
          <div className='flex flex-col'>
            <h2 className='truncate text-sm text-slate-12'>{name}</h2>
            {!!guild && <p className='text-xs text-slate-11'>{guild}</p>}
            <p className='text-xs text-slate-11'>{fame.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className='flex shrink-0 items-center gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
          </div>
          <div className='flex gap-2'>
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
          </div>
          <div className='flex gap-2'>
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
          </div>
          <div className='flex gap-2'>
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
            <PlayerEquipment appearance={appearance} />
          </div>
        </div>
      </div>
    </Link>
  );
};
