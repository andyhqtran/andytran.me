import { MotionProps, motion } from 'framer-motion';
import { rgba, transitions } from 'polished';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type IconButtonProps = BoxProps<HTMLButtonElement> & MotionProps;

export const IconButton = (props: IconButtonProps) => {
  return (
    <Box
      as={motion.button}
      whileTap={{ scale: 0.92 }}
      {...props}
      __css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        width: 56,
        height: 56,
        border: '1px solid',
        borderColor: 'transparent',
        borderRadius: '100%',
        color: 'shade.4',
        textDecoration: 'none',
        cursor: 'pointer',
        ...transitions(
          ['background-color', 'border-color', 'box-shadow', 'color'],
          '0.2s ease',
        ),
        '&:hover': {
          backgroundColor: 'shade.0',
          color: 'shade.7',
        },
        '&:active': {
          borderColor: 'shade.1',
        },
        '&:focus': {
          outline: 'none',
        },
        '&.focus-visible': {
          borderColor: 'transparent',
          boxShadow: ({ colors }) => `0 0 0 2px ${rgba(colors.primary, 0.36)}`,
        },
      }}
      __themeKey='iconButtons'
    />
  );
};
