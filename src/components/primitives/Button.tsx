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
      whileTap={{ scale: 0.96 }}
      variant={variant}
      {...restOfProps}
      __css={{
        backgroundColor: 'transparent',
        height: 56,
        paddingRight: 8,
        paddingLeft: 8,
        border: '1px solid',
        borderColor: 'shade.1',
        borderRadius: 28,
        boxShadow: '0 0 0 4px transparent',
        color: 'body',
        fontSize: 'body',
        letterSpacing: -0.2,
        cursor: 'pointer',
        ...transitions(['background-color', 'box-shadow'], '0.2s ease'),
        '&:hover': {
          backgroundColor: 'shade.0',
        },
        '&.focus-visible': {
          borderColor: 'transparent',
          boxShadow: ({ colors }) => `0 0 0 4px ${rgba(colors.primary, 0.36)}`,
          '&:focus': {
            outline: 'none',
          },
        },
      }}
      __themeKey='buttons'
    />
  );
};
