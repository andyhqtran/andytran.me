import { motion } from 'framer-motion';
import { transitions } from 'polished';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type HeadingVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = BoxProps<HTMLHeadElement> & {
  variant: HeadingVariants;
};

export const Heading = ({ variant = 'h3', ...restOfProps }: HeadingProps) => {
  return (
    <Box
      __themeKey='headings'
      as={motion[variant]}
      variant={variant}
      {...restOfProps}
      __css={{
        margin: 0,
        color: 'tint8',
        ...transitions(['color'], '0.2s ease'),
      }}
    />
  );
};
