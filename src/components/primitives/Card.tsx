import React from 'react';
import { Box, BoxProps } from 'components/primitives/Box';

export type BlockquoteProps = BoxProps<HTMLDivElement>;

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
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 4,
        color: 'shade.5',
        fontStyle: 'italic',
      }}
    />
  );
};
