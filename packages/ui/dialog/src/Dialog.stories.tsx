import { type Meta, type StoryObj } from "@storybook/react";

import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: "UI/Dialog",
};

export default meta;

export const Example: StoryObj<typeof Dialog> = {
  args: {},
};
