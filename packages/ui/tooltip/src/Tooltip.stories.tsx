import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
};

export default meta;

export const Example: StoryObj<typeof Tooltip> = {
  args: {
    label: 'Tooltip',
  },
};
