import { type Meta, type StoryObj } from "@storybook/react";

import { Banner } from "./Banner";

const meta: Meta<typeof Banner> = {
  component: Banner,
  title: "UI/Banner",
};

export default meta;

export const Example: StoryObj<typeof Banner> = {
  args: {
    appearance: "default",
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    size: "md",
  },
};
