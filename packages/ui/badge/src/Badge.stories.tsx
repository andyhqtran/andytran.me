import { type Meta, type StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "UI/Badge",
};

export default meta;

export const Example: StoryObj<typeof Badge> = {
  args: {
    className: "w-8 h-8",
  },
};
