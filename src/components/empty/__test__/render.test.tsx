import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Empty from "../empty";
import React from "react";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Empty />);

  // ACT
  await userEvent.click(screen.getByText("Load Greeting"));
  await screen.findByRole("heading");

  // ASSERT
  expect(screen.getByRole("heading")).toHaveProperty("classname");
  //   expect(screen.getByRole("button")).toBeDisabled();
});
