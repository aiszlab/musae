import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "../dist";
import { range } from "@aiszlab/relax";
import React, { type Key, useState } from "react";

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

/**
 * 受控
 */
export const Controlled: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState<Key>(0);

    return (
      <Tabs
        activeKey={activeKey}
        onChange={setActiveKey}
        items={[
          {
            key: 0,
            label: "第一项",
          },
          {
            key: 1,
            label: "第二项",
          },
        ]}
      />
    );
  },
};
