import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const Anchor = styled('a', {
  borderRadius: 4,
  color: '$gray800',
  fontFamily: '$inter',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  letterSpacing: 'inherit',
  textDecoration: 'underline',
  cursor: 'pointer',

  '&:hover': {
    color: '$blue800',
  },

  '&:focus': {
    outline: 'none',
  },

  '&:focus-visible': {
    color: '$blue800',
    boxShadow: '0 0 0 2px $colors$blue800',
  },
});

export type AnchorProps = ComponentProps<typeof Anchor>;
