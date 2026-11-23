import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover, Switch, ThemeProvider, useTheme } from "../dist";
import React from "react";

const meta: Meta = {
  title: "theme",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

function ThemeSwitch() {
  const { toggle, mode, colors } = useTheme();

  return (
    <div
      style={{
        backgroundColor: colors["surface-container-low"],
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Switch
        value={mode === "dark"}
        onClick={(event) => {
          toggle(event);
        }}
      />
    </div>
  );
}

export const Normal: Story = {
  render: () => (
    <ThemeProvider>
      <ThemeSwitch />
    </ThemeProvider>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <ThemeProvider defaultMode="dark">
      <ThemeSwitch />
    </ThemeProvider>
  ),
};

/** Preview the circular reveal with an open overlay and a scrollable page. */
export const CircularReveal: Story = {
  render: () => (
    <ThemeProvider>
      <div style={{ padding: 24, minHeight: "150vh" }}>
        <div style={{ position: "sticky", top: 24 }}>
          <Popover visible content="This overlay stays open during the reveal.">
            <button type="button">Overlay anchor</button>
          </Popover>
        </div>
        <RevealControls />
      </div>
    </ThemeProvider>
  ),
};

function RevealControls() {
  const { mode, toggle } = useTheme();

  return (
    <div style={{ position: "fixed", insetInlineEnd: 24, insetBlockEnd: 24 }}>
      <button type="button" onClick={(event) => toggle(event, { duration: 800 })}>
        Switch from {mode}
      </button>
      <button type="button" onClick={(event) => toggle(event, { duration: 0 })}>
        Switch immediately
      </button>
    </div>
  );
}
