import React from 'react';

import { IconButton, IconButtonProps } from './IconButton';

export default {
  title: 'Primitivies/IconButton',
  component: IconButton,
};

export const Example = (args: IconButtonProps) => <IconButton {...args} />;

Example.args = {
  children: 'Label',
};
