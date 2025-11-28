import { type Meta, type StoryObj } from "@storybook/react";

import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "UI/IconButton",
};

export default meta;

export const Example: StoryObj<typeof IconButton> = {
  args: {
    appearance: "default",
    children: "IconButton",
    size: "md",
  },
};
