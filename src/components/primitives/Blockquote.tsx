import React from 'react';
import { Box, BoxProps } from 'components/primitives/Box';

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
        borderColor: 'shade.1',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        color: 'shade.5',
        fontStyle: 'italic',
      }}
    />
  );
};
