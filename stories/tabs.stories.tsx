import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "../dist";
import { range } from "@aiszlab/relax";
import React, { type Key, useState } from "react";

const meta: Meta<typeof Tabs> = {
  title: "tabs",
  component: Tabs,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
  },
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
    size: "medium",
  },
};

/**
 * `Tabs`可以仅作为导航栏，不包含面板内容
 */
export const Simple: Story = {
  args: {
    items: [
      {
        key: 0,
        label: "第一项",
      },
      {
        key: 1,
        label: "第二项",
      },
    ],
    size: "medium",
  },
};

/**
 * 让`Tabs`按数据受控
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
            children: "panel 0",
          },
          {
            key: 1,
            label: "第二项",
            children: "panel 1",
          },
        ]}
      />
    );
  },
};

/**
 * `Tabs`每次切换默认销毁非活动面板
 */
export const Destroyable: Story = {
  args: {
    destroyable: true,
    items: [
      {
        key: 0,
        label: "第一项",
        children: "panel 0",
      },
      {
        key: 1,
        label: "第二项",
        children: "panel 1",
      },
    ],
    size: "medium",
  },
};

/**
 * `Tabs`初次渲染默认记载所有面板内容
 */
export const ForceRender: Story = {
  args: {
    forceRender: true,
    items: [
      {
        key: 0,
        label: "第一项",
        children: "panel 0",
      },
      {
        key: 1,
        label: "第二项",
        children: "panel 1",
      },
    ],
    size: "medium",
  },
};

/**
 * 不同尺寸的`Tabs`
 */
export const Sizes: Story = {
  render: () => {
    const items = [
      { key: 0, label: "第一项", children: "panel 0" },
      { key: 1, label: "第二项", children: "panel 1" },
      { key: 2, label: "第三项", children: "panel 2" },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div>
          <h3>small</h3>
          <Tabs size="small" items={items} />
        </div>
        <div>
          <h3>medium</h3>
          <Tabs size="medium" items={items} />
        </div>
        <div>
          <h3>large</h3>
          <Tabs size="large" items={items} />
        </div>
      </div>
    );
  },
};
