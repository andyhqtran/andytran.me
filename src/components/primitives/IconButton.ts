import { StitchesVariants } from '@stitches/react';
import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const IconButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  borderWidth: 1,
  borderStyle: 'sold',
  borderColor: 'transparent',
  color: '$gray500',
  textDecoration: 'none',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray100',
    color: '$gray800',
  },

  '&:active': {
    borderColor: '$gray200',
  },

  '&:focus': {
    outline: 'none',
  },

  '&:focus-visible': {
    borderColor: 'transparent',
    boxShadow: '0 0 0 2px $colors$blue800',
    color: '$gray800',
  },

  variants: {
    size: {
      large: {
        width: 56,
        height: 56,
        borderRadius: 28,
        fontSize: 18,
      },
      medium: {
        width: 48,
        height: 48,
        borderRadius: 24,
        fontSize: 18,
      },
      small: {
        width: 40,
        height: 40,
        borderRadius: 20,
        fontSize: 16,
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
});

export type IconButtonProps = ComponentProps<typeof IconButton>;

export type IconButtonVariants = StitchesVariants<typeof IconButton>;
