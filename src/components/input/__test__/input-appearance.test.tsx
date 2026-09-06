import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { Input } from "..";

describe("Input appearances", () => {
  test("filled pill leaves its surface states to StyleX without rendering the notched outline", () => {
    const { container } = render(<Input variant="filled" shape="pill" placeholder="Search" />);
    const shell = container.querySelector(".musae-input__inputor");

    expect(shell).toHaveClass("styles__root.filled", "styles__root.pill");
    expect(container.querySelector(".musae-notched-outline")).not.toBeInTheDocument();
    expect(shell).toHaveStyle("--color-surface-container-high: #F5EFF7");
    expect(shell?.style.backgroundColor).toBe("");
  });

  test("default and standard Input retain the current outlined structure", () => {
    const { container, rerender } = render(<Input label="Name" />);
    expect(container.querySelector(".musae-notched-outline")).toBeInTheDocument();

    rerender(<Input variant="standard" label="Name" />);
    expect(container.querySelector(".musae-notched-outline")).toBeInTheDocument();
  });
});
