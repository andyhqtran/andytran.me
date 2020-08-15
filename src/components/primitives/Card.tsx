import React from 'react';
import { Box, BoxProps } from 'primitives/Box';

export type CardProps = BoxProps<HTMLDivElement>;

export const Card = (props: CardProps) => {
  return (
    <Box
      {...props}
      __themeKey='cards'
      __css={{
        backgroundColor: 'shade.0',
        borderRadius: 20,
      }}
    />
  );
};
