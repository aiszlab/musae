import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { Input } from "..";

describe("Input appearances", () => {
  test("filled pill owns its surface without rendering the notched outline", () => {
    const { container } = render(<Input variant="filled" shape="pill" placeholder="Search" />);
    const shell = container.querySelector(".musae-input__inputor");

    expect(shell).toHaveClass("styles__root.filled", "styles__root.pill");
    expect(container.querySelector(".musae-notched-outline")).not.toBeInTheDocument();
    expect(shell).toHaveStyle("background-color: var(--color-surface-container-high)");
  });

  test("default and standard Input retain the current outlined structure", () => {
    const { container, rerender } = render(<Input label="Name" />);
    expect(container.querySelector(".musae-notched-outline")).toBeInTheDocument();

    rerender(<Input variant="standard" label="Name" />);
    expect(container.querySelector(".musae-notched-outline")).toBeInTheDocument();
  });
});
