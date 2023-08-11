import { isNumber } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { Routes } from '~/constants/Routes';

export type CharacterCardProps = ComponentProps<'div'> & {
  fame?: number;
  guild?: string;
  id: string;
  index: number;
  label: string;
  job?: string;
  level: number;
  name: string;
  serverId: string;
};

export const CharacterCard = ({
  className,
  fame = 0,
  guild,
  id,
  job,
  index,
  label = 'Rank',
  level,
  name,
  serverId,
  ...restOfProps
}: CharacterCardProps) => {
  return (
    <div
      className={twMerge(
        'relative flex min-h-[96px] cursor-pointer items-center justify-between gap-4 rounded border border-slate-7 bg-slate-3 py-4 pr-4 text-slate-11 hover:bg-slate-4',
        className,
      )}
      data-character-id={id}
      {...restOfProps}
    >
      <Link
        className='absolute inset-0 rounded'
        href={`${Routes.Character}/${serverId === 'siroco' ? 'sirocco' : serverId}/${name}`}
      />
      <div className='flex shrink-0 gap-4'>
        {label && (
          <div className='flex min-w-[80px] flex-col items-center justify-center border-r border-slate-7'>
            <span className='text-xs'>{label}</span>
            <div className='text-2xl font-bold tracking-wide text-slate-12'>{index}</div>
          </div>
        )}

        <div className='rounded border border-slate-7 bg-slate-3 text-xs'>
          <Image
            alt={`Avatar for ${name}`}
            height={64}
            src={`https://img-api.dfoneople.com/df/servers/${serverId}/characters/${id}`}
            width={64}
          />
        </div>

        <div className='flex items-center'>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-col'>
              <h2 className='truncate text-sm text-slate-12'>{name}</h2>
              {!!job && (
                <p className='text-xs text-slate-11'>
                  {level && `Lv.${level} `}
                  {job}
                </p>
              )}
            </div>

            {!!guild && <p className='text-xs text-slate-11'>{guild}</p>}
            {isNumber(fame) && (
              <p className='flex items-center gap-1 text-xs text-slate-11'>
                <Image alt='Fame icon' className='w-3' height={13} src='/assets/fame-icon.png' width={15} />
                <span>{fame.toLocaleString()}</span>
              </p>
            )}
          </div>
        </div>
      </div>
      <p className='flex h-6 items-center gap-1 rounded border border-slate-7 bg-slate-3 px-2 text-xs capitalize text-slate-11'>
        Server: <span className='text-slate-12'>{serverId}</span>
      </p>
    </div>
  );
};
