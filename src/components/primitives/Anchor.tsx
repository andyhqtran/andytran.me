import { MotionProps, motion } from 'framer-motion';
import { rgba, transitions } from 'polished';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type AnchorProps = BoxProps & MotionProps;

export const Anchor = (props: AnchorProps) => {
  return (
    <Box
      as={motion.a}
      {...props}
      __css={{
        borderRadius: 4,
        color: 'shade.7',
        fontSize: 18,
        letterSpacing: 0.1,
        lineHeight: '28px',
        ...transitions(['color', 'box-shadow'], '0.2s ease'),
        '&:hover': {
          color: 'primary',
        },
        '&:focus': {
          outline: 'none',
        },
        '&.focus-visible': {
          color: 'primary',
          boxShadow: ({ colors }) => `0 0 0 2px ${rgba(colors.primary, 0.36)}`,
        },
      }}
    />
  );
};
