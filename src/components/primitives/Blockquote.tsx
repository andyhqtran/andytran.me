import React, { HTMLProps } from 'react';
import { Box, BoxProps } from 'theme-ui';

export type BlockquoteProps = HTMLProps<HTMLQuoteElement> & BoxProps;

export const Blockquote = (props: BlockquoteProps) => {
  return (
    <Box
      as='blockquote'
      {...props}
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
