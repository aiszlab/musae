import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fab } from "../dist";
import AccountCircle from "../dist/components/icon/icons/action/account-circle";
import React from "react";

const meta: Meta<typeof Fab> = {
  title: "fab",
  component: Fab,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: <AccountCircle />,
  },
};
