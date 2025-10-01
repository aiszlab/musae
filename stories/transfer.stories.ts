import type { Meta, StoryObj } from "@storybook/react-vite";
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
    options: Array.from({ length: 30 }).map((_, pos) => {
      return {
        value: pos,
        label: `Option ${pos}`,
      };
    }),
  },
};
