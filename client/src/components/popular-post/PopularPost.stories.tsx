import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PopularPost from "./PopularPost";

const meta = {
  title: "PopularPost/PopularPost",
  component: PopularPost,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof PopularPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
