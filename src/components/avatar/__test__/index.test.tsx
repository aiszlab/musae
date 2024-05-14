import { render } from "@testing-library/react";
import Avatar from "../avatar";
import React from "react";
import "@testing-library/jest-dom";

describe("`Avatar` Component", () => {
  test("without src", () => {
    const { container } = render(<Avatar />);
    expect(container.querySelector(".musae-avatar")).toBeInTheDocument();
  });

  test("with src", () => {
    const { container } = render(<Avatar src="https://aiszlab.com" />);
    expect(container.querySelector(".musae-avatar")).toBeInTheDocument();
  });
});
