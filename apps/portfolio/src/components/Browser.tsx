import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

const BrowserButton = (props: BoxProps) => {
  return (
    <Box
      {...props}
      css={{
        backgroundColor: '$gray200',
        width: 8,
        height: 8,
        borderRadius: 4,
      }}
    />
  );
};

export type BrowserProps = BoxProps;

export const Browser = ({ children, css, ...restOfProps }: BrowserProps) => {
  return (
    <Box
      {...restOfProps}
      css={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '$background',
        borderRadius: 12,
        boxShadow: `0 12px 24px $colors$gray100`,
        ...(css as {}),
      }}
    >
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          height: 48,
          pl: 20,
          pr: 20,
          borderBottom: '1px solid',
          borderColor: '$gray100',
        }}
      >
        <BrowserButton css={{ mr: 8 }} />
        <BrowserButton css={{ mr: 8 }} />
        <BrowserButton />
      </Box>
      <Box css={{ position: 'relative', flexGrow: 1, overflow: 'hidden' }}>
        {children}
      </Box>
    </Box>
  );
};
