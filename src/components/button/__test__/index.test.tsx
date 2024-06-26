import { fireEvent, render, getByText } from "@testing-library/react";
import Button from "../button";
import React from "react";
import "@testing-library/jest-dom";

describe("`Avatar` Component", () => {
  test("snapshot", () => {
    const { asFragment } = render(<Button>button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("disabled", () => {
    const click = jest.fn();

    const { container: disabledButton } = render(
      <Button disabled onClick={click}>
        disabled
      </Button>
    );
    const { container: normalButton } = render(<Button onClick={click}>normal</Button>);

    fireEvent.click(getByText(disabledButton, "disabled"));
    expect(click).toHaveBeenCalledTimes(0);
    fireEvent.click(getByText(normalButton, "normal"));
    expect(click).toHaveBeenCalledTimes(1);
  });
});
