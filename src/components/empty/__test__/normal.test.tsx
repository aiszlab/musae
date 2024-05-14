import { render, screen } from "@testing-library/react";
import Empty from "../empty";
import React from "react";
import "@testing-library/jest-dom";

test("display `Empty` Component", async () => {
  render(<Empty />);
  expect(screen.getByText("暂无数据")).toBeInTheDocument();
});
