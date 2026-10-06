import "@testing-library/jest-dom";
import { render, within } from "@testing-library/react";
import React from "react";
import { Popper } from "..";

describe("Popper Dropdown", () => {
  test("uses the surface theme color for its background", () => {
    render(
      <Popper open arrow>
        <span>content</span>
      </Popper>,
    );

    const popper = document.querySelector<HTMLElement>(".musae-popper");

    expect(popper?.style.getPropertyValue("--color-surface")).toBe("#FFFBFE");
    expect(popper?.style.getPropertyValue("--color-surface-container")).toBe("");
  });

  test("keeps the arrow and content inside the dropdown hit area", () => {
    render(
      <Popper open arrow>
        <span>content</span>
      </Popper>,
    );

    const dropdown = document.querySelector<HTMLElement>(".musae-dropdown");
    const content = within(dropdown as HTMLElement).getByText("content");
    const arrow = dropdown?.querySelector(".musae-arrow");
    expect(dropdown).toContainElement(content);
    expect(arrow?.parentElement).toBe(dropdown);
  });
});
