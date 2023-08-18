'use client';

import { Badge } from '@several-ui/badge';
import Link from 'next/link';

import { NeopleLogo } from '~/components/NeopleLogo';
import { ThemeSwitcher } from '~/components/ThemeSwitcher';
import { ExternalRoutes, Routes } from '~/constants/Routes';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-t-slate-6 bg-slate-3'>
      <div className='mx-auto flex max-w-3xl flex-col justify-between gap-16 px-6 py-8 sm:flex-row'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-sm font-semibold text-slate-12'>About</h3>
          <p className='text-xs text-slate-11'>
            Discover the ultimate Dungeon Fighter Online resource hub! Explore comprehensive rankings, in-depth guides,
            and an extensive database search to enhance your gaming experience.
          </p>

          <p className='text-xs text-slate-11'>
            <Link className='text-slate-12' href={Routes.Root}>
              {process.env.NEXT_PUBLIC_SITE_NAME}
            </Link>{' '}
            is a fan-made website and is not affiliated with{' '}
            <Link className='text-slate-12' href={ExternalRoutes.Neople}>
              Neople
            </Link>
            .
          </p>
        </div>

        <div className='flex shrink-0 gap-16'>
          <div className='flex w-1/2 flex-col gap-4 sm:w-auto'>
            <h3 className='text-sm font-semibold text-slate-12'>Links</h3>
            <div className='flex flex-col items-start gap-3 text-xs'>
              <Link className='text-slate-11' href={Routes.Character}>
                Character
              </Link>
              <Link className='text-slate-11' href={Routes.Character}>
                Rankings
              </Link>
              <Link className='text-slate-11' href={Routes.Character}>
                Database
              </Link>
            </div>
          </div>

          <div className='flex w-1/2 flex-col gap-4 sm:w-auto'>
            <h3 className='text-sm font-semibold text-slate-12'>Communities</h3>
            <div className='flex flex-col items-start gap-3 text-xs'>
              <Link className='flex items-center gap-2 text-slate-11' href={ExternalRoutes.Discord} target='_blank'>
                Discord{' '}
                <Badge color='blue' size='sm'>
                  Recommend
                </Badge>
              </Link>
              <Link className='text-slate-11' href={ExternalRoutes.Reddit} target='_blank'>
                Reddit
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-t-slate-6'>
        <div className='mx-auto flex max-w-3xl items-center justify-between px-6 py-4'>
          <NeopleLogo />

          <div className='flex items-center gap-4'>
            <p className='text-xs text-slate-11'>
              &copy; {year} {process.env.NEXT_PUBLIC_SITE_NAME}
            </p>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};
