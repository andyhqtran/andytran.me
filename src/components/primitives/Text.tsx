import { motion, MotionProps } from 'framer-motion';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type TextProps = BoxProps & MotionProps;

export const Text = (props: TextProps) => {
  return (
    <Box
      __themeKey='text'
      as={motion.p}
      {...props}
      __css={{
        margin: 0,
        color: 'shade.6',
        fontSize: 18,
        fontWeight: 'regular',
      }}
    />
  );
};