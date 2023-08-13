import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
};

export default meta;

export const Example: StoryObj<typeof Separator> = {
  args: {
    orientation: 'horizontal',
  },
};
