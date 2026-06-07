import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "../dist";
import React from "react";

const meta: Meta<typeof Tag> = {
  title: "tag",
  component: Tag,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["filled", "outlined"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
    closable: {
      type: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: "filled",
    children: "Tag",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Tag",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large",
  },
};

export const Closable: Story = {
  args: {
    closable: true,
    children: "Closable",
  },
};

export const WithLeading: Story = {
  args: {
    children: "With Leading",
    leading: <span>●</span>,
  },
};

/**
 * 多个 Tag 组合展示，适用于标签筛选、标签云等场景
 */
export const Group: Story = {
  render: () => {
    const tags = [
      { label: "全部", variant: "filled" as const },
      { label: "设计", variant: "outlined" as const },
      { label: "前端", variant: "outlined" as const },
      { label: "后端", variant: "outlined" as const },
      { label: "产品", variant: "outlined" as const },
      { label: "运营", variant: "outlined" as const },
    ];

    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
        {tags.map((tag) => (
          <Tag key={tag.label} variant={tag.variant}>
            {tag.label}
          </Tag>
        ))}
      </div>
    );
  },
};

/**
 * 不同尺寸的 Tag 横向排列
 */
export const Sizes: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
        <Tag size="small">Small</Tag>
        <Tag size="medium">Medium</Tag>
        <Tag size="large">Large</Tag>
      </div>
    );
  },
};

/**
 * filled 与 outlined 变体混合展示
 */
export const Mixed: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
        <Tag variant="filled">Filled</Tag>
        <Tag variant="outlined">Outlined</Tag>
        <Tag variant="filled" size="small">
          Small
        </Tag>
        <Tag variant="outlined" size="small">
          Small
        </Tag>
        <Tag variant="filled" size="large">
          Large
        </Tag>
        <Tag variant="outlined" size="large">
          Large
        </Tag>
      </div>
    );
  },
};
