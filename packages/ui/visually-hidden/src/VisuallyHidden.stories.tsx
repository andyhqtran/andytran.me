import { type Meta, type StoryObj } from "@storybook/react";

import { VisuallyHidden } from "./VisuallyHidden";

const meta: Meta<typeof VisuallyHidden> = {
  component: VisuallyHidden,
  title: "UI/VisuallyHidden",
};

export default meta;

export const Example: StoryObj<typeof VisuallyHidden> = {
  args: {
    children: "Hidden text",
  },
};
