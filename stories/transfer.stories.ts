import type { Meta, StoryObj } from "@storybook/react";
import { Transfer } from "../dist";

const meta: Meta<typeof Transfer> = {
  title: "transfer",
  component: Transfer,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    options: [
      { value: 1, label: "1" },
      { value: 2, label: "2" },
    ],
  },
};
