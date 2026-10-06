import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { PasswordInput } from "..";

describe("PasswordInput click handling", () => {
  test("hides the native password reveal control", () => {
    const { container } = render(<PasswordInput />);

    expect(container.querySelector("input")).toHaveClass("styles__styles.input");
  });

  test("keeps the visibility action independent from Input onClick", () => {
    const onClick = jest.fn();
    const { container, getByRole } = render(<PasswordInput onClick={onClick} />);
    const input = container.querySelector("input");

    fireEvent.click(getByRole("button"));

    expect(input).toHaveAttribute("type", "text");
    expect(onClick).not.toHaveBeenCalled();
  });
});
