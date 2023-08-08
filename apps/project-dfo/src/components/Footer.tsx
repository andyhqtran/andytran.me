'use client';

import Link from 'next/link';

import { ThemeSwitcher } from '~/components/ThemeSwitcher';
import { Routes } from '~/constants/Routes';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='mx-auto max-w-3xl px-6'>
      <div className='flex w-full items-center justify-between gap-4 border-t border-t-slate-4 py-4'>
        <div className='text-xs text-slate-11'>
          &copy; {year}{' '}
          <Link className='hover:underline' href={Routes.Root}>
            dfo.gg
          </Link>
        </div>

        <ThemeSwitcher />
      </div>
    </footer>
  );
};
