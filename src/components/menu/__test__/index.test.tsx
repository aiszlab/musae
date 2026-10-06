import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Menu } from "..";

describe("`Menu` Component", () => {
  test("displays leading content before the item label", () => {
    render(
      <Menu
        items={[
          {
            key: "profile",
            leading: <span>Avatar</span>,
            label: "Profile",
            trailing: <span>⌘P</span>,
          },
        ]}
      />,
    );

    const leading = screen.getByText("Avatar");
    const label = screen.getByText("Profile");
    const trailing = screen.getByText("⌘P");

    expect(leading.compareDocumentPosition(label) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(label.compareDocumentPosition(trailing) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  test("displays zero as leading content", () => {
    render(<Menu items={[{ key: "priority", leading: 0, label: "Priority" }]} />);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("displays trailing content after the item label", () => {
    render(
      <Menu
        items={[
          {
            key: "settings",
            label: "Settings",
            trailing: <span>⌘,</span>,
          },
        ]}
      />,
    );

    const label = screen.getByText("Settings");
    const trailing = screen.getByText("⌘,");

    expect(label.compareDocumentPosition(trailing) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  test("displays zero as trailing content", () => {
    render(<Menu items={[{ key: "inbox", label: "Inbox", trailing: 0 }]} />);

    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
