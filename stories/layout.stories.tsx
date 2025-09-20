import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "../dist";
import React from "react";

const meta: Meta<typeof Layout> = {
  title: "layout",
  component: Layout,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: [
      <Layout.Heading key="heading">heading</Layout.Heading>,
      <Layout.Header key="header">header</Layout.Header>,
      <Layout.Sidebar key="sidebar">sidebar</Layout.Sidebar>,
      <Layout.Main key="main">main</Layout.Main>,
      <Layout.Footer key="footer">footer</Layout.Footer>,
    ],
  },
};
