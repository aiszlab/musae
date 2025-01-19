import type { Meta, StoryObj } from "@storybook/react";
import { Ellipsis } from "../dist";

const meta: Meta<typeof Ellipsis> = {
  title: "ellipsis",
  component: Ellipsis,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    value:
      "测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本",
    style: {
      width: 20,
      height: 20,
    },
  },
};
