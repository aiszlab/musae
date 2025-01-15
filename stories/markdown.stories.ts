import type { Meta, StoryObj } from "@storybook/react";
import { Markdown } from "../dist";

const meta: Meta<typeof Markdown> = {
  title: "markdown",
  component: Markdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { value: "# Markdown" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {},
};
