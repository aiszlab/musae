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

const paginatedData: Person[] = [
  { id: "ada", name: "Ada Lovelace", role: "Mathematician" },
  { id: "grace", name: "Grace Hopper", role: "Computer scientist" },
  { id: "alan", name: "Alan Turing", role: "Computer scientist" },
  { id: "katherine", name: "Katherine Johnson", role: "Mathematician" },
  { id: "donald", name: "Donald Knuth", role: "Computer scientist" },
  { id: "margaret", name: "Margaret Hamilton", role: "Software engineer" },
  { id: "barbara", name: "Barbara Liskov", role: "Computer scientist" },
  { id: "edsger", name: "Edsger Dijkstra", role: "Computer scientist" },
  { id: "frances", name: "Frances Allen", role: "Computer scientist" },
  { id: "john", name: "John von Neumann", role: "Mathematician" },
  { id: "radia", name: "Radia Perlman", role: "Network engineer" },
  { id: "tim", name: "Tim Berners-Lee", role: "Computer scientist" },
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

export const Paginated: Story = {
  args: {
    dataSource: paginatedData,
  },
};

export const ServerPaginated: Story = {
  args: {
    dataSource: paginatedData.slice(0, 5),
    pagination: { total: 128, pageSize: 5 },
  },
};

export const RowSelection: Story = {
  args: {
    rowSelection: {
      defaultSelectedRowKeys: ["ada"],
    },
  },
};
