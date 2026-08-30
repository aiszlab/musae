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

  test("composes the Search Bar from a filled pill Input without a notched outline", () => {
    const { container } = render(<Search placeholder="Search" />);
    const inputShell = container.querySelector(".musae-input__inputor");

    expect(inputShell).toHaveClass("styles__root.filled", "styles__root.pill");
    expect(container.querySelector(".musae-notched-outline")).not.toBeInTheDocument();
    expect(container.querySelector(".musae-search-leading")).toBeInTheDocument();
  });

  test("renders consumer leading and trailing slots while preserving the clear action", () => {
    const { getByText, getByRole } = render(
      <Search defaultValue="query" leading={<span>Menu</span>} trailing={<span>Avatar</span>} />,
    );

    expect(getByText("Menu")).toBeInTheDocument();
    expect(getByText("Avatar")).toBeInTheDocument();
    expect(getByRole("button", { name: "Clear search" })).toBeInTheDocument();
  });

  test("omits the trailing slot without Search actions or consumer trailing content", () => {
    const { container } = render(<Search />);

    expect(container.querySelector(".musae-search-trailing")).not.toBeInTheDocument();
  });

  test("renders numeric zero as consumer trailing content", () => {
    const { container } = render(<Search trailing={0} />);
    const trailing = container.querySelector(".musae-search-trailing");

    expect(trailing).toBeInTheDocument();
    expect(trailing).toHaveTextContent("0");
  });

  test("omits the trailing slot for an empty consumer trailing array", () => {
    const { container } = render(<Search trailing={[]} />);

    expect(container.querySelector(".musae-search-trailing")).not.toBeInTheDocument();
  });

  test("omits the trailing slot for a consumer trailing array containing false", () => {
    const { container } = render(<Search trailing={[false]} />);

    expect(container.querySelector(".musae-search-trailing")).not.toBeInTheDocument();
  });

  test("omits the trailing slot for an empty consumer trailing Fragment", () => {
    const { container } = render(<Search trailing={<></>} />);

    expect(container.querySelector(".musae-search-trailing")).not.toBeInTheDocument();
  });

  test("omits the trailing slot for nested consumer trailing Fragments containing false and null", () => {
    const { container } = render(
      <Search
        trailing={
          <>
            <>
              {false}
              {null}
            </>
          </>
        }
      />,
    );

    expect(container.querySelector(".musae-search-trailing")).not.toBeInTheDocument();
  });

  test("renders numeric zero from nested consumer trailing Fragments", () => {
    const { container } = render(
      <Search
        trailing={
          <>
            <>{0}</>
          </>
        }
      />,
    );
    const trailing = container.querySelector(".musae-search-trailing");

    expect(trailing).toBeInTheDocument();
    expect(trailing).toHaveTextContent("0");
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

  test("clearing does not focus the Search input", () => {
    const onClear = jest.fn();
    const { container, getByRole } = render(
      <>
        <button type="button">Outside</button>
        <Search defaultValue="text" onClear={onClear} />
      </>,
    );
    const outside = getByRole("button", { name: "Outside" });
    const input = container.querySelector("input");

    outside.focus();
    fireEvent.click(getByRole("button", { name: "Clear search" }));

    expect(onClear).toHaveBeenCalledTimes(1);
    expect(outside).toHaveFocus();
    expect(input).not.toHaveFocus();
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

  test("search button does not focus the Search input", () => {
    const onSearch = jest.fn();
    const { container, getByRole } = render(
      <>
        <button type="button">Outside</button>
        <Search searchButton="Search" onSearch={onSearch} defaultValue="keyword" />
      </>,
    );
    const outside = getByRole("button", { name: "Outside" });
    const input = container.querySelector("input");

    outside.focus();
    fireEvent.click(getByRole("button", { name: "Search" }));

    expect(onSearch).toHaveBeenCalledWith("keyword");
    expect(outside).toHaveFocus();
    expect(input).not.toHaveFocus();
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
