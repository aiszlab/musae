import type { Meta, StoryObj } from "@storybook/react-vite";
import { Transfer } from "../dist";
import React, { useState } from "react";

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
    options: Array.from({ length: 30 }).map((_, pos) => {
      return {
        value: pos,
        label: `Option ${pos}`,
      };
    }),
  },
};

export const Controlled: Story = {
  args: {
    options: Array.from({ length: 30 }).map((_, pos) => {
      return {
        value: pos,
        label: `Option ${pos}`,
      };
    }),
    value: [0, 1, 2, 3, 4],
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <Transfer
        {...args}
        value={value}
        onChange={(keys) => {
          setValue(keys);
        }}
      />
    );
  },
};
