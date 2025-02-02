import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../dist";

const meta: Meta<typeof Checkbox> = {
  title: "checkbox",
  component: Checkbox,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    checked: {
      type: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    indeterminate: {
      type: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    invalid: {
      type: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      type: "boolean",
      table: { defaultValue: { summary: "false" } },
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

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    children: "Invalid",
  },
};
