import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from "../dist";

const meta: Meta<typeof Image> = {
  title: "image",
  component: Image,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    src: "https://fantu-1304340057.cos.ap-shanghai.myqcloud.com/stack-logos/4eddf664-1bb3-4cc1-800d-518aa5e884fe",
    referrerPolicy: "strict-origin-when-cross-origin",
  },
};

export const Sized: Story = {
  args: {
    src: "https://fantu-1304340057.cos.ap-shanghai.myqcloud.com/stack-logos/4eddf664-1bb3-4cc1-800d-518aa5e884fe",
    referrerPolicy: "strict-origin-when-cross-origin",
    width: 100,
  },
};

export const Fallback: Story = {
  args: {
    width: 200,
    height: 160,
  },
};
