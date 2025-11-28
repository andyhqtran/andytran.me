import { type Meta, type StoryObj } from "@storybook/react";

import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: "UI/Progress",
};

export default meta;

export const Example: StoryObj<typeof Progress> = {
  args: {
    value: 20,
  },
};
