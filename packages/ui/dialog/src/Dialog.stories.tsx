import type { Meta, StoryObj } from '@storybook/react';

import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
};

export default meta;

export const Example: StoryObj<typeof Dialog> = {
  args: {},
};
