import { render } from "@testing-library/react";
import Empty from "../empty";
import React from "react";
import "@testing-library/jest-dom";

describe("`Empty` Component", () => {
  test("component render", () => {
    const { container } = render(<Empty />);

    // node render in dom tree
    expect(container.querySelector(".musae-empty")).toBeInTheDocument();
    expect(container.querySelector(".musae-empty__description")).toBeInTheDocument();
  });
});
