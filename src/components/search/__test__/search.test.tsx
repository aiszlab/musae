import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { Search } from "..";
import type { SearchRef } from "../../../types/search";
import React, { createRef } from "react";
import "@testing-library/jest-dom";

describe("`Search` Component", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: jest.fn(() => ({
        matches: false,
        media: "(max-width: 904px)",
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

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

  test("renders the Search Bar with a Search-owned input structure", () => {
    const { container } = render(<Search placeholder="Search" />);
    const inputShell = container.querySelector(".musae-search-input");
    const input = container.querySelector(".musae-search-input__control");

    expect(inputShell).toHaveClass(
      "styles__field.root",
      "styles__field.pill",
      "styles__field.enabled",
    );
    expect(input).toHaveAttribute("placeholder", "Search");
    expect(container.querySelector(".musae-input__inputor")).not.toBeInTheDocument();
    expect(container.querySelector(".musae-input")).not.toBeInTheDocument();
    expect(container.querySelector(".musae-search-leading")).toBeInTheDocument();
  });

  test("clicking the Search Bar container focuses its input and opens Search View", async () => {
    const { container } = render(<Search view="modal" />);
    const input = container.querySelector("input");

    fireEvent.click(container.querySelector(".musae-search-input")!);

    expect(await screen.findByRole("dialog", { name: "Search" })).toBeInTheDocument();
    expect(input).not.toHaveFocus();
    expect(screen.getByRole("combobox")).toHaveFocus();
  });

  test("container clicks focus the Search control instead of an input in a slot", async () => {
    const { container } = render(
      <Search view="modal" leading={<input aria-label="Leading slot input" />} />,
    );
    const leadingInput = screen.getByRole("textbox", { name: "Leading slot input" });

    fireEvent.click(container.querySelector(".musae-search-input")!);

    expect(await screen.findByRole("dialog", { name: "Search" })).toBeInTheDocument();
    expect(leadingInput).not.toHaveFocus();
    expect(screen.getByRole("combobox")).toHaveFocus();
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

  test("omits numeric zero as consumer trailing content", () => {
    const { container } = render(<Search trailing={0} />);

    expect(container.querySelector(".musae-search-trailing")).not.toBeInTheDocument();
  });

  test("renders a non-empty string as consumer trailing content", () => {
    const { container } = render(<Search trailing="Avatar" />);
    const trailing = container.querySelector(".musae-search-trailing");

    expect(trailing).toBeInTheDocument();
    expect(trailing).toHaveTextContent("Avatar");
  });

  test("renders whitespace as consumer trailing content", () => {
    const { container } = render(<Search trailing=" " />);
    const trailing = container.querySelector(".musae-search-trailing");

    expect(trailing).toBeInTheDocument();
    expect(trailing?.textContent).toBe(" ");
  });

  test("omits the trailing slot for a direct empty string", () => {
    const { container } = render(<Search trailing="" />);

    expect(container.querySelector(".musae-search-trailing")).not.toBeInTheDocument();
  });

  test("renders the trailing slot for an array containing only an empty string", () => {
    const { container } = render(<Search trailing={[""]} />);

    expect(container.querySelector(".musae-search-trailing")).toBeInTheDocument();
  });

  test("renders the trailing slot for nested Fragments containing only an empty string", () => {
    const { container } = render(
      <Search
        trailing={
          <>
            <>{""}</>
          </>
        }
      />,
    );

    expect(container.querySelector(".musae-search-trailing")).toBeInTheDocument();
  });

  test("renders the trailing slot for an empty consumer trailing array", () => {
    const { container } = render(<Search trailing={[]} />);

    expect(container.querySelector(".musae-search-trailing")).toBeInTheDocument();
  });

  test("renders the trailing slot for a consumer trailing array containing false", () => {
    const { container } = render(<Search trailing={[false]} />);

    expect(container.querySelector(".musae-search-trailing")).toBeInTheDocument();
  });

  test("renders the trailing slot for an empty consumer trailing Fragment", () => {
    const { container } = render(<Search trailing={<></>} />);

    expect(container.querySelector(".musae-search-trailing")).toBeInTheDocument();
  });

  test("renders the trailing slot for nested consumer trailing Fragments containing false and null", () => {
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

    expect(container.querySelector(".musae-search-trailing")).toBeInTheDocument();
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

    expect(input).not.toHaveClass("styles__fieldInput.disabled");

    rerender(<Search disabled placeholder="Search..." />);

    expect(input).toHaveClass("styles__fieldInput.disabled");
    expect(container.querySelector(".musae-search-input")).not.toHaveClass("styles__field.enabled");
    expect(
      container
        .querySelector<HTMLElement>(".musae-search-input")
        ?.style.getPropertyValue("--color-on-surface-opacity-38"),
    ).toBe("color-mix(in srgb, var(--color-on-surface) 38%, transparent)");
  });

  test("renders the Search View with the same Search-owned input structure", () => {
    render(<Search defaultOpen view="modal" />);
    const dialog = screen.getByRole("dialog", { name: "Search" });

    expect(dialog.querySelector(".musae-search-input")).toHaveClass(
      "styles__field.root",
      "styles__field.pill",
    );
    expect(dialog.querySelector(".musae-search-input__control")).toHaveAttribute(
      "role",
      "combobox",
    );
    expect(dialog.querySelector(".musae-input__inputor")).not.toBeInTheDocument();
    expect(dialog.querySelector(".musae-input")).not.toBeInTheDocument();
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

  test("focus opens modal Search View, transfers focus, and Escape restores the bar", async () => {
    const onOpenChange = jest.fn();
    const { container } = render(<Search view="modal" onOpenChange={onOpenChange} />);
    const barInput = container.querySelector("input")!;

    fireEvent.focus(barInput);
    const dialog = await screen.findByRole("dialog", { name: "Search" });
    const viewInput = within(dialog).getByRole("combobox");
    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(viewInput).toHaveFocus();

    fireEvent.keyDown(viewInput, { key: "Escape" });
    await waitFor(() => expect(dialog).not.toBeInTheDocument());
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
    expect(barInput).toHaveFocus();
  });

  test("renders two-line options and selects the active result with Enter", async () => {
    const onChange = jest.fn();
    const onSelect = jest.fn();
    render(
      <Search
        defaultOpen
        view="modal"
        items={[
          { key: "alpha", value: "Alpha", label: "Alpha", supportingText: "First result" },
          { key: "disabled", value: "Disabled", label: "Disabled", disabled: true },
          { key: "beta", value: "Beta", label: "Beta", supportingText: "Second result" },
        ]}
        onChange={onChange}
        onSelect={onSelect}
      />,
    );
    const input = await screen.findByRole("combobox");
    expect(screen.getByText("First result")).toBeInTheDocument();

    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(onChange).toHaveBeenCalledWith("Beta");
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ key: "beta", value: "Beta" }));
    expect(screen.queryByRole("dialog", { name: "Search" })).not.toBeInTheDocument();
  });

  test("custom item contents retain option semantics and closeOnSelect=false", () => {
    render(
      <Search
        defaultOpen
        view="modal"
        closeOnSelect={false}
        items={[{ key: "one", value: "One", label: "One" }]}
        renderItem={(item) => <strong>Custom {item.label}</strong>}
      />,
    );

    fireEvent.click(screen.getByRole("option", { name: "Custom One" }));

    expect(screen.getByRole("dialog", { name: "Search" })).toBeInTheDocument();
  });

  test("uses stable option ids only for active enabled results", async () => {
    const { rerender } = render(
      <Search
        defaultOpen
        view="modal"
        items={[
          { key: 0, value: "Zero", label: "Zero" },
          { key: "disabled", value: "Disabled", label: "Disabled", disabled: true },
        ]}
      />,
    );
    const input = await screen.findByRole("combobox");
    const disabledOption = screen.getByRole("option", { name: "Disabled" });

    expect(input).not.toHaveAttribute("aria-activedescendant");
    expect(disabledOption).toHaveAttribute("aria-disabled", "true");

    fireEvent.keyDown(input, { key: "ArrowDown" });
    const activeOption = screen.getByRole("option", { name: "Zero" });
    expect(input).toHaveAttribute("aria-activedescendant", activeOption.id);
    expect(activeOption).toHaveAttribute("aria-selected", "true");

    rerender(<Search defaultOpen view="modal" items={[]} />);
    expect(input).not.toHaveAttribute("aria-activedescendant");
  });

  test("disabled results cannot become active or selected", async () => {
    const onSelect = jest.fn();
    render(
      <Search
        defaultOpen
        view="modal"
        items={[{ key: "disabled", value: "Disabled", label: "Disabled", disabled: true }]}
        onSelect={onSelect}
      />,
    );
    const input = await screen.findByRole("combobox");
    const option = screen.getByRole("option", { name: "Disabled" });

    fireEvent.pointerMove(option);
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.click(option);

    expect(input).not.toHaveAttribute("aria-activedescendant");
    expect(onSelect).not.toHaveBeenCalled();
  });

  test("renders an empty listbox when there are no results", async () => {
    render(<Search defaultOpen view="modal" items={[]} />);

    expect(await screen.findByRole("listbox")).toBeInTheDocument();
    expect(screen.queryAllByRole("option")).toHaveLength(0);
  });

  test("clears active descendant when controlled value changes", async () => {
    const items = [{ key: "one", value: "One", label: "One" }];
    const onSearch = jest.fn();
    const onSelect = jest.fn();
    const { rerender } = render(
      <Search
        open
        view="modal"
        value="before"
        items={items}
        onSearch={onSearch}
        onSelect={onSelect}
      />,
    );
    const input = await screen.findByRole("combobox");

    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input).toHaveAttribute("aria-activedescendant");

    rerender(
      <Search
        open
        view="modal"
        value="after"
        items={items}
        onSearch={onSearch}
        onSelect={onSelect}
      />,
    );

    expect(input).not.toHaveAttribute("aria-activedescendant");
    fireEvent.keyDown(input, { key: "Enter" });
    expect(onSearch).toHaveBeenCalledWith("after");
    expect(onSelect).not.toHaveBeenCalled();
  });

  test("clears active descendant when SearchRef.clear is called", async () => {
    const ref = createRef<SearchRef>();
    render(
      <Search
        ref={ref}
        defaultOpen
        view="modal"
        defaultValue="query"
        items={[{ key: "one", value: "One", label: "One" }]}
      />,
    );
    const input = await screen.findByRole("combobox");

    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input).toHaveAttribute("aria-activedescendant");

    act(() => ref.current?.clear());

    expect(input).not.toHaveAttribute("aria-activedescendant");
  });

  test("clears active descendant when Search closes", async () => {
    const onOpenChange = jest.fn();
    const { rerender } = render(
      <Search
        open
        view="modal"
        onOpenChange={onOpenChange}
        items={[{ key: "one", value: "One", label: "One" }]}
      />,
    );
    const input = await screen.findByRole("combobox");

    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input).toHaveAttribute("aria-activedescendant");

    rerender(
      <Search
        open={false}
        view="modal"
        onOpenChange={onOpenChange}
        items={[{ key: "one", value: "One", label: "One" }]}
      />,
    );

    expect(screen.queryByRole("dialog", { name: "Search" })).not.toBeInTheDocument();
  });

  test("clears active descendant when the active result is removed or disabled", async () => {
    const { rerender } = render(
      <Search defaultOpen view="modal" items={[{ key: "one", value: "One", label: "One" }]} />,
    );
    const input = await screen.findByRole("combobox");

    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input).toHaveAttribute("aria-activedescendant");

    rerender(<Search defaultOpen view="modal" items={[]} />);
    expect(input).not.toHaveAttribute("aria-activedescendant");

    rerender(
      <Search defaultOpen view="modal" items={[{ key: "one", value: "One", label: "One" }]} />,
    );
    fireEvent.keyDown(input, { key: "ArrowDown" });
    rerender(
      <Search
        defaultOpen
        view="modal"
        items={[{ key: "one", value: "One", label: "One", disabled: true }]}
      />,
    );
    expect(input).not.toHaveAttribute("aria-activedescendant");
  });

  test("pointer movement does not activate an enabled result and click selects it", async () => {
    const onChange = jest.fn();
    const onSelect = jest.fn();
    render(
      <Search
        defaultOpen
        view="modal"
        items={[{ key: "one", value: "One", label: "One" }]}
        onChange={onChange}
        onSelect={onSelect}
      />,
    );
    const input = await screen.findByRole("combobox");
    const option = screen.getByRole("option", { name: "One" });

    fireEvent.pointerMove(option);
    expect(input).not.toHaveAttribute("aria-activedescendant");
    expect(option).not.toHaveClass("musae-search-result-list__item--active");
    fireEvent.click(option);

    expect(onChange).toHaveBeenCalledWith("One");
    expect(onSelect).toHaveBeenCalledWith({ key: "one", value: "One", label: "One" });
    expect(screen.queryByRole("dialog", { name: "Search" })).not.toBeInTheDocument();
  });

  test("selection with closeOnSelect=false still writes value and fires callbacks", async () => {
    const onChange = jest.fn();
    const onSelect = jest.fn();
    render(
      <Search
        defaultOpen
        view="modal"
        closeOnSelect={false}
        items={[{ key: "one", value: "One", label: "One" }]}
        onChange={onChange}
        onSelect={onSelect}
      />,
    );
    const input = await screen.findByRole("combobox");
    const option = await screen.findByRole("option", { name: "One" });

    fireEvent.pointerMove(option);
    expect(input).not.toHaveAttribute("aria-activedescendant");
    fireEvent.click(option);

    expect(input).toHaveValue("One");
    expect(input).toHaveAttribute("aria-activedescendant", option.id);
    expect(onChange).toHaveBeenCalledWith("One");
    expect(onSelect).toHaveBeenCalledWith({ key: "one", value: "One", label: "One" });
    expect(screen.getByRole("dialog", { name: "Search" })).toBeInTheDocument();
  });

  test("controlled open selection preserves active state until the effective close", async () => {
    const onOpenChange = jest.fn();
    const { rerender } = render(
      <Search
        open
        view="modal"
        defaultValue="query"
        items={[{ key: "one", value: "One", label: "One" }]}
        onOpenChange={onOpenChange}
      />,
    );
    const input = await screen.findByRole("combobox");
    const option = await screen.findByRole("option", { name: "One" });

    fireEvent.pointerMove(option);
    expect(input).not.toHaveAttribute("aria-activedescendant");
    fireEvent.click(option);

    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(screen.getByRole("dialog", { name: "Search" })).toBeInTheDocument();
    expect(input).toHaveAttribute("aria-activedescendant", option.id);

    rerender(
      <Search
        open={false}
        view="modal"
        defaultValue="query"
        items={[{ key: "one", value: "One", label: "One" }]}
        onOpenChange={onOpenChange}
      />,
    );
    expect(screen.queryByRole("dialog", { name: "Search" })).not.toBeInTheDocument();
  });

  test("controlled open Enter selection preserves active state until the effective close", async () => {
    const onOpenChange = jest.fn();
    const items = [{ key: "one", value: "One", label: "One" }];
    const { rerender } = render(
      <Search open view="modal" defaultValue="query" items={items} onOpenChange={onOpenChange} />,
    );
    const input = await screen.findByRole("combobox");
    const option = screen.getByRole("option", { name: "One" });

    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input).toHaveAttribute("aria-activedescendant", option.id);
    fireEvent.keyDown(input, { key: "Enter" });

    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(screen.getByRole("dialog", { name: "Search" })).toBeInTheDocument();
    expect(input).toHaveValue("One");
    expect(input).toHaveAttribute("aria-activedescendant", option.id);

    rerender(
      <Search
        open={false}
        view="modal"
        defaultValue="query"
        items={items}
        onOpenChange={onOpenChange}
      />,
    );
    expect(screen.queryByRole("dialog", { name: "Search" })).not.toBeInTheDocument();
  });

  test("keeps stable unique list and option ids across rerenders, including key zero", async () => {
    const items = [
      { key: 0, value: "Zero", label: "Zero" },
      { key: "0", value: "String zero", label: "String zero" },
    ];
    const { rerender } = render(<Search defaultOpen view="modal" items={items} />);
    const input = await screen.findByRole("combobox");
    const list = screen.getByRole("listbox");
    const initialListId = list.id;
    const initialOptionIds = Array.from(screen.getAllByRole("option"), (option) => option.id);

    expect(new Set(initialOptionIds).size).toBe(initialOptionIds.length);
    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input).toHaveAttribute("aria-activedescendant", initialOptionIds[0]);

    rerender(<Search defaultOpen view="modal" items={items} />);
    expect(screen.getByRole("listbox").id).toBe(initialListId);
    expect(Array.from(screen.getAllByRole("option"), (option) => option.id)).toEqual(
      initialOptionIds,
    );
  });

  test("encodes option ids deterministically by runtime key type, including bigint", async () => {
    const items = [
      { key: 0, value: "Number zero", label: "Number zero" },
      { key: "0", value: "String zero", label: "String zero" },
      { key: 0n, value: "BigInt zero", label: "BigInt zero" },
    ];
    const { rerender } = render(<Search defaultOpen view="modal" items={items} />);
    const initialIds = new Map(
      screen.getAllByRole("option").map((option) => [option.textContent, option.id]),
    );

    expect(initialIds.get("Number zero")).toMatch(/-option-number-30$/);
    expect(initialIds.get("String zero")).toMatch(/-option-string-30$/);
    expect(initialIds.get("BigInt zero")).toMatch(/-option-bigint-30$/);
    expect(new Set(initialIds.values()).size).toBe(3);

    rerender(<Search defaultOpen view="modal" items={[...items].reverse()} />);
    expect(
      new Map(screen.getAllByRole("option").map((option) => [option.textContent, option.id])),
    ).toEqual(initialIds);
  });

  test("uses direct truthiness checks for result item slots", async () => {
    render(
      <Search
        defaultOpen
        view="modal"
        items={[
          {
            key: "slots",
            value: "Slots",
            label: "Slots",
            leading: 0,
            supportingText: 0,
            trailing: 0,
          },
          {
            key: "empty",
            value: "Empty",
            label: "Empty",
            leading: (
              <>
                {false}
                {null}
                <>{""}</>
              </>
            ),
            supportingText: (
              <>
                {false}
                {null}
                <>{""}</>
              </>
            ),
            trailing: (
              <>
                {false}
                {null}
                <>{""}</>
              </>
            ),
          },
        ]}
      />,
    );
    const options = await screen.findAllByRole("option");

    expect(
      options[0].querySelector(".musae-search-result-list__item-leading"),
    ).not.toBeInTheDocument();
    expect(
      options[0].querySelector(".musae-search-result-list__item-supporting-text"),
    ).not.toBeInTheDocument();
    expect(
      options[0].querySelector(".musae-search-result-list__item-trailing"),
    ).not.toBeInTheDocument();
    expect(options[1].querySelector(".musae-search-result-list__item-leading")).toBeInTheDocument();
    expect(
      options[1].querySelector(".musae-search-result-list__item-supporting-text"),
    ).toBeInTheDocument();
    expect(
      options[1].querySelector(".musae-search-result-list__item-trailing"),
    ).toBeInTheDocument();
  });

  test("applies result list typography, ellipsis, active, disabled, and minimum-height contracts", async () => {
    render(
      <Search
        defaultOpen
        view="modal"
        items={[
          { key: "active", value: "Active", label: "Active", supportingText: "Support" },
          { key: "disabled", value: "Disabled", label: "Disabled", disabled: true },
        ]}
      />,
    );
    const input = await screen.findByRole("combobox");
    const list = screen.getByRole("listbox");
    const [active, disabled] = screen.getAllByRole("option");

    expect(list).toHaveClass("styles__resultList.root");
    expect(active.querySelector(".musae-search-result-list__item-label")).toHaveClass(
      "theme__body.large",
    );
    expect(active.querySelector(".musae-search-result-list__item-supporting-text")).toHaveClass(
      "theme__body.medium",
    );
    expect(active.querySelector(".musae-search-result-list__item-supporting-text")).toHaveClass(
      "styles__resultList.supportingText",
    );
    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(active).toHaveClass(
      "styles__resultList.activeItem",
      "musae-search-result-list__item--active",
    );
    expect(disabled).toHaveClass(
      "styles__resultList.disabledItem",
      "musae-search-result-list__item--disabled",
    );
  });

  test("Escape closes Search without reaching an outer React handler while Enter still bubbles", async () => {
    const outerKeys: string[] = [];
    const onOpenChange = jest.fn();
    const onSearch = jest.fn();
    render(
      <div onKeyDown={(event) => outerKeys.push(event.key)}>
        <Search
          defaultOpen
          defaultValue="query"
          view="modal"
          onOpenChange={onOpenChange}
          onSearch={onSearch}
        />
      </div>,
    );
    const dialog = screen.getByRole("dialog", { name: "Search" });
    const viewInput = within(dialog).getByRole("combobox");

    fireEvent.keyDown(viewInput, { key: "Enter" });
    expect(onSearch).toHaveBeenCalledWith("query");
    expect(outerKeys).toEqual(["Enter"]);

    outerKeys.length = 0;
    expect(fireEvent.keyDown(viewInput, { key: "Escape" })).toBe(false);

    await waitFor(() => expect(dialog).not.toBeInTheDocument());
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
    expect(outerKeys).toEqual([]);
  });

  test("restored bar focus can imperatively reopen Search exactly once", async () => {
    const ref = createRef<SearchRef>();
    const onOpenChange = jest.fn();
    const { container } = render(<Search ref={ref} view="modal" onOpenChange={onOpenChange} />);
    const barInput = container.querySelector("input")!;

    act(() => ref.current?.focus());
    const dialog = await screen.findByRole("dialog", { name: "Search" });
    fireEvent.keyDown(within(dialog).getByRole("combobox"), { key: "Escape" });
    await waitFor(() => expect(dialog).not.toBeInTheDocument());
    expect(barInput).toHaveFocus();

    act(() => barInput.blur());
    onOpenChange.mockClear();
    act(() => ref.current?.focus());

    expect(await screen.findByRole("dialog", { name: "Search" })).toBeInTheDocument();
    expect(onOpenChange).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  test("controlled open close requests preserve active state until rerendered closed", () => {
    const onOpenChange = jest.fn();
    const { container, rerender } = render(
      <Search
        open
        view="modal"
        items={[{ key: "one", value: "One", label: "One" }]}
        onOpenChange={onOpenChange}
      />,
    );
    const barInput = container.querySelector("input")!;
    const dialog = screen.getByRole("dialog", { name: "Search" });
    const viewInput = within(dialog).getByRole("combobox");
    const option = screen.getByRole("option", { name: "One" });

    fireEvent.keyDown(viewInput, { key: "ArrowDown" });
    expect(viewInput).toHaveAttribute("aria-activedescendant", option.id);
    fireEvent.click(screen.getByTestId("search-view-overlay"));

    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(dialog).toBeInTheDocument();
    expect(viewInput).toHaveAttribute("aria-activedescendant", option.id);
    expect(viewInput).toHaveFocus();
    expect(barInput).not.toHaveFocus();

    rerender(
      <Search
        open={false}
        view="modal"
        items={[{ key: "one", value: "One", label: "One" }]}
        onOpenChange={onOpenChange}
      />,
    );
    expect(screen.queryByRole("dialog", { name: "Search" })).not.toBeInTheDocument();
    expect(barInput).toHaveFocus();
  });

  test("does not restore active state after closing and reopening", async () => {
    const items = [{ key: "one", value: "One", label: "One" }];
    const { rerender } = render(<Search open view="modal" items={items} />);
    const input = await screen.findByRole("combobox");

    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input).toHaveAttribute("aria-activedescendant");

    rerender(<Search open={false} view="modal" items={items} />);
    rerender(<Search open view="modal" items={items} />);

    expect(screen.getByRole("combobox")).not.toHaveAttribute("aria-activedescendant");
  });

  test("does not restore active state after disabling and reenabling", async () => {
    const items = [{ key: "one", value: "One", label: "One" }];
    const { rerender } = render(<Search open view="modal" items={items} />);
    const input = await screen.findByRole("combobox");

    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input).toHaveAttribute("aria-activedescendant");

    rerender(<Search open disabled view="modal" items={items} />);
    rerender(<Search open view="modal" items={items} />);

    expect(input).not.toHaveAttribute("aria-activedescendant");
  });

  test("does not restore active state when a removed key is re-added", async () => {
    const items = [{ key: "one", value: "One", label: "One" }];
    const { rerender } = render(<Search defaultOpen view="modal" items={items} />);
    const input = await screen.findByRole("combobox");

    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input).toHaveAttribute("aria-activedescendant");

    rerender(<Search defaultOpen view="modal" items={[]} />);
    rerender(<Search defaultOpen view="modal" items={items} />);

    expect(input).not.toHaveAttribute("aria-activedescendant");
  });

  test("explicit full-screen view has no dismissing overlay", () => {
    render(<Search defaultOpen view="full-screen" />);

    expect(screen.getByRole("dialog", { name: "Search" })).toHaveClass("styles__view.fullScreen");
    expect(screen.queryByTestId("search-view-overlay")).not.toBeInTheDocument();
  });

  test("imperative focus targets the visible input and disabled Search cannot open", async () => {
    const ref = createRef<SearchRef>();
    const onOpenChange = jest.fn();
    const onChange = jest.fn();
    const { container, rerender } = render(
      <Search
        ref={ref}
        defaultValue="query"
        view="modal"
        onChange={onChange}
        onOpenChange={onOpenChange}
      />,
    );

    act(() => ref.current?.focus());
    const dialog = await screen.findByRole("dialog", { name: "Search" });
    expect(dialog.querySelector("input")).toHaveFocus();

    act(() => ref.current?.blur());
    expect(dialog.querySelector("input")).not.toHaveFocus();

    act(() => ref.current?.focus());
    expect(dialog.querySelector("input")).toHaveFocus();

    act(() => ref.current?.clear());
    expect(onChange).toHaveBeenCalledWith("");
    expect(ref.current?.getValue()).toBe("");

    rerender(<Search ref={ref} disabled view="modal" onOpenChange={onOpenChange} />);
    fireEvent.focus(container.querySelector("input")!);
    await waitFor(() =>
      expect(screen.queryByRole("dialog", { name: "Search" })).not.toBeInTheDocument(),
    );
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  test("disabling a controlled open Search preserves its effective open state", () => {
    const onOpenChange = jest.fn();
    const { rerender } = render(<Search open view="modal" onOpenChange={onOpenChange} />);

    onOpenChange.mockClear();
    rerender(<Search open disabled view="modal" onOpenChange={onOpenChange} />);

    expect(screen.getByRole("dialog", { name: "Search" })).toBeInTheDocument();
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  test("the modal panel and back button have isolated dismissal behavior", () => {
    const onOpenChange = jest.fn();
    render(<Search defaultOpen view="modal" onOpenChange={onOpenChange} />);
    const dialog = screen.getByRole("dialog", { name: "Search" });

    fireEvent.click(dialog);
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(dialog).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Close search" }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(screen.queryByRole("dialog", { name: "Search" })).not.toBeInTheDocument();
  });

  test("auto view changes layout without losing value or focus", async () => {
    let matches = false;
    const listeners = new Set<() => void>();
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: jest.fn(() => ({
        matches,
        media: "(max-width: 904px)",
        onchange: null,
        addEventListener: (_type: string, listener: () => void) => listeners.add(listener),
        removeEventListener: (_type: string, listener: () => void) => listeners.delete(listener),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    render(<Search defaultOpen defaultValue="query" view="auto" />);
    const input = await screen.findByRole("combobox");
    expect(screen.getByRole("dialog", { name: "Search" })).toHaveClass("styles__view.modal");

    act(() => {
      matches = true;
      listeners.forEach((listener) => listener());
    });
    expect(screen.getByRole("dialog", { name: "Search" })).toHaveClass("styles__view.fullScreen");
    expect(input).toHaveValue("query");
    expect(input).toHaveFocus();
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
