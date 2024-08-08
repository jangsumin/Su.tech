import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Tab from "./Tab";

const meta = {
  title: "Tab/Tab",
  component: Tab,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
