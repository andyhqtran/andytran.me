'use client';
import Link from 'next/link';
import { useMemo } from 'react';

import { trackClickedNavigationItem } from '~/analytics/trackClickedNavigationItem';
import { Routes } from '~/constants/Routes';

export const Navigation = () => {
  const navigationItems = useMemo(() => {
    const items = [];

    items.push({
      href: Routes.Ranking,
      id: 'ranking',
      label: 'Ranking',
    });

    // items.push({
    //   href: Routes.Auction,
    //   id: 'auction',
    //   label: 'Auction',
    // });

    // items.push({
    //   href: Routes.Statistics,
    //   id: 'statistics',
    //   label: 'Statistics',
    // });

    items.push({
      href: Routes.Database,
      id: 'database',
      label: 'Database',
    });

    return items;
  }, []);

  return (
    <nav className='flex items-center gap-8'>
      {navigationItems.map((navigationItem) => {
        return (
          <Link
            className='text-sm text-slate-11 hover:text-slate-12 hover:underline'
            href={navigationItem.href}
            key={navigationItem.id}
            onClick={() => trackClickedNavigationItem(navigationItem)}
          >
            {navigationItem.label}
          </Link>
        );
      })}
    </nav>
  );
};
