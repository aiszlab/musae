import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "../dist";

const meta: Meta<typeof Tooltip> = {
  title: "tooltip",
  component: Tooltip,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: "tooltip",
    title: "tooltip",
  },
};
