import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const Image = styled('img', {
  display: 'block',
  maxWidth: '100%',
});

export type ImageProps = ComponentProps<typeof Image>;
