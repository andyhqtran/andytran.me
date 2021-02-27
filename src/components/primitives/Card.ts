import { ComponentProps, ReactNode } from 'react';

import { styled } from '~/stitches.config';

export const Card = styled('div', {
  backgroundColor: '$gray100',
  borderRadius: 20,
});

export type CardProps = ComponentProps<typeof Card> & {
  children: ReactNode;
};
