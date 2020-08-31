import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type BoldProps = BoxProps;

export const Bold = (props: BoldProps) => {
  return <Box as='strong' {...props} __css={{ fontWeight: 'bold' }} />;
};
