import React from 'react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Primitivies/Button',
  component: Button,
};

export const Example = (args: ButtonProps) => <Button {...args} />;

Example.args = {
  children: 'Label',
};
