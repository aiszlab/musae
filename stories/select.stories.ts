import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "../dist";

const meta: Meta<typeof Select> = {
  title: "select",
  component: Select,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

export const TagsMode: Story = {
  args: {
    mode: "tags",
  },
};
