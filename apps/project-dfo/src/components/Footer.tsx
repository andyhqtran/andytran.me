'use client';

import Link from 'next/link';

import { NeopleLogo } from '~/components/NeopleLogo';
import { ThemeSwitcher } from '~/components/ThemeSwitcher';
import { Routes } from '~/constants/Routes';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='relative mx-auto max-w-3xl px-6'>
      <div className='flex w-full items-center justify-between gap-4 border-t border-t-slate-4 py-4'>
        <div className='text-xs text-slate-11'>
          &copy; {year}{' '}
          <Link className='hover:underline' href={Routes.Root}>
            dfo.gg
          </Link>
        </div>

        <NeopleLogo className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />

        <ThemeSwitcher />
      </div>
    </footer>
  );
};
