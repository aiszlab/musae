import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { Popper } from "..";

describe("Popper Dropdown", () => {
  test("uses the surface theme color for its background", () => {
    render(
      <Popper open arrow>
        content
      </Popper>,
    );

    const popper = document.querySelector<HTMLElement>(".musae-popper");

    expect(popper?.style.getPropertyValue("--color-surface")).toBe("#FFFBFE");
    expect(popper?.style.getPropertyValue("--color-surface-container")).toBe("");
  });
});
