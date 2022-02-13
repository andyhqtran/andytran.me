import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const Italic = styled('i', {
  fontStyle: 'italic',
});

export type ItalicProps = ComponentProps<typeof Italic>;
