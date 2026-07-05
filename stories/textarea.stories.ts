import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "../dist";

const meta: Meta<typeof Textarea> = {
  title: "textarea",
  component: Textarea,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    rows: {
      control: { type: "number", min: 1, max: 20 },
      description: "文本域可见行数",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "请输入内容",
    rows: 3,
  },
};
