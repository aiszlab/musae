import type { Meta, StoryObj } from "@storybook/react-vite";
import { Ellipsis } from "../dist";

const meta: Meta<typeof Ellipsis> = {
  title: "ellipsis",
  component: Ellipsis,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    style: {
      width: 300,
    },
  },
};

export const LineClamp: Story = {
  args: {
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    lineClamp: 3,
    style: {
      width: 300,
    },
  },
};

export const TextOverflow: Story = {
  args: {
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    textOverflow: "!!!",
    style: {
      width: 300,
    },
  },
};

export const Unellipsis: Story = {
  args: {
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    lineClamp: Infinity,
    style: {
      width: 300,
    },
  },
};
