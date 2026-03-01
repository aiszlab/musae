import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search } from "../dist";

const meta: Meta<typeof Search> = {
  title: "search",
  component: Search,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    onSearch: (keyword) => {
      console.log("当前正在搜索关键字：", keyword);
    },
  },
};

export const CustomSearchButton: Story = {
  args: {
    searchButton: "搜索",
  },
};
