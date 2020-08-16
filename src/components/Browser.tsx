import { rgba } from 'polished';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

const BrowserButton = (props: BoxProps) => {
  return (
    <Box
      {...props}
      __css={{
        backgroundColor: 'shade.0',
        width: 8,
        height: 8,
        borderRadius: 4,
      }}
    />
  );
};

export type BrowserProps = BoxProps;

export const Browser = ({ children, ...restOfProps }) => {
  return (
    <Box
      {...restOfProps}
      __css={{
        backgroundColor: 'shade.inverse',
        borderRadius: 12,
        boxShadow: ({ colors }) => `0 12px 24px ${rgba(colors.black, 0.04)}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 48,
          pl: 20,
          pr: 20,
          borderBottom: '1px solid',
          borderColor: 'shade.0',
        }}
      >
        <BrowserButton sx={{ mr: 8 }} />
        <BrowserButton sx={{ mr: 8 }} />
        <BrowserButton />
      </Box>
      {children}
    </Box>
  );
};
