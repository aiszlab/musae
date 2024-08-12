import { render } from "@testing-library/react";
import { Breadcrumb } from "..";
import React from "react";
import "@testing-library/jest-dom";

describe("`Breadcrumb` Component", () => {
  test("empty items", () => {
    const { container, asFragment } = render(<Breadcrumb />);

    expect(container.hasChildNodes()).toBeFalsy();
    expect(asFragment()).toMatchSnapshot();
  });

  test("display items", () => {
    const { container, asFragment } = render(
      <Breadcrumb
        items={[
          { label: "label1" },
          { label: "link2", href: "https://aiszlab.dev" },
          { label: "label3" },
        ]}
      />,
    );

    expect(container.hasChildNodes()).toBeTruthy();
    expect(container.querySelectorAll(".musae-breadcrumb__item").length).toBe(3);
    expect(container.querySelectorAll(".musae-breadcrumb__separator").length).toBe(2);
    expect(asFragment()).toMatchSnapshot();
  });

  test("customize separator", () => {
    const { getAllByRole, asFragment } = render(
      <Breadcrumb
        items={[
          { label: "label1" },
          { label: "link2", href: "https://aiszlab.dev" },
          { label: "label3" },
        ]}
        separator="-"
      />,
    );

    expect(getAllByRole("separator").filter((item) => item.innerHTML === "-").length).toBe(2);
    expect(asFragment()).toMatchSnapshot();
  });
});
