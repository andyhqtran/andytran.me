import Link from 'next/link';

import { Routes } from '~/constants/Routes';

export const Logo = () => {
  return (
    <Link
      aria-label='Go to home'
      className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-2 text-xs font-semibold text-slate-12 transition-colors hover:bg-slate-3'
      href={Routes.Root}
    >
      DF
    </Link>
  );
};
