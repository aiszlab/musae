import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "../dist";
import { CheckCircle } from "../dist/components/icon/icons";
import React from "react";

const meta: Meta<typeof Icon> = {
  title: "icon",
  component: Icon,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => {
    return <CheckCircle />;
  },
};
