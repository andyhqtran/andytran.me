import { type Meta, type StoryObj } from "@storybook/react";

import { Tooltip, TooltipProvider } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "UI/Tooltip",
};

export default meta;

export const Example: StoryObj<typeof Tooltip> = {
  args: {
    label: "Tooltip",
  },
  render: (args) => (
    <TooltipProvider>
      <Tooltip {...args} />
    </TooltipProvider>
  ),
};
