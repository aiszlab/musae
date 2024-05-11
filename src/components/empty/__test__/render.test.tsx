import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Empty } from "../index";
import React from "react";

test("`Empty` render", async () => {
  render(<Empty />);

  const empty = screen.getByText("暂无数据");
  expect(empty).toBeNaN();
});
