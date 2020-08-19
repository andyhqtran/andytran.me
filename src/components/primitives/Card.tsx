import { transitions } from 'polished';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type CardProps = BoxProps<HTMLDivElement>;

export const Card = (props: CardProps) => {
  return (
    <Box
      {...props}
      __themeKey='cards'
      __css={{
        backgroundColor: 'tint1',
        borderRadius: 20,
        ...transitions(['background-color'], '0.2s ease'),
      }}
    />
  );
};
