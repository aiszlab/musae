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

/**
 * Basic usage
 */
export const Normal: Story = {
  args: {
    placeholder: "Search...",
    onSearch: (keyword) => {
      console.log("Search keyword:", keyword);
    },
    onChange: (value) => {
      console.log("Input changed:", value);
    },
  },
};

/**
 * Uncontrolled with default value
 */
export const DefaultValue: Story = {
  args: {
    defaultValue: "Hello World",
    placeholder: "Search...",
    onSearch: (keyword) => {
      console.log("Search keyword:", keyword);
    },
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    placeholder: "Search...",
    disabled: true,
    defaultValue: "Hello World",
  },
};

/**
 * Without clear button
 */
export const WithoutClear: Story = {
  args: {
    placeholder: "Search...",
    clearable: false,
    defaultValue: "Cannot clear",
  },
};

/**
 * Custom search button
 */
export const CustomSearchButton: Story = {
  args: {
    placeholder: "Search...",
    searchButton: "搜索",
    onSearch: (keyword) => {
      console.log("Search keyword:", keyword);
    },
  },
};
