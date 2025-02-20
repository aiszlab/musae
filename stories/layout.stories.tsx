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
      <Layout.Heading>heading</Layout.Heading>,
      <Layout.Header>header</Layout.Header>,
      <Layout.Sidebar>sidebar</Layout.Sidebar>,
      <Layout.Main>main</Layout.Main>,
      <Layout.Footer>footer</Layout.Footer>,
    ],
  },
};
