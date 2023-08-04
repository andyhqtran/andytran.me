import Link from 'next/link';

import { Routes } from '~/constants/Routes';

export const Logo = () => {
  return (
    <Link className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-2' href={Routes.Root}></Link>
  );
};
