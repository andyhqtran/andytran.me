import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
};

export default meta;

export const Example: StoryObj<typeof Progress> = {
  args: {
    value: 20,
  },
};
