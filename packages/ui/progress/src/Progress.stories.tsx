import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Progress } from './Progress';

export default {
  title: 'Progress',
  component: Progress,
} as ComponentMeta<typeof Progress>;

export const Example: ComponentStory<typeof Progress> = (args) => {
  return <Progress {...args} />;
};

Example.args = {
  className: 'w-8 h-8',
};
