import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "../dist";
import { range } from "@aiszlab/relax";

const meta: Meta<typeof Tabs> = {
  title: "tabs",
  component: Tabs,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Scrollable: Story = {
  args: {
    items: range(0, 30).map((key) => {
      return {
        key,
        label: key.toString(),
        children: `panel ${key}`,
      };
    }),
  },
};
