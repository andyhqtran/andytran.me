import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'UI/IconButton',
  component: IconButton,
};

export default meta;

export const Example: StoryObj<typeof IconButton> = {
  args: {
    appearance: 'primary',
    children: 'IconButton',
    size: 'md',
  },
};
