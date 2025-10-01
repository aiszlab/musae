import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "../dist";
import React from "react";

const meta: Meta<typeof Divider> = {
  title: "divider",
  component: Divider,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Labeled: Story = {
  args: {
    children: "Splitted Label",
  },
};

export const ContentLeft: Story = {
  args: {
    children: "Splitted Label",
    align: "left",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (props) => {
    return (
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <div style={{ fontSize: 32 }}>Leading</div>
        <Divider {...props} />
        <div>Trailing</div>
      </div>
    );
  },
};
