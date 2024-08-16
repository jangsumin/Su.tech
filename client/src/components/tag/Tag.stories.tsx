import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

const meta = {
  title: "Tag/Tag",
  component: Tag,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tagList: [
      { tagId: 1, tagName: "Frontend" },
      { tagId: 2, tagName: "Backend" },
      { tagId: 3, tagName: "생산성" },
      { tagId: 4, tagName: "React" },
      { tagId: 5, tagName: "storybook" },
    ],
  },
};
