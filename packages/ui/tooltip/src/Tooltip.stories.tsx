import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip, TooltipProvider } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
};

export default meta;

export const Example: StoryObj<typeof Tooltip> = {
  render: (args) => (
    <TooltipProvider>
      <Tooltip {...args} />
    </TooltipProvider>
  ),
  args: {
    label: 'Tooltip',
  },
};
