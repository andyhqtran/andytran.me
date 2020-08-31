import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type UnderlineProps = BoxProps;

export const Underline = (props: UnderlineProps) => {
  return <Box as='u' {...props} __css={{ textDecoration: 'underline' }} />;
};
