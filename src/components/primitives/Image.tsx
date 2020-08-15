import React from 'react';
import { MotionProps, motion } from 'framer-motion';
import { Box, BoxProps } from './Box';

export type ImageProps = BoxProps<HTMLImageElement> & MotionProps;

export const Image = (props: ImageProps) => {
  return (
    <Box
      as={motion.img}
      {...props}
      __css={{
        display: 'block',
      }}
      __themeKey='images'
    />
  );
};
