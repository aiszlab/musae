import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { PasswordInput } from "..";

describe("PasswordInput click handling", () => {
  test("keeps the visibility action independent from Input onClick", () => {
    const onClick = jest.fn();
    const { container, getByRole } = render(<PasswordInput onClick={onClick} />);
    const input = container.querySelector("input");

    fireEvent.click(getByRole("button"));

    expect(input).toHaveAttribute("type", "text");
    expect(onClick).not.toHaveBeenCalled();
  });
});
