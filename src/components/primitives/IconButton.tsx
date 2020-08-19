import { MotionProps, motion } from 'framer-motion';
import { rgba, transitions } from 'polished';
import React, { forwardRef } from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type IconButtonSize = 'small' | 'regular';

export type IconButtonProps = Omit<BoxProps<HTMLButtonElement>, 'size'> &
  MotionProps & { size?: IconButtonSize };

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size = 'regular', ...restOfProps }, ref) => {
    const isSmallButton = size === 'small';

    return (
      <Box
        as={motion.button}
        ref={ref}
        whileTap={{ scale: 0.94 }}
        {...restOfProps}
        __css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          width: isSmallButton ? 40 : 56,
          height: isSmallButton ? 40 : 56,
          border: '1px solid',
          borderColor: 'transparent',
          borderRadius: '100%',
          color: 'tint5',
          textDecoration: 'none',
          cursor: 'pointer',
          ...transitions(
            ['background-color', 'border-color', 'box-shadow', 'color'],
            '0.2s ease',
          ),
          '&:hover': {
            backgroundColor: 'tint1',
            color: 'tint8',
          },
          '&:active': {
            borderColor: 'tint2',
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
        __themeKey='iconButtons'
      />
    );
  },
);
