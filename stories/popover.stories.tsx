import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover } from "../dist";

const meta: Meta<typeof Popover> = {
  title: "popover",
  component: Popover,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Hover the trigger, then move across the arrow into the floating panel. */
export const HoverWithArrow: Story = {
  args: {
    children: "Hover me",
    title: "Popover title",
    content: "Move the pointer from the trigger across the arrow into this panel.",
    arrow: true,
    triggerBy: "hover",
  },
};

export const ClickWithArrow: Story = {
  args: {
    children: "Click me",
    title: "Popover title",
    content: "The arrow stays part of the floating panel.",
    arrow: true,
    triggerBy: "click",
  },
};
