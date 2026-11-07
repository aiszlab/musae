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

export const Range: Story = {
  args: {
    min: 20,
    max: 80,
    value: 50,
    "aria-label": "Upload progress",
  },
};

export const Customized: Story = {
  args: {
    value: 65,
    height: 8,
    "aria-label": "Download progress",
  },
};

export const CircularCustomized: Story = {
  args: {
    variant: "circular",
    value: 65,
    height: 64,
    thickness: 6,
    "aria-label": "Download progress",
  },
};
