import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Spinner } from './Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Example: ComponentStory<typeof Spinner> = (args) => {
  return <Spinner {...args} />;
};

Example.args = {
  className: 'w-8 h-8',
};
