import { transitions } from 'polished';
import React, { forwardRef } from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type CardProps = Omit<BoxProps<HTMLDivElement>, 'ref'>;

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  return (
    <Box
      {...props}
      ref={ref}
      __themeKey='cards'
      __css={{
        backgroundColor: 'tint1',
        borderRadius: 20,
        ...transitions(['background-color'], '0.2s ease'),
      }}
    />
  );
});
