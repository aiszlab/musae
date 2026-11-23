import type { Meta, StoryObj } from "@storybook/react-vite";
import { createElement } from "react";
import { Dialog, ThemeProvider } from "../dist";

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

/** Mounts the dialog in a caller-selected container outside the theme shell. */
export const ExternalContainer: Story = {
  args: {
    open: true,
    title: "External container",
    children: "This dialog is mounted in the document body.",
    container: () => document.body,
  },
  render: (args) => createElement(ThemeProvider, { children: createElement(Dialog, args) }),
};
