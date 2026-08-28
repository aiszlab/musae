import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { Cascader } from "../../cascader";
import { DatePicker } from "../../date-picker";
import { DateRangePicker } from "../../date-range-picker";
import { Input } from "..";
import { Picker } from "../../picker";
import { Select } from "../../select";
import { Textarea } from "../../textarea";
import { TimePicker } from "../../time-picker";

Promise.try ??= ((callback: () => unknown) =>
  Promise.resolve().then(callback)) as PromiseConstructor["try"];

describe("shared input styles", () => {
  test("renders a consumer-provided Input as the Picker appearance", () => {
    const { container } = render(
      <Picker disabled invalid pickable={<div />}>
        {({ inputProps }) => <Input {...inputProps} readOnly />}
      </Picker>,
    );
    const picker = container.querySelector(".musae-picker");
    const inputor = container.querySelector(".musae-input__inputor");

    expect(picker).not.toHaveClass(
      "styles__root.base",
      "styles__root.invalid",
      "styles__root.disabled",
    );
    expect(picker?.tagName).toBe("DIV");
    expect(inputor).toHaveClass(
      "styles__root.base",
      "styles__root.invalid",
      "styles__root.disabled",
    );
    expect(container.querySelectorAll(".musae-notched-outline")).toHaveLength(1);
  });

  test("connects the consumer Input events to Picker", async () => {
    const onClick = jest.fn();
    const { container } = render(
      <Picker onClick={onClick} pickable={<div />}>
        {({ inputProps }) => <Input {...inputProps} readOnly />}
      </Picker>,
    );
    const input = container.querySelector("input")!;

    fireEvent.click(input);

    expect(onClick).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(document.querySelector(".musae-dropdown")).toHaveStyle({ display: "flex" });
    });

    fireEvent.blur(input);

    await waitFor(() => {
      expect(document.querySelector(".musae-dropdown")).toHaveStyle({ display: "none" });
    });
  });

  test("uses the top-level open action without toggling twice", async () => {
    const { getByRole } = render(
      <Picker pickable={<div />}>
        {({ inputProps, open }) => (
          <Input {...inputProps} readOnly leading={<button onClick={open}>Open</button>} />
        )}
      </Picker>,
    );

    fireEvent.click(getByRole("button", { name: "Open" }));

    await waitFor(() => {
      expect(document.querySelector(".musae-dropdown")).toHaveStyle({ display: "flex" });
    });

    fireEvent.blur(getByRole("textbox"));

    await waitFor(() => {
      expect(document.querySelector(".musae-dropdown")).toHaveStyle({ display: "none" });
    });
  });

  test("uses the top-level toggle action without toggling twice", async () => {
    const { getByRole } = render(
      <Picker pickable={<div />}>
        {({ inputProps, toggle }) => (
          <Input {...inputProps} readOnly leading={<button onClick={toggle}>Toggle</button>} />
        )}
      </Picker>,
    );

    fireEvent.click(getByRole("button", { name: "Toggle" }));

    await waitFor(() => {
      expect(document.querySelector(".musae-dropdown")).toHaveStyle({ display: "flex" });
    });

    fireEvent.blur(getByRole("textbox"));

    await waitFor(() => {
      expect(document.querySelector(".musae-dropdown")).toHaveStyle({ display: "none" });
    });
  });

  test("uses the top-level close action without reopening", async () => {
    const { getByRole } = render(
      <Picker pickable={<div />}>
        {({ close, inputProps }) => (
          <Input {...inputProps} readOnly trailing={<button onClick={close}>Close</button>} />
        )}
      </Picker>,
    );
    const input = getByRole("textbox");

    fireEvent.click(input);

    await waitFor(() => {
      expect(document.querySelector(".musae-dropdown")).toHaveStyle({ display: "flex" });
    });

    fireEvent.click(getByRole("button", { name: "Close" }));

    await waitFor(() => {
      expect(document.querySelector(".musae-dropdown")).toHaveStyle({ display: "none" });
    });
  });

  test("applies root styles to Textarea", () => {
    const { container } = render(<Textarea invalid />);

    expect(container.querySelector(".musae-textarea")).toHaveClass(
      "styles__root.base",
      "styles__root.invalid",
    );
  });

  test("uses one Input appearance for date and time pickers", () => {
    const datePicker = render(<DatePicker />);

    expect(datePicker.container.querySelectorAll(".musae-input__inputor")).toHaveLength(1);
    expect(datePicker.container.querySelector(".musae-picker")).not.toHaveClass(
      "styles__root.base",
    );

    datePicker.unmount();

    const timePicker = render(<TimePicker />);

    expect(timePicker.container.querySelectorAll(".musae-input__inputor")).toHaveLength(1);
    expect(timePicker.container.querySelector(".musae-picker")).not.toHaveClass(
      "styles__root.base",
    );
  });

  test("uses one Input appearance for cascader and date range picker", () => {
    const cascader = render(<Cascader />);

    expect(cascader.container.querySelectorAll(".musae-input__inputor")).toHaveLength(1);

    cascader.unmount();

    const dateRangePicker = render(<DateRangePicker />);

    expect(dateRangePicker.container.querySelectorAll(".musae-input__inputor")).toHaveLength(1);
    expect(dateRangePicker.container.querySelector("input")).toHaveClass(
      "musae-date-range-picker__input",
      "styles__styles.trigger",
    );
    expect(
      dateRangePicker.container.querySelector("span.musae-date-range-picker__input"),
    ).toHaveClass("styles__styles.trigger");
  });

  test("applies disabled placeholder styles to searchable Select", () => {
    const { container } = render(<Select disabled searchable placeholder="Search..." />);

    expect(container.querySelector("input")).toHaveClass(
      "styles__input.base",
      "styles__input.disabled",
    );
  });

  test("uses Input focus and disabled styles for searchable Select", () => {
    const { container, rerender } = render(<Select searchable placeholder="Search..." />);
    const input = container.querySelector("input");
    const inputor = container.querySelector(".musae-input__inputor");

    fireEvent.focus(input!);

    expect(inputor).toHaveClass("musae-input__inputor--focused");

    rerender(<Select disabled searchable placeholder="Search..." />);

    expect(inputor).toHaveClass("styles__root.disabled");
    expect(input).toHaveClass("styles__input.disabled");
  });
});
