import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../dist";

const meta: Meta<typeof Input> = {
  title: "input",
  component: Input,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    placeholder: "请输入内容",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "不可编辑状态",
  },
};
