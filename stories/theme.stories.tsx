import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch, ThemeProvider, useTheme } from "../dist";
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
        onChange={() => {
          toggle();
        }}
        value={mode === "dark"}
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
