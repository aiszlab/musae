import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog } from "../dist";

const meta: Meta<typeof Dialog> = {
  title: "dialog",
  component: Dialog,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    open: {
      type: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: "使用一个简单的弹窗",
  },
};

export const WithTitle: Story = {
  args: {
    title: "标题",
    children: "使用一个带有标题的弹窗",
  },
};
