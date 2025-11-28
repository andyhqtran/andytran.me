import { type Meta, type StoryObj } from "@storybook/react";

import { CollapsibleCard } from "./CollapsibleCard";

const meta: Meta<typeof CollapsibleCard> = {
  component: CollapsibleCard,
  title: "UI/CollapsibleCard",
};

export default meta;

export const Example: StoryObj<typeof CollapsibleCard> = {
  args: {},
};
