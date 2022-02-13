import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const Underline = styled('u', {
  textDecoration: 'underline',
});

export type UnderlineProps = ComponentProps<typeof Underline>;
