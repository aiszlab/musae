import type { Meta, StoryObj } from "@storybook/react";
import { SplitPanel } from "../dist";

const meta: Meta<typeof SplitPanel> = {
  title: "split-panel",
  component: SplitPanel,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    items: [],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    items: ["1", "2"],
  },
};
