import type { Meta, StoryObj } from "@storybook/react";
import { RichTextEditor, Textarea } from "../dist";
import React, { useState } from "react";

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

export const DefaultValue: Story = {
  args: {},
  render: () => {
    return (
      <RichTextEditor
        defaultValue={`# Hello Musae
#### Get Started To Use Musae`}
        style={{ flex: 1 }}
        use="markdown"
      />
    );
  },
};

export const Controlled: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState("# Hello Musae");

    return (
      <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        <Textarea style={{ flex: 1 }} value={value} onChange={setValue} />
        <RichTextEditor value={value} style={{ flex: 1 }} use="markdown" />
      </div>
    );
  },
};
