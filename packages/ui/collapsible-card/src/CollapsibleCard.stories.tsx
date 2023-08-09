import type { Meta, StoryObj } from '@storybook/react';

import { CollapsibleCard } from './CollapsibleCard';

const meta: Meta<typeof CollapsibleCard> = {
  title: 'UI/CollapsibleCard',
  component: CollapsibleCard,
};

export default meta;

export const Example: StoryObj<typeof CollapsibleCard> = {
  args: {},
};
