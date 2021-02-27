import VisuallyHidden from '@reach/visually-hidden';
import Link from 'next/link';
import { rgba, transitions } from 'polished';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type LogoProps = BoxProps & {
  title: string;
};

export const Logo = ({ css, title, ...restOfProps }: LogoProps) => {
  const initials = title?.replace(/[^a-zA-Z- ]/g, '').match(/\b\w/g);

  return (
    <Link href='/' passHref>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '$gray100',
          width: 56,
          height: 56,
          border: '1px solid',
          borderColor: 'transparent',
          borderRadius: 28,
          color: '$gray800',
          fontSize: 18,
          fontWeight: 'bold',
          letterSpacing: -0.3,
          lineHeight: '28px',
          textDecoration: 'none',
          overflow: 'hidden',
          '&:active': {
            borderColor: 'tint2',
          },

          '&:focus': {
            outline: 'none',
          },

          '&:focus-visible': {
            borderColor: 'transparent',
            boxShadow: '0 0 0 2px $colors$blue500',
          },

          /** @todo remove this typecasting */
          ...(css as {}),
        }}
        {...restOfProps}
      >
        <VisuallyHidden>Navigate to home</VisuallyHidden>
        {initials}
      </Box>
    </Link>
  );
};
