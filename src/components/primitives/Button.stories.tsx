import React from 'react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Primitivies/Button',
  component: Button,
};

export const Example = (args: Omit<ButtonProps, 'ref'>) => <Button {...args} />;

Example.args = {
  children: 'Label',
};
