import React from 'react';

import { Blockquote, BlockquoteProps } from './Blockquote';

export default {
  title: 'Primitivies/Blockquote',
  component: Blockquote,
};

export const Example = (args: Omit<BlockquoteProps, 'ref'>) => (
  <Blockquote {...args} />
);

Example.args = {
  children: 'This is an example of a blockquote',
};
