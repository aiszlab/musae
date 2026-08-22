import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Table } from "../dist";

type Person = {
  id: string;
  name: string;
  role: string;
  children?: Person[];
};

const data: Person[] = [
  {
    id: "engineering",
    name: "Engineering",
    role: "Department",
    children: [
      {
        id: "platform",
        name: "Platform",
        role: "Team",
        children: [{ id: "ada", name: "Ada", role: "Engineer" }],
      },
      { id: "grace", name: "Grace", role: "Engineer" },
    ],
  },
  { id: "linus", name: "Linus", role: "Independent contributor" },
];

const meta = {
  title: "table",
  component: Table<Person>,
  tags: ["autodocs"],
  args: {
    dataSource: data,
    rowKey: "id",
    columns: [
      { title: "Name", valueAt: "name" },
      { title: "Role", valueAt: "role" },
    ],
  },
} satisfies Meta<typeof Table<Person>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hierarchical: Story = {
  args: { expandable: true, defaultExpandedKeys: ["engineering", "platform"] },
};

export const CapabilityDisabled: Story = {
  args: { expandable: false },
};
