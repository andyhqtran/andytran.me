import { ComponentType } from 'react';

import { styled } from '~/stitches.config';

export const Blockquote = styled('blockquote', {
  margin: 0,
  borderLeft: '2px solid',
  borderColor: '$gray200',
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 16,
  color: '$gray600',
  fontStyle: 'italic',
});

export type BlockquoteProps = ComponentType<typeof Blockquote>;
