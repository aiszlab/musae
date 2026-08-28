import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import React from "react";
import { Select } from "..";

Promise.try ??= ((callback: () => unknown) =>
  Promise.resolve().then(callback)) as PromiseConstructor["try"];

describe("Select", () => {
  test("uses Input as its only visible input appearance", () => {
    const { container } = render(<Select searchable placeholder="Search..." />);

    const picker = container.querySelector(".musae-picker");
    const inputor = container.querySelector(".musae-input__inputor");

    expect(picker).not.toHaveClass("styles__root.base");
    expect(inputor).toBeInTheDocument();
    expect(container.querySelectorAll(".musae-notched-outline")).toHaveLength(1);
  });

  test("renders a read-only Input for a non-searchable selection", () => {
    render(<Select value="one" options={[{ value: "one", label: "One" }]} />);

    expect(screen.getByRole("textbox")).toHaveValue("One");
    expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
  });

  test("renders multiple selections inside Input", () => {
    const { container } = render(
      <Select
        mode="multiple"
        searchable
        value={["one"]}
        options={[{ value: "one", label: "One" }]}
      />,
    );

    const inputor = container.querySelector(".musae-input__inputor");

    expect(inputor).toBeInTheDocument();
    expect(within(inputor as HTMLElement).getByText("One")).toBeInTheDocument();
    expect(within(inputor as HTMLElement).getByRole("textbox")).toBeInTheDocument();
  });

  test("renders the clear action inside Input", () => {
    const { container } = render(<Select onClear={() => undefined} />);
    const inputor = container.querySelector(".musae-input__inputor");

    expect(inputor?.querySelector("svg")).toBeInTheDocument();
    expect(container.querySelector(".musae-picker > svg")).not.toBeInTheDocument();
  });

  test("toggles an open popup closed when the textbox is clicked", async () => {
    render(<Select searchable options={[{ value: "one", label: "One" }]} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "query" } });

    await waitFor(() => {
      expect(document.querySelector(".musae-dropdown")).toHaveStyle({ display: "flex" });
    });

    fireEvent.click(input);

    await waitFor(() => {
      expect(input).toHaveValue("");
    });
  });

  test("searches and closes the popup when Input loses focus", async () => {
    const onSearch = jest.fn();
    const onBlur = jest.fn();
    render(
      <Select
        searchable
        options={[{ value: "one", label: "One" }]}
        onSearch={onSearch}
        onBlur={onBlur}
      />,
    );
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "query" } });

    expect(onSearch).toHaveBeenCalledWith("query");

    await waitFor(() => {
      expect(document.querySelector(".musae-dropdown")).toHaveStyle({ display: "flex" });
    });

    fireEvent.blur(input);

    expect(onBlur).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(input).toHaveValue("");
    });
  });

  test("selects an option through the Input trigger", async () => {
    render(<Select options={[{ value: "one", label: "One" }]} />);
    const input = screen.getByRole("textbox");

    fireEvent.click(input);
    const menuItem = await screen.findByRole("menuitem");
    const dropdown = document.querySelector(".musae-dropdown");

    fireEvent.click(menuItem.querySelector(".musae-menu__item")!);

    expect(input).toHaveValue("One");

    await waitFor(() => {
      expect(dropdown).toHaveStyle({ display: "none" });
    });
  });

  test("removes a multiple selection from Input leading content", async () => {
    const { container } = render(
      <Select mode="multiple" options={[{ value: "one", label: "One" }]} />,
    );
    const input = screen.getByRole("textbox");
    const inputor = container.querySelector(".musae-input__inputor") as HTMLElement;

    fireEvent.click(input);
    fireEvent.click((await screen.findByRole("menuitem")).querySelector(".musae-menu__item")!);

    const tag = within(inputor).getByText("One").closest(".musae-tag");

    fireEvent.click(tag!.querySelector("svg")!);

    expect(within(inputor).queryByText("One")).not.toBeInTheDocument();

    fireEvent.click(input);

    await waitFor(() => {
      expect(document.querySelector(".musae-dropdown")).toHaveStyle({ display: "none" });
    });
  });

  test("clears the selection without reopening the popup", async () => {
    const { container } = render(
      <Select options={[{ value: "one", label: "One" }]} onClear={() => undefined} />,
    );
    const input = screen.getByRole("textbox");
    const inputor = container.querySelector(".musae-input__inputor") as HTMLElement;

    fireEvent.click(input);
    fireEvent.click((await screen.findByRole("menuitem")).querySelector(".musae-menu__item")!);

    const dropdown = document.querySelector(".musae-dropdown");

    await waitFor(() => {
      expect(dropdown).toHaveStyle({ display: "none" });
    });

    fireEvent.click(inputor.querySelector("svg")!);

    expect(input).toHaveValue("");
    expect(dropdown).toHaveStyle({ display: "none" });
  });

  test("suppresses disabled interaction and forwards invalid state to Input", () => {
    const { container } = render(<Select searchable disabled invalid />);
    const input = screen.getByRole("textbox");
    const inputor = container.querySelector(".musae-input__inputor");

    fireEvent.click(input);

    expect(document.querySelector(".musae-dropdown")).not.toBeInTheDocument();
    expect(inputor).toHaveClass("styles__root.disabled", "styles__root.invalid");
  });
});
