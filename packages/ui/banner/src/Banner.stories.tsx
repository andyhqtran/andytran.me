import type { Meta, StoryObj } from '@storybook/react';

import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'UI/Banner',
  component: Banner,
};

export default meta;

export const Example: StoryObj<typeof Banner> = {
  args: {
    appearance: 'default',
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    size: 'md',
  },
};
