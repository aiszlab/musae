import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../dist";

const meta: Meta<typeof Input> = {
  title: "input",
  component: Input,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      type: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    placeholder: "请输入内容",
  },
};

export const WithoutPlaceholder: Story = {};

export const WithLabel: Story = {
  args: {
    label: "标签",
  },
};

export const WithLabelAndPlaceholder: Story = {
  args: {
    label: "标签",
    placeholder: "请输入内容",
  },
};

/** Filled input */
export const Filled: Story = { args: { variant: "filled", placeholder: "Search" } };

/** Filled pill input */
export const FilledPill: Story = {
  args: { variant: "filled", shape: "pill", placeholder: "Search" },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "不可编辑状态",
  },
};
