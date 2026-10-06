import { render } from "@testing-library/react";
import React from "react";
import Item from "../item";

describe("Pagination more items", () => {
  test.each(["more-prev", "more-next"] as const)("renders the double arrow for %s", (value) => {
    const { container } = render(
      <Item
        value={value}
        add={() => {}}
        subtract={() => {}}
        onClick={() => {}}
        checked={false}
        hasPrev
        hasNext
      />,
    );

    expect(container.querySelectorAll("svg")).toHaveLength(2);
  });
});
