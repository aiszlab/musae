import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "../dist";
import React from "react";

const meta: Meta<typeof Select> = {
  title: "select",
  component: Select,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

export const Widths: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
      <Select placeholder="默认宽度" options={[{ value: "one", label: "选项一" }]} />
      <Select
        style={{ width: "100%" }}
        placeholder="填满父容器"
        options={[{ value: "two", label: "选项二" }]}
      />
    </div>
  ),
};

/**
 * Client-side fuzzy search with case-insensitive regular expression matching.
 */
export const FuzzySearch: Story = {
  args: {
    searchable: true,
    placeholder: "Search fruit",
    options: [
      { value: "apple", label: "Apple" },
      { value: "apricot", label: "Apricot" },
      { value: "banana", label: "Banana" },
      { value: "grape", label: "Grape" },
      { value: "pineapple", label: "Pineapple" },
    ],
  },
};

export const TagsMode: Story = {
  args: {
    mode: "tags",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "不可编辑状态",
  },
};
