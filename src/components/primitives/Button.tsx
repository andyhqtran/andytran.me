import { MotionProps, motion } from 'framer-motion';
import { rgba, transitions } from 'polished';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = BoxProps<HTMLButtonElement> &
  MotionProps & {
    variant?: ButtonVariant;
  };

export const Button = ({
  variant = 'primary',
  ...restOfProps
}: ButtonProps) => {
  return (
    <Box
      as={motion.button}
      whileTap={{ scale: 0.92 }}
      variant={variant}
      {...restOfProps}
      __css={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        height: 56,
        paddingRight: 24,
        paddingLeft: 24,
        border: '1px solid',
        borderColor: 'shade.1',
        borderRadius: 28,
        boxShadow: '0 0 0 4px transparent',
        color: 'shade.7',
        fontSize: 18,
        letterSpacing: -0.2,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        ...transitions(['background-color', 'box-shadow'], '0.2s ease'),
        '&:hover': {
          backgroundColor: 'shade.0',
        },
        '&:focus': {
          outline: 'none',
        },
        '&.focus-visible': {
          borderColor: 'transparent',
          boxShadow: ({ colors }) => `0 0 0 4px ${rgba(colors.primary, 0.36)}`,
        },
      }}
      __themeKey='buttons'
    />
  );
};
