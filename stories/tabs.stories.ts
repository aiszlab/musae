import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../dist";
import { range } from "@aiszlab/relax";

const meta: Meta<typeof Tabs> = {
  title: "tabs",
  component: Tabs,
  parameters: {},
  tags: ["autodocs"],
  args: {
    items: range(0, 10).map((key) => {
      return {
        key,
        label: key.toString(),
        children: `panel ${key}`,
      };
    }),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    items: range(0, 10).map((key) => {
      return {
        key,
        label: key.toString(),
        children: `panel ${key}`,
      };
    }),
  },
};
