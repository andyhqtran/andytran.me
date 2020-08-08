import React from 'react';

import { Card, CardProps } from './Card';

export default {
  title: 'Primitivies/Card',
  component: Card,
};

export const Example = (args: CardProps) => <Card {...args} />;

Example.args = {
  children: 'Label',
};
