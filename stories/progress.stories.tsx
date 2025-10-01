import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "../dist";

const meta: Meta<typeof Progress> = {
  title: "progress",
  component: Progress,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    value: 50,
  },
};

export const Circular: Story = {
  args: {
    variant: "circular",
    value: 50,
  },
};
