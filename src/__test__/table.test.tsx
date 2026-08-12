import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { Table } from "../components/table";

type Row = { id: string; name: string; children?: Row[] };
const data: Row[] = [
  {
    id: "parent",
    name: "Parent",
    children: [
      { id: "child", name: "Child", children: [{ id: "grandchild", name: "Grandchild" }] },
      { id: "leaf", name: "Leaf" },
    ],
  },
  { id: "plain", name: "Plain" },
];
const columns = [{ title: "Name", valueAt: "name" as const }];

describe("Table hierarchical rows", () => {
  test("is disabled by default", () => {
    render(<Table dataSource={data} columns={columns} rowKey="id" />);
    expect(screen.queryByRole("button", { name: "展开" })).not.toBeInTheDocument();
    expect(screen.queryByText("Child")).not.toBeInTheDocument();
  });

  test("expands nested rows and collapses all descendants", () => {
    render(<Table expandable dataSource={data} columns={columns} rowKey="id" />);
    expect(screen.getAllByRole("button", { name: "展开" })).toHaveLength(1);

    fireEvent.click(screen.getByRole("button", { name: "展开" }));
    expect(screen.getByText("Child")).toBeInTheDocument();
    expect(screen.getByText("Leaf")).toBeInTheDocument();
    expect(screen.queryByText("Grandchild")).not.toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "展开" })).toHaveLength(1);

    fireEvent.click(screen.getByRole("button", { name: "展开" }));
    expect(screen.getByText("Grandchild")).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole("button", { name: "收起" })[0]);
    expect(screen.queryByText("Child")).not.toBeInTheDocument();
    expect(screen.queryByText("Grandchild")).not.toBeInTheDocument();
  });

  test("supports controlled expansion and reports keys", () => {
    const onChange = jest.fn();
    const { rerender } = render(
      <Table
        expandable
        dataSource={data}
        columns={columns}
        rowKey="id"
        expandedKeys={[]}
        onExpandedKeysChange={onChange}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "展开" }));
    expect(onChange).toHaveBeenCalledWith(["parent"]);
    expect(screen.queryByText("Child")).not.toBeInTheDocument();

    rerender(
      <Table expandable dataSource={data} columns={columns} rowKey="id" expandedKeys={["parent"]} />,
    );
    expect(screen.getByText("Child")).toBeInTheDocument();
  });

  test("empty state spans the expansion and data columns", () => {
    render(<Table<Row> expandable dataSource={[]} columns={columns} rowKey="id" />);
    expect(within(screen.getByRole("table")).getByRole("cell")).toHaveAttribute("colspan", "2");
  });
});
