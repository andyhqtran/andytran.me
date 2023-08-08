import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
};

export default meta;

export const Example: StoryObj<typeof Badge> = {
  args: {
    className: 'w-8 h-8',
  },
};
