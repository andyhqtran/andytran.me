import Link from 'next/link';

import { Routes } from '~/constants/Routes';

const NAVIGATION_ITEM = [
  {
    href: Routes.Ranking,
    id: 'ranking',
    label: 'Ranking',
  },
  {
    href: Routes.Statistics,
    id: 'statistics',
    label: 'Statistics',
  },
  {
    href: Routes.Database,
    id: 'database',
    label: 'Database',
  },
];

export const Navigation = () => {
  return (
    <nav className='flex items-center gap-8'>
      {NAVIGATION_ITEM.map((navigationItem) => {
        return (
          <Link
            className='text-sm font-medium text-slate-11 hover:text-slate-12 hover:underline'
            href={navigationItem.href}
            key={navigationItem.id}
          >
            {navigationItem.label}
          </Link>
        );
      })}
    </nav>
  );
};
