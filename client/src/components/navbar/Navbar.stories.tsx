import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Navbar from "./Navbar";

const meta = {
  title: "Navbar/Navbar",
  component: Navbar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
