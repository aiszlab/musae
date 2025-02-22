import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, Bench } from "../dist";
import React from "react";

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
            children: [
              {
                path: "/menus/1/1",
                label: "Menu Items 1",
              },
              {
                path: "/menus/1/2",
                label: "Menu Items 2",
              },
            ],
          },
          {
            path: "/menus/2",
            label: "Menu 2",
          },
        ],
      },
    ],
    trailing: <Avatar alt="M" />,
  },
};
