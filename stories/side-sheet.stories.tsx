import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SideSheet, Button, Space } from "../dist";

const meta: Meta<typeof SideSheet> = {
  title: "side-sheet",
  component: SideSheet,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    open: { control: "boolean" },
    type: {
      control: "select",
      options: ["standard", "modal"],
    },
    size: { control: "number" },
    closable: { control: "boolean" },
    placement: {
      control: "select",
      options: ["right", "left", "top", "bottom"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SideSheet>;

const Actions = ({ onClose }: { onClose?: VoidFunction }) => (
  <>
    <Button onClick={onClose}>Save</Button>
    <Button variant="outlined" onClick={onClose}>
      Cancel
    </Button>
  </>
);

export const Modal: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open Side Sheet</Button>
        <SideSheet
          {...args}
          open={open}
          title="Title"
          onClose={() => setOpen(false)}
          actions={<Actions onClose={() => setOpen(false)} />}
        >
          <div style={{ padding: 24 }}>
            <p style={{ margin: 0, color: "var(--color-on-surface-variant)" }}>
              A modal side sheet overlays the page with a scrim. Click the overlay or press Esc to
              dismiss.
            </p>
          </div>
        </SideSheet>
      </div>
    );
  },
};

export const WithBack: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open Side Sheet with Back</Button>
        <SideSheet
          {...args}
          open={open}
          title={step === 1 ? "Title" : "Detail"}
          onBack={step > 1 ? () => setStep(1) : undefined}
          onClose={() => {
            setOpen(false);
            setStep(1);
          }}
          actions={<Actions onClose={() => setOpen(false)} />}
        >
          <div style={{ padding: 24 }}>
            <p style={{ margin: 0, color: "var(--color-on-surface-variant)" }}>
              {step === 1
                ? "The header shows a back button when `onBack` is provided."
                : "This is the detail view. Use the back button to return."}
            </p>
            {step === 1 && (
              <Space style={{ marginTop: 16 }}>
                <Button variant="outlined" onClick={() => setStep(2)}>
                  Go to detail
                </Button>
              </Space>
            )}
          </div>
        </SideSheet>
      </div>
    );
  },
};

export const Standard: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <div style={{ padding: 16 }}>
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={() => setOpen((_open) => !_open)}>Toggle Side Sheet</Button>
        </Space>

        <div
          style={{
            display: "flex",
            height: 480,
            border: "1px solid var(--color-outline-variant)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          <div style={{ flex: 1, padding: 24 }}>
            <h3 style={{ marginTop: 0 }}>Main content</h3>
            <p style={{ color: "var(--color-on-surface-variant)" }}>
              A standard side sheet sits alongside the main content — no scrim, separated by a
              divider.
            </p>
          </div>

          <SideSheet
            {...args}
            type="standard"
            open={open}
            title="Title"
            onClose={() => setOpen(false)}
            actions={<Actions onClose={() => setOpen(false)} />}
          >
            <div style={{ padding: 24 }}>
              <p style={{ margin: 0, color: "var(--color-on-surface-variant)" }}>
                Supplementary content lives here.
              </p>
            </div>
          </SideSheet>
        </div>
      </div>
    );
  },
};

export const WithoutActions: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open without Actions</Button>
        <SideSheet {...args} open={open} title="Title" onClose={() => setOpen(false)}>
          <div style={{ padding: 24 }}>
            <p style={{ margin: 0, color: "var(--color-on-surface-variant)" }}>
              The footer divider and buttons are only rendered when `actions` is provided.
            </p>
          </div>
        </SideSheet>
      </div>
    );
  },
};

export const AllPlacements: Story = {
  render: (args) => {
    const [placement, setPlacement] = useState<"right" | "left" | "top" | "bottom">(
      (args.placement as "right" | "left" | "top" | "bottom") ?? "right",
    );

    return (
      <div style={{ padding: 16 }}>
        <Space style={{ marginBottom: 16 }}>
          {(["right", "left", "top", "bottom"] as const).map((p) => (
            <Button
              key={p}
              variant={placement === p ? "filled" : "outlined"}
              onClick={() => setPlacement(p)}
            >
              {p}
            </Button>
          ))}
        </Space>

        <SideSheet
          {...args}
          open={true}
          placement={placement}
          title={`Placement: ${placement}`}
          onClose={() => {}}
        >
          <div style={{ padding: 24 }}>
            <p style={{ margin: 0, color: "var(--color-on-surface-variant)" }}>
              SideSheet slides in from the {placement} edge.
            </p>
          </div>
        </SideSheet>
      </div>
    );
  },
};

export const WithConfirm: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open with Confirm</Button>
        <SideSheet
          {...args}
          open={open}
          title="Confirm Action"
          onConfirm={() => setOpen(false)}
          onClose={() => setOpen(false)}
        >
          <div style={{ padding: 24 }}>
            <p style={{ margin: 0, color: "var(--color-on-surface-variant)" }}>
              The header shows a confirm button when `onConfirm` is provided. Click
              &quot;confirm&quot; or the close button to dismiss.
            </p>
          </div>
        </SideSheet>
      </div>
    );
  },
};

/** Very long content scrolls inside the sheet body while the header and footer stay pinned. */
export const LongContent: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open Long Content</Button>
        <SideSheet
          {...args}
          open={open}
          title="Long Content"
          onClose={() => setOpen(false)}
          actions={<Actions onClose={() => setOpen(false)} />}
        >
          {Array.from({ length: 40 }, (_, i) => (
            <div
              key={i}
              style={{
                padding: "16px 0",
                borderBottom: "1px solid var(--color-outline-variant)",
              }}
            >
              <h4 style={{ margin: "0 0 8px" }}>Section {i + 1}</h4>
              <p
                style={{
                  margin: 0,
                  color: "var(--color-on-surface-variant)",
                  lineHeight: 1.6,
                }}
              >
                Material side sheets are surfaces containing supplementary content. They are
                anchored to a screen edge and slide in over the page. The body scrolls independently
                while the header and the actions footer remain pinned, so the primary actions stay
                reachable no matter how far down the content goes.
              </p>
            </div>
          ))}
        </SideSheet>
      </div>
    );
  },
};
