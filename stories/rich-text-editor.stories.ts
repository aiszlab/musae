import type { Meta, StoryObj } from "@storybook/react";
import { RichTextEditor } from "../dist";

const meta: Meta<typeof RichTextEditor> = {
  title: "rich-text-editor",
  component: RichTextEditor,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
