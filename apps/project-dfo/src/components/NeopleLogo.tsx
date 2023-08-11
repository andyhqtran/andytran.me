'use client';

import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { type ComponentPropsWithoutRef } from 'react';

import { ExternalRoutes } from '~/constants/Routes';

export type NeopleLogoProps = Omit<LinkProps, 'href' | keyof ComponentPropsWithoutRef<'a'>> &
  Omit<ComponentPropsWithoutRef<'a'>, 'href'>;

export const NeopleLogo = ({ className, target = '_blank', ...restOfProps }: NeopleLogoProps) => {
  return (
    <Link className={className} href={ExternalRoutes.NeopleAPI} target={target} {...restOfProps}>
      <Image alt='Neople OpenAPI logo' height={18} src='/assets/neople-open-api-logo-gray.png' width={95.5} />
    </Link>
  );
};
