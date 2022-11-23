import { Separator } from '@several/primitives';
import Link from 'next/link';
import type { ReactNode } from 'react';

export type ProjectNavigationProps = {
  title?: ReactNode | string;
  navigation?: {
    href: string;
    id?: string;
    label: string;
  }[];
};

export const ProjectNavigation = ({ navigation, title }: ProjectNavigationProps) => {
  return (
    <nav className='sticky top-0 z-10 flex items-center border-b border-slate-4 bg-slate-1'>
      <div className='container relative mx-auto flex h-14 items-center'>
        {title ? (
          <>
            <h1 className='text-sm font-semibold text-slate-12'>{title}</h1>
            <Separator className='mx-4' orientation='vertical' />
          </>
        ) : null}

        {navigation ? (
          <div className='flex items-center gap-4'>
            {navigation.map((navigationItem, index) => {
              return (
                <Link
                  className='text-sm text-slate-11 hover:text-slate-12 hover:underline'
                  href={navigationItem.href}
                  key={navigationItem?.id ?? index}
                >
                  {navigationItem.label}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </nav>
  );
};
