import type { Meta, StoryObj } from "@storybook/react";
import { Clock } from "../dist";

const meta: Meta<typeof Clock> = {
  title: "clock",
  component: Clock,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
