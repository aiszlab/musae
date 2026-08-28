import { render, fireEvent } from "@testing-library/react";
import { Search } from "..";
import { Input } from "../../input";
import { textFieldMarker } from "../../input/styles.stylex";
import React from "react";
import "@testing-library/jest-dom";
import { props as $props } from "@stylexjs/stylex";

describe("`Search` Component", () => {
  test("snapshot", () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders with placeholder", () => {
    const { container } = render(<Search placeholder="Search here..." />);
    const input = container.querySelector("input");
    expect(input).toHaveAttribute("placeholder", "Search here...");
  });

  test("renders leading search icon", () => {
    const { container } = render(<Search />);
    const leading = container.querySelector(".musae-search-leading");
    expect(leading).toBeInTheDocument();
  });

  test("calls onChange when input value changes", () => {
    const onChange = jest.fn();
    const { container } = render(<Search onChange={onChange} />);
    const input = container.querySelector("input");

    fireEvent.change(input!, { target: { value: "hello" } });

    expect(onChange).toHaveBeenCalledWith("hello");
  });

  test("calls onSearch when Enter key pressed", () => {
    const onSearch = jest.fn();
    const { container } = render(<Search onSearch={onSearch} defaultValue="keyword" />);
    const input = container.querySelector("input");

    fireEvent.keyDown(input!, { key: "Enter" });

    expect(onSearch).toHaveBeenCalledWith("keyword");
  });

  test("shows clear button when value is non-empty", () => {
    const { container } = render(<Search defaultValue="text" />);
    const clearButton = container.querySelector("button[aria-label='Clear search']");
    expect(clearButton).toBeInTheDocument();
  });

  test("does not show clear button when value is empty", () => {
    const { container } = render(<Search />);
    const clearButton = container.querySelector("button[aria-label='Clear search']");
    expect(clearButton).not.toBeInTheDocument();
  });

  test("does not show clear button when clearable is false", () => {
    const { container } = render(<Search defaultValue="text" clearable={false} />);
    const clearButton = container.querySelector("button[aria-label='Clear search']");
    expect(clearButton).not.toBeInTheDocument();
  });

  test("clears value and calls onChange when clear button clicked", () => {
    const onChange = jest.fn();
    const { container } = render(<Search defaultValue="text" onChange={onChange} />);
    const clearButton = container.querySelector("button[aria-label='Clear search']");

    fireEvent.click(clearButton!);

    expect(onChange).toHaveBeenCalledWith("");
  });

  test("clears value on Escape key", () => {
    const onChange = jest.fn();
    const { container } = render(<Search defaultValue="text" onChange={onChange} />);
    const input = container.querySelector("input");

    fireEvent.keyDown(input!, { key: "Escape" });

    expect(onChange).toHaveBeenCalledWith("");
  });

  test("renders with custom search button", () => {
    const { container } = render(<Search searchButton="搜索" />);
    expect(container.textContent).toContain("搜索");
  });

  test("calls onSearch when search button clicked", () => {
    const onSearch = jest.fn();
    const { container } = render(
      <Search searchButton="搜索" onSearch={onSearch} defaultValue="keyword" />,
    );

    const buttons = container.querySelectorAll("button");
    const searchBtn = Array.from(buttons).find((btn) => btn.textContent === "搜索");

    fireEvent.click(searchBtn!);

    expect(onSearch).toHaveBeenCalledWith("keyword");
  });

  test("disabled input when disabled prop is true", () => {
    const { container } = render(<Search disabled />);
    const input = container.querySelector("input");
    expect(input).toBeDisabled();
  });

  test("does not show clear button when disabled", () => {
    const { container } = render(<Search disabled defaultValue="text" />);
    const clearButton = container.querySelector("button[aria-label='Clear search']");
    expect(clearButton).not.toBeInTheDocument();
  });

  test("applies the disabled outline color token", () => {
    const { container } = render(<Search disabled />);
    const inputor = container.querySelector<HTMLElement>(".musae-input__inputor");

    expect(inputor?.style.getPropertyValue("--color-on-surface-opacity-12")).toBe(
      "color-mix(in srgb, var(--color-on-surface) 12%, transparent)",
    );
    expect(container.querySelector(".musae-notched-outline__leading")).toHaveClass(
      "styles__outlineLeading.disabled",
    );
    expect(container.querySelector(".musae-notched-outline__notch")).toHaveClass(
      "styles__outlineNotch.disabled",
    );
    expect(container.querySelector(".musae-notched-outline__trailing")).toHaveClass(
      "styles__outlineTrailing.disabled",
    );
  });

  test("applies the disabled label color token", () => {
    const { container } = render(<Search disabled />);
    const inputor = container.querySelector<HTMLElement>(".musae-input__inputor");
    const label = container.querySelector(".musae-notched-outline__notch label");

    expect(inputor?.style.getPropertyValue("--color-on-surface-opacity-38")).toBe(
      "color-mix(in srgb, var(--color-on-surface) 38%, transparent)",
    );
    expect(label).toHaveClass("styles__floatingLabel.disabled");
  });

  test("applies the disabled placeholder color token", () => {
    const { container, rerender } = render(<Search placeholder="Search..." />);
    const input = container.querySelector("input");

    expect(input).not.toHaveClass("styles__input.disabled");

    rerender(<Search disabled placeholder="Search..." />);

    expect(input).toHaveClass("styles__input.disabled");
    expect(
      container
        .querySelector<HTMLElement>(".musae-input__inputor")
        ?.style.getPropertyValue("--color-on-surface-opacity-38"),
    ).toBe("color-mix(in srgb, var(--color-on-surface) 38%, transparent)");
  });

  test("does not activate focus-within styles from disabled supporting content", () => {
    const markerClassName = $props(textFieldMarker).className;
    const { container, getByRole } = render(
      <Input disabled trailing={<button type="button">Trailing</button>} />,
    );
    const inputor = container.querySelector(".musae-input__inputor");
    const trailing = getByRole("button", { name: "Trailing" });

    trailing.focus();

    expect(markerClassName).toBeDefined();
    expect(trailing).toHaveFocus();
    expect(inputor).not.toHaveClass(markerClassName!);
  });

  test("does not render search button when searchButton not provided", () => {
    const { container } = render(<Search defaultValue="text" />);
    // Only the clear button should be present (with aria-label)
    const buttons = container.querySelectorAll("button");
    const nonClearButtons = Array.from(buttons).filter(
      (btn) => btn.getAttribute("aria-label") !== "Clear search",
    );
    expect(nonClearButtons.length).toBe(0);
  });

  test("snapshot with all props", () => {
    const { asFragment } = render(
      <Search
        placeholder="Search..."
        defaultValue="hello"
        searchButton="Go"
        onSearch={jest.fn()}
        onChange={jest.fn()}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("snapshot disabled state", () => {
    const { asFragment } = render(<Search disabled placeholder="Search..." />);
    expect(asFragment()).toMatchSnapshot();
  });
});
