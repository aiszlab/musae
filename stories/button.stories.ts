import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../dist";

const meta: Meta<typeof Button> = {
  title: "button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      type: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "tertiary", "error"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["filled", "outlined", "text"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: "Normal",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Normal",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "Secondary",
    disabled: false,
  },
};
