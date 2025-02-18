import type { Meta, StoryObj } from "@storybook/react";
import { Bench } from "../dist";
import React from "react";
import { URLSearchParams } from "url";

const meta: Meta<typeof Bench> = {
  title: "bench",
  component: Bench,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    title: "aisz.dev",
    logo: <span>AD</span>,
    children: "Normal",
    onNavigate: () => {},
    location: "/menus",
    navigations: [
      {
        path: "/",
        label: "Home",
      },
      {
        path: "/dashboard",
        label: "Dashboard",
      },
      {
        path: "/menus",
        label: "Menus",
        children: [
          {
            path: "/menus/1",
            label: "Menu 1",
          },
          {
            path: "/menus/2",
            label: "Menu 2",
          },
        ],
      },
    ],
  },
};
