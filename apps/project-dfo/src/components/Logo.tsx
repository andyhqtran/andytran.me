import Link, { LinkProps } from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { Routes } from '~/constants/Routes';

export type LogoProps = Omit<ComponentPropsWithoutRef<'a'>, keyof LinkProps> & Partial<LinkProps>;

export const Logo = ({ className, href = Routes.Root, ...restOfProps }: LogoProps) => {
  return (
    <Link
      aria-label='Go to home'
      className={twMerge(
        'flex h-10 w-10 items-center justify-center rounded-full bg-slate-2 text-xs font-semibold text-slate-12 transition-colors hover:bg-slate-3',
        className,
      )}
      href={href}
      {...restOfProps}
    >
      DF
    </Link>
  );
};
