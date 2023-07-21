import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
};

export default meta;

export const Example: StoryObj<typeof Spinner> = {
  args: {
    className: 'w-8 h-8',
  },
};
