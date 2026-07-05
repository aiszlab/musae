import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Drawer, Button, Space } from "../dist";
import { flushSync } from "react-dom";

const meta: Meta<typeof Drawer> = {
  title: "drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    open: { control: "boolean" },
    size: { control: "number" },
    closable: { control: "boolean" },
    placement: {
      control: "select",
      options: ["right", "left", "top", "bottom"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const Template = (args: Partial<Parameters<typeof Drawer>[0]>) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 16 }}>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} {...args}>
        <div style={{ padding: 16 }}>
          <h3 style={{ margin: 0 }}>Drawer Content</h3>
          <p style={{ color: "var(--color-on-surface-variant)" }}>
            Click the overlay or press Esc to dismiss.
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};

export const Placements: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<"right" | "left" | "top" | "bottom">("right");

    const size = placement === "top" || placement === "bottom" ? 300 : 400;

    const openDrawer = (placement: "right" | "left" | "top" | "bottom") => {
      setPlacement(placement);
      setOpen(true);
    };

    return (
      <div style={{ padding: 16 }}>
        <Space>
          <Button onClick={() => openDrawer("right")}>Right</Button>
          <Button onClick={() => openDrawer("left")}>Left</Button>
          <Button onClick={() => openDrawer("top")}>Top</Button>
          <Button onClick={() => openDrawer("bottom")}>Bottom</Button>
        </Space>

        <Drawer
          {...args}
          open={open}
          placement={placement}
          size={size}
          onClose={() => setOpen(false)}
        >
          <div style={{ padding: 16 }}>
            <h3 style={{ margin: 0 }}>{placement} Drawer</h3>
            <p style={{ color: "var(--color-on-surface-variant)" }}>
              This drawer slides in from the {placement}.
            </p>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const WithTitle: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open Drawer with Title</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)} title="Drawer Title">
          <div style={{ padding: 16 }}>
            <p style={{ color: "var(--color-on-surface-variant)" }}>
              This drawer has a title in the header.
            </p>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const WithConfirm: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open Drawer with Confirm</Button>
        <Drawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm Action"
          onConfirm={() => setOpen(false)}
        >
          <div style={{ padding: 16 }}>
            <p style={{ color: "var(--color-on-surface-variant)" }}>
              This drawer has a confirm button in the header.
            </p>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const CustomSize: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open Wide Drawer (600px)</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)} size={600}>
          <div style={{ padding: 16 }}>
            <p style={{ color: "var(--color-on-surface-variant)" }}>
              This drawer has a custom width of 600px.
            </p>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const NonClosable: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open Non-Closable Drawer</Button>
        <Drawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          closable={false}
          title="Non-Closable"
        >
          <div style={{ padding: 16 }}>
            <p style={{ color: "var(--color-on-surface-variant)" }}>
              This drawer cannot be closed by clicking the overlay or pressing Esc.
            </p>
            <Space style={{ marginTop: 16 }}>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </Space>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const BodyScroll: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <p style={{ marginBottom: 16, color: "var(--color-on-surface-variant)" }}>
          页面内容很长，打开 Drawer 后 body 滚动将被锁定。
        </p>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>

        {/* 长页面内容，用于演示 body 滚动锁定 */}
        {Array.from({ length: 20 }, (_, i) => (
          <p
            key={i}
            style={{
              padding: "16px",
              margin: "8px 0",
              background: "var(--color-surface-container)",
              borderRadius: 8,
            }}
          >
            Body Section {i + 1} — 滚动此页面，然后打开 Drawer 查看 body 滚动锁定效果。
          </p>
        ))}

        <Drawer {...args} open={open} onClose={() => setOpen(false)} title="Body Scroll Lock">
          <div style={{ padding: 16 }}>
            <p style={{ color: "var(--color-on-surface-variant)" }}>
              Drawer 打开时，body 滚动已被锁定。关闭 Drawer 后，body 滚动恢复。
            </p>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const LongContent: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open Long Content</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)} title="Scrollable Content">
          {Array.from({ length: 30 }, (_, i) => (
            <p
              key={i}
              style={{
                padding: "12px 16px",
                margin: 0,
                borderBottom: "1px solid var(--color-outline-variant)",
              }}
            >
              Item {i + 1} — Scrollable drawer body content.
            </p>
          ))}
        </Drawer>
      </div>
    );
  },
};
