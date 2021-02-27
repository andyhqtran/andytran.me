import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const Box = styled('div', {
  margin: 0,
  boxSizing: 'border-box',
});

export type BoxProps = ComponentProps<typeof Box>;
