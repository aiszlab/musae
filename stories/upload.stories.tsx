import type { Meta, StoryObj } from "@storybook/react-vite";
import { Upload } from "../dist";

const meta: Meta<typeof Upload> = {
  title: "upload",
  component: Upload,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    renderItem: "picture",
    value: [
      {
        status: "success",
        url: "https://fantu-1304340057.cos.ap-shanghai.myqcloud.com/stack-logos/4eddf664-1bb3-4cc1-800d-518aa5e884fe",
      },
    ],
    multiple: true,
  },
};

export const PictureFallback: Story = {
  args: {
    renderItem: "picture",
    value: [
      {
        status: "success",
        url: "invalid-url",
      },
    ],
    multiple: true,
  },
};
