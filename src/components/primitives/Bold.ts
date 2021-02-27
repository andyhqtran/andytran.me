import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const Bold = styled('strong', {
  fontWeight: '$bold',
});

export type BoldProps = ComponentProps<typeof Bold>;
