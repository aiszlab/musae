import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet, Button, Space } from "musae";
import "musae/styles.css";

const meta: Meta<typeof BottomSheet> = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    open: { control: "boolean" },
    height: { control: "text" },
    closable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

const Template = (args: Partial<Parameters<typeof BottomSheet>[0]>) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 16 }}>
      <Button onClick={() => setOpen(true)}>Open Bottom Sheet</Button>
      <BottomSheet open={open} onClose={() => setOpen(false)} {...args}>
        <div>
          <h3 style={{ margin: 0 }}>Bottom Sheet</h3>
          <p style={{ color: "var(--color-on-surface-variant)" }}>
            Drag the handle or tap the overlay to dismiss.
          </p>
          <Space style={{ marginTop: 16 }}>
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </Space>
        </div>
      </BottomSheet>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};

export const CustomHeight: Story = {
  render: (args) => <Template {...args} height="80vh" />,
};

export const LongContent: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open Long Content</Button>
        <BottomSheet open={open} onClose={() => setOpen(false)} {...args}>
          {Array.from({ length: 20 }, (_, i) => (
            <p
              key={i}
              style={{
                padding: 8,
                margin: 0,
                borderBottom: "1px solid var(--color-outline-variant)",
              }}
            >
              Item {i + 1}
            </p>
          ))}
        </BottomSheet>
      </div>
    );
  },
};
