import type { Meta, StoryObj } from '@storybook/react';

import { VisuallyHidden } from './VisuallyHidden';

const meta: Meta<typeof VisuallyHidden> = {
  title: 'UI/VisuallyHidden',
  component: VisuallyHidden,
};

export default meta;

export const Example: StoryObj<typeof VisuallyHidden> = {
  args: {
    children: 'Hidden text',
  },
};
