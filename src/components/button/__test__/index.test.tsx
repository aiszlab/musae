import { fireEvent, render, getByText } from "@testing-library/react";
import { Button } from "..";
import React from "react";
import "@testing-library/jest-dom";

describe("`Button` Component", () => {
  test("variant render", () => {
    const { asFragment } = render(
      <>
        <Button>filled</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text">text</Button>
      </>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("disabled variant render", () => {
    const { asFragment } = render(
      <>
        <Button disabled>disabled filled</Button>
        <Button disabled variant="outlined">
          disabled outlined
        </Button>
        <Button disabled variant="text">
          disabled text
        </Button>
      </>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("disabled", () => {
    const click = jest.fn();

    const { container: disabledButton } = render(
      <Button disabled onClick={click}>
        disabled
      </Button>,
    );
    const { container: normalButton } = render(<Button onClick={click}>normal</Button>);

    fireEvent.click(getByText(disabledButton, "disabled"));
    expect(click).toHaveBeenCalledTimes(0);
    fireEvent.click(getByText(normalButton, "normal"));
    expect(click).toHaveBeenCalledTimes(1);
  });
});
