import { MotionProps, motion } from 'framer-motion';
import { transitions } from 'polished';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type AnchorProps = BoxProps & MotionProps;

export const Anchor = (props: AnchorProps) => {
  return (
    <Box
      as={motion.a}
      {...props}
      __css={{
        color: 'shade.7',
        fontSize: 18,
        letterSpacing: 0.1,
        lineHeight: '28px',
        ...transitions(['color'], '0.2s ease'),
        '&:hover': {
          color: 'primary',
        },
      }}
    />
  );
};
