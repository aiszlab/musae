import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb } from "../dist";
import React from "react";

const meta: Meta<typeof Breadcrumb> = {
  title: "breadcrumb",
  component: Breadcrumb,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    separator: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 基本用法，默认 `/` 分隔符
 */
export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Detail" },
    ],
  },
};

/**
 * 自定义分隔符，使用 `>` 作为分隔符
 */
export const CustomSeparator: Story = {
  args: {
    separator: ">",
    items: [
      { label: "首页", href: "/" },
      { label: "分类", href: "/categories" },
      { label: "详情" },
    ],
  },
};

/**
 * 使用图标作为分隔符
 */
export const IconSeparator: Story = {
  args: {
    separator: "/",
    items: [
      { label: "Home", href: "/" },
      { label: "Library", href: "/library" },
      { label: "Data" },
    ],
  },
};

/**
 * 全部为链接项，无当前页
 */
export const AllLinks: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Category", href: "/products/category" },
    ],
  },
};

/**
 * 仅单项
 */
export const SingleItem: Story = {
  args: {
    items: [{ label: "Home" }],
  },
};

/**
 * 多项面包屑，展示长路径
 */
export const LongPath: Story = {
  render: () => {
    const items = [
      { label: "Home", href: "/" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Projects", href: "/projects" },
      { label: "Project Alpha", href: "/projects/alpha" },
      { label: "Settings", href: "/projects/alpha/settings" },
      { label: "Members" },
    ];

    return <Breadcrumb items={items} />;
  },
};

/**
 * 混合链接与非链接项，最后一层为当前页（无链接）
 */
export const Mixed: Story = {
  render: () => {
    const items = [
      { label: "🏠 Home", href: "/" },
      { label: "📦 Products", href: "/products" },
      { label: "📱 Electronics", href: "/products/electronics" },
      { label: "🎧 Headphones" },
    ];

    return <Breadcrumb items={items} />;
  },
};

/**
 * 通过 className 自定义样式
 */
export const CustomClassName: Story = {
  args: {
    className: "custom-breadcrumb",
    items: [
      { label: "Home", href: "/" },
      { label: "Page" },
    ],
  },
};

/**
 * 空数据，不渲染任何内容
 */
export const Empty: Story = {
  args: {
    items: [],
  },
};
