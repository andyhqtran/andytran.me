import { type Meta, type StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button",
};

export default meta;

export const Example: StoryObj<typeof Button> = {
  args: {
    appearance: "primary",
    children: "Button",
    size: "md",
  },
};
