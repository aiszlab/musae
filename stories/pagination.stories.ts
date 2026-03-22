import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "../dist";

const meta: Meta<typeof Pagination> = {
  title: "pagination",
  component: Pagination,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

export const HiddenSizeSelect: Story = {
  args: {
    total: 100,
    pageSize: 10,
    pageSizes: [],
  },
};
