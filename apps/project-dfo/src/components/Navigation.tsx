'use client';
import Link from 'next/link';
import { useMemo } from 'react';

import { trackedClickedNavigationItem } from '~/analytics/trackClickedNavigationItem';
import { Routes } from '~/constants/Routes';
import { useFlags } from '~/flags/client';

export const Navigation = () => {
  const { flags } = useFlags();

  const navigationItems = useMemo(() => {
    const items = [];
    if (flags?.ranking) {
      items.push({
        href: Routes.Ranking,
        id: 'ranking',
        label: 'Ranking',
      });
    }

    if (flags?.statistics) {
      items.push({
        href: Routes.Statistics,
        id: 'statistics',
        label: 'Statistics',
      });
    }

    if (flags?.database) {
      items.push({
        href: Routes.Database,
        id: 'database',
        label: 'Database',
      });
    }

    return items;
  }, [flags]);

  return (
    <nav className='flex items-center gap-8'>
      {navigationItems.map((navigationItem) => {
        return (
          <Link
            className='text-sm text-slate-11 hover:text-slate-12 hover:underline'
            href={navigationItem.href}
            key={navigationItem.id}
            onClick={() => trackedClickedNavigationItem(navigationItem)}
          >
            {navigationItem.label}
          </Link>
        );
      })}
    </nav>
  );
};
