import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { Input } from "..";

describe("input element padding", () => {
  test("uses the default inline padding without leading or trailing", () => {
    const { container } = render(<Input />);
    const input = container.querySelector("input")!;

    expect(input).toHaveClass("styles__input.base");
    expect(input).not.toHaveClass("styles__input.hasLeading", "styles__input.hasTrailing");
  });

  test("widens the start padding when leading is provided", () => {
    const { container } = render(<Input leading={<span>L</span>} />);
    const input = container.querySelector("input")!;

    expect(input).toHaveClass("styles__input.hasLeading");
    expect(input).not.toHaveClass("styles__input.hasTrailing");
  });

  test("widens the end padding when trailing is provided", () => {
    const { container } = render(<Input trailing={<span>T</span>} />);
    const input = container.querySelector("input")!;

    expect(input).toHaveClass("styles__input.hasTrailing");
    expect(input).not.toHaveClass("styles__input.hasLeading");
  });

  test("widens both sides when leading and trailing are provided", () => {
    const { container } = render(<Input leading={<span>L</span>} trailing={<span>T</span>} />);
    const input = container.querySelector("input")!;

    expect(input).toHaveClass("styles__input.hasLeading", "styles__input.hasTrailing");
  });
});

describe("leading and trailing wrappers", () => {
  test("wraps leading in a positioned container", () => {
    const { container } = render(<Input leading={<span>L</span>} />);
    const wrapper = container.getElementsByClassName("styles__leading.base")[0];

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveTextContent("L");
  });

  test("wraps trailing in a positioned container", () => {
    const { container } = render(<Input trailing={<span>T</span>} />);
    const wrapper = container.getElementsByClassName("styles__trailing.base")[0];

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveTextContent("T");
  });

  test("omits the wrappers when leading and trailing are not provided", () => {
    const { container } = render(<Input />);

    expect(container.getElementsByClassName("styles__leading.base")).toHaveLength(0);
    expect(container.getElementsByClassName("styles__trailing.base")).toHaveLength(0);
  });
});
