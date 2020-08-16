import { MotionProps, motion } from 'framer-motion';
import Link from 'next/link';
import { rgba, transitions } from 'polished';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type LogoProps = BoxProps &
  MotionProps & {
    title: string;
  };

export const Logo = ({ title, ...restOfProps }: LogoProps) => {
  const initials = title?.replace(/[^a-zA-Z- ]/g, '').match(/\b\w/g);

  return (
    <Link href='/' passHref>
      <Box
        as={motion.a}
        whileTap={{ scale: 0.92 }}
        {...restOfProps}
        __css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'shade.0',
          width: 56,
          height: 56,
          border: '1px solid',
          borderColor: 'transparent',
          borderRadius: 28,
          color: 'shade.7',
          fontSize: 18,
          fontWeight: 'bold',
          letterSpacing: -0.3,
          lineHeight: '28px',
          textDecoration: 'none',
          overflow: 'hidden',
          ...transitions(['border-color', 'box-shadow', 'color'], '0.2s ease'),
          '&:active': {
            borderColor: 'shade.1',
          },
          '&:focus': {
            outline: 'none',
          },
          '&.focus-visible': {
            borderColor: 'transparent',
            boxShadow: ({ colors }) =>
              `0 0 0 2px ${rgba(colors.primary, 0.36)}`,
          },
        }}
      >
        {initials}
      </Box>
    </Link>
  );
};
