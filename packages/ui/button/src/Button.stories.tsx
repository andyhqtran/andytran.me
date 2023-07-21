import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
};

export default meta;

export const Example: StoryObj<typeof Button> = {
  args: {
    appearance: 'primary',
    children: 'Button',
    size: 'md',
  },
};
