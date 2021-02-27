import { StitchesVariants } from '@stitches/react';
import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$gray200',
  color: '$gray800',
  fontFamily: '$inter',
  fontWeight: '$regular',
  letterSpacing: -0.2,
  textDecoration: 'none',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray100',
  },

  '&:focus': {
    outline: 'none',
  },

  '&:focus-visible': {
    boxShadow: '0 0 0 2px $colors$blue800',
  },

  variants: {
    size: {
      large: {
        height: 56,
        borderRadius: 28,
        paddingLeft: 24,
        paddingRight: 24,
        fontSize: 18,
      },
      medium: {
        height: 48,
        borderRadius: 24,
        paddingLeft: 24,
        paddingRight: 24,
        fontSize: 18,
      },
      small: {
        height: 40,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
});

export type ButtonProps = ComponentProps<typeof Button>;

export type ButtonVariant = StitchesVariants<typeof Button>;
