import type { Meta, StoryObj } from "@storybook/react";
import { SplitPanel } from "../dist";

const meta: Meta<typeof SplitPanel> = {
  title: "split-panel",
  component: SplitPanel,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    style: { control: { type: "object" } },
  },
  args: {
    style: { height: 300 },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    items: [{ children: "1" }, { children: "2" }, { children: "3" }],
    style: { height: 300 },
  },
};

export const Sized: Story = {
  args: {
    items: [
      { children: "1", defaultSize: 20 },
      { children: "2", defaultSize: 15 },
      { children: "3" },
    ],
    style: { height: 300 },
  },
};

export const Vertical: Story = {
  args: {
    items: [{ children: "1" }, { children: "2" }, { children: "3" }],
    style: { height: 300 },
    orientation: "vertical",
  },
};

export const StyledItems: Story = {
  args: {
    items: [
      { children: "1", style: { maxWidth: "50%" } },
      { children: "2", style: { minWidth: 100 } },
      { children: "3" },
    ],
    style: { height: 300 },
  },
};
