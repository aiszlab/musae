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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    checked: void 0,
    indeterminate: void 0,
    children: "Checkbox",
  },
};
