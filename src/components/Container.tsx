import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type ContainerProps = BoxProps;

export const Container = (props: ContainerProps) => {
  return (
    <Box
      {...props}
      __css={{
        width: '100%',
        maxWidth: 1296,
        mx: 'auto',
        px: 56,
      }}
    />
  );
};
