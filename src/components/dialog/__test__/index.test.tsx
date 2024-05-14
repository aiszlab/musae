import { render } from "@testing-library/react";
import Dialog from "../dialog";
import React from "react";
import "@testing-library/jest-dom";

describe("`Dialog` Component", () => {
  test("component render", () => {
    render(<Dialog open />);

    // node render in screen
    expect(document.body.querySelector(".musae-dialog")).toBeInTheDocument();
  });
});
