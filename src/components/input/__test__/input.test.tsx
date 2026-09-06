import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
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

describe("invalid state", () => {
  test("applies the error color to outline segments without a label", () => {
    const { container } = render(<Input invalid />);
    const inputor = container.querySelector(".musae-input__inputor")!;

    expect(inputor).not.toHaveClass("styles__root.invalid");
    expect(inputor.querySelector(".musae-notched-outline__leading")).toHaveClass(
      "styles__outlineLeading.invalid",
    );
    expect(inputor.querySelector(".musae-notched-outline__notch")).toHaveClass(
      "styles__outlineNotch.invalid",
    );
    expect(inputor.querySelector(".musae-notched-outline__trailing")).toHaveClass(
      "styles__outlineTrailing.invalid",
    );
  });

  test("applies the error color to outline segments and label when labeled", () => {
    const { container } = render(<Input invalid label="Email" placeholder="name@example.com" />);
    const inputor = container.querySelector(".musae-input__inputor")!;

    expect(inputor).not.toHaveClass("styles__root.invalid");
    expect(inputor.querySelector(".musae-notched-outline__leading")).toHaveClass(
      "styles__outlineLeading.invalid",
    );
    expect(inputor.querySelector(".musae-notched-outline__notch")).toHaveClass(
      "styles__outlineNotch.invalid",
      "styles__outlineNotch.withLabelAndPlaceholder",
    );
    expect(inputor.querySelector(".musae-notched-outline__trailing")).toHaveClass(
      "styles__outlineTrailing.invalid",
    );
    expect(inputor.querySelector("label")).toHaveClass("styles__floatingLabel.invalid");
  });
});

describe("click handling", () => {
  test("invokes onClick when the input is clicked", () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Input onClick={onClick} />);

    fireEvent.click(getByRole("textbox"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("does not invoke onClick when the input shell is clicked", () => {
    const onClick = jest.fn();
    const { container } = render(<Input onClick={onClick} />);

    fireEvent.click(container.querySelector(".musae-input__inputor")!);

    expect(onClick).not.toHaveBeenCalled();
  });

  test("does not invoke onClick when a passive adornment is clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Input leading={<span>Leading</span>} onClick={onClick} />);

    fireEvent.click(getByText("Leading"));

    expect(onClick).not.toHaveBeenCalled();
  });

  test("does not invoke onClick for a passive adornment inside an interactive ancestor", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <div role="button">
        <Input leading={<span>Leading</span>} onClick={onClick} />
      </div>,
    );

    fireEvent.click(getByText("Leading"));

    expect(onClick).not.toHaveBeenCalled();
  });

  test("stops input clicks from reaching an ancestor without onClick", () => {
    const onAncestorClick = jest.fn();
    const { getByRole } = render(
      <div onClick={onAncestorClick}>
        <Input />
      </div>,
    );

    fireEvent.click(getByRole("textbox"));

    expect(onAncestorClick).not.toHaveBeenCalled();
  });
});
