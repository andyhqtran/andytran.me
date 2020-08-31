import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type ItalicProps = BoxProps;

export const Italic = (props: ItalicProps) => {
  return <Box as='em' {...props} __css={{ fontStyle: 'italic' }} />;
};
