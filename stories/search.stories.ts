import type { Meta, StoryObj } from "@storybook/react-vite";
import { createElement, useState } from "react";
import { Avatar, Search } from "../dist";
import type { SearchItem, SearchProps } from "../dist";

const resultItems: SearchItem[] = [
  {
    key: "ava-patel",
    value: "Ava Patel",
    label: "Ava Patel",
    supportingText: "Product designer · People",
    leading: createElement(Avatar, { alt: "AP", size: "small" }),
    trailing: "People",
  },
  {
    key: "material-search",
    value: "Material search guidance",
    label: "Material search guidance",
    supportingText: "Design system documentation",
    trailing: "Docs",
  },
  {
    key: "archived-result",
    value: "Archived result",
    label: "Archived result",
    supportingText: "Unavailable in this workspace",
    disabled: true,
    trailing: "Archived",
  },
];

const ControlledOpenExample = (props: SearchProps) => {
  const [open, setOpen] = useState(false);

  return createElement(Search, {
    ...props,
    open,
    onOpenChange: setOpen,
  });
};

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

/**
 * Results with leading, supporting, disabled, and trailing content
 */
export const WithResults: Story = {
  args: {
    defaultOpen: true,
    view: "modal",
    placeholder: "Search people and docs",
    items: resultItems,
  },
};

/**
 * Explicit modal Search View
 */
export const ModalView: Story = {
  args: {
    defaultOpen: true,
    view: "modal",
    placeholder: "Search in a modal",
    items: resultItems,
  },
};

/**
 * Explicit full-screen Search View
 */
export const FullScreenView: Story = {
  args: {
    defaultOpen: true,
    view: "full-screen",
    placeholder: "Search full screen",
    items: resultItems,
  },
};

/**
 * Custom leading icon and trailing avatar slots
 */
export const CustomSlots: Story = {
  args: {
    placeholder: "Search with custom slots",
    leading: createElement("span", { "aria-hidden": true }, "⌕"),
    trailing: createElement(Avatar, { alt: "TU", size: "small" }),
  },
};

/**
 * Parent-controlled Search View visibility
 */
export const ControlledOpen: Story = {
  args: {
    view: "modal",
    placeholder: "Focus to open controlled Search",
    items: resultItems,
  },
  render: (args) => createElement(ControlledOpenExample, args),
};
