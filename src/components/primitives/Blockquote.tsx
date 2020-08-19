import { transitions } from 'polished';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type BlockquoteProps = BoxProps<HTMLQuoteElement>;

export const Blockquote = (props: BlockquoteProps) => {
  return (
    <Box
      {...props}
      as='blockquote'
      __themeKey='blockquotes'
      __css={{
        margin: 0,
        borderLeft: '2px solid',
        borderColor: 'tint2',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        color: 'tint6',
        fontStyle: 'italic',
        ...transitions(['border-color', 'color'], '0.2s ease'),
      }}
    />
  );
};
