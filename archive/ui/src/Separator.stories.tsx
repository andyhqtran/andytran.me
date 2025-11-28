import { type Meta, type StoryObj } from "@storybook/react";

import { Separator } from "./Separator";

const meta: Meta<typeof Separator> = {
  component: Separator,
  title: "UI/Separator",
};

export default meta;

export const Example: StoryObj<typeof Separator> = {
  args: {
    orientation: "horizontal",
  },
};
