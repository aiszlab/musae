import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, Button, IconButton } from "../dist";
import React from "react";

const meta: Meta<typeof Card> = {
  title: "card",
  component: Card,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["outlined", "elevated", "filled"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const PLACEHOLDER_IMG =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=200&fit=crop";

/**
 * Stacked card with outlined variant — demonstrates Header, Media, Content, and Actions
 */
export const StackedOutlined: Story = {
  render: () => (
    <Card variant="outlined" style={{ width: 360 }}>
      <Card.Header
        title="Header"
        subhead="Subhead"
        monogramText="A"
        action={<IconButton variant="text">{/* more_vert icon */}···</IconButton>}
      />
      <Card.Media>
        <img
          alt=""
          src={PLACEHOLDER_IMG}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Card.Media>
      <Card.Content>
        <div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "24px",
              color: "var(--color-on-surface)",
            }}
          >
            Title
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: "20px",
              color: "var(--color-on-surface-variant)",
            }}
          >
            Subhead
          </div>
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "20px",
            color: "var(--color-on-surface-variant)",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </div>
        <Card.Actions>
          <Button variant="outlined">Enabled</Button>
          <Button variant="filled">Enabled</Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  ),
};

/**
 * Stacked card with elevated variant
 */
export const StackedElevated: Story = {
  render: () => (
    <Card variant="elevated" style={{ width: 360 }}>
      <Card.Header
        title="Header"
        subhead="Subhead"
        monogramText="B"
        action={<IconButton variant="text">···</IconButton>}
      />
      <Card.Media>
        <img
          alt=""
          src={PLACEHOLDER_IMG}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Card.Media>
      <Card.Content>
        <div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "24px",
              color: "var(--color-on-surface)",
            }}
          >
            Title
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: "20px",
              color: "var(--color-on-surface-variant)",
            }}
          >
            Subhead
          </div>
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "20px",
            color: "var(--color-on-surface-variant)",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </div>
        <Card.Actions>
          <Button variant="outlined">Enabled</Button>
          <Button variant="filled">Enabled</Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  ),
};

/**
 * Stacked card with filled variant
 */
export const StackedFilled: Story = {
  render: () => (
    <Card variant="filled" style={{ width: 360 }}>
      <Card.Header
        title="Header"
        subhead="Subhead"
        monogramText="C"
        action={<IconButton variant="text">···</IconButton>}
      />
      <Card.Media>
        <img
          alt=""
          src={PLACEHOLDER_IMG}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Card.Media>
      <Card.Content>
        <div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "24px",
              color: "var(--color-on-surface)",
            }}
          >
            Title
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: "20px",
              color: "var(--color-on-surface-variant)",
            }}
          >
            Subhead
          </div>
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "20px",
            color: "var(--color-on-surface-variant)",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </div>
        <Card.Actions>
          <Button variant="outlined">Enabled</Button>
          <Button variant="filled">Enabled</Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  ),
};

/**
 * Horizontal card with outlined variant — compact layout with side media
 */
export const HorizontalOutlined: Story = {
  render: () => (
    <Card variant="outlined" style={{ width: 360, height: 80 }}>
      <Card.Header title="Header" subhead="Subhead" monogramText="A" />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 80,
          borderLeft: "1px solid var(--color-outline-variant)",
        }}
      >
        <img
          alt=""
          src={PLACEHOLDER_IMG}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </Card>
  ),
};

/**
 * Horizontal card with elevated variant
 */
export const HorizontalElevated: Story = {
  render: () => (
    <Card variant="elevated" style={{ width: 360, height: 80 }}>
      <Card.Header title="Header" subhead="Subhead" monogramText="B" />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 80,
          borderLeft: "1px solid var(--color-outline-variant)",
        }}
      >
        <img
          alt=""
          src={PLACEHOLDER_IMG}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </Card>
  ),
};

/**
 * Interactive card with state layer (hover / focus / press)
 */
export const Interactive: Story = {
  render: () => (
    <Card
      variant="outlined"
      onClick={() => alert("Card clicked!")}
      style={{ width: 360, padding: 16 }}
    >
      <Card.Header
        title="Clickable Card"
        subhead="Has hover, focus, and active state layers"
        monogramText="✓"
      />
      <Card.Content>
        <div style={{ fontSize: 14, lineHeight: "20px", color: "var(--color-on-surface-variant)" }}>
          This card uses the ::after pseudo-element with color-mix() to render interaction state
          layers.
        </div>
      </Card.Content>
    </Card>
  ),
};

/**
 * Simple card — just the container, no sub-components
 */
export const Simple: Story = {
  args: {
    variant: "outlined",
    style: { width: 360, padding: 16 },
    children: "A card is a flexible container. You can put any content inside.",
  },
};

/**
 * All three variants side by side
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      <Card variant="outlined" style={{ width: 200, padding: 16 }}>
        Outlined
      </Card>
      <Card variant="elevated" style={{ width: 200, padding: 16 }}>
        Elevated
      </Card>
      <Card variant="filled" style={{ width: 200, padding: 16 }}>
        Filled
      </Card>
    </div>
  ),
};
