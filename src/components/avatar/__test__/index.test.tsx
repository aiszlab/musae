import { render } from "@testing-library/react";
import { Avatar } from "..";
import React from "react";
import "@testing-library/jest-dom";
import * as relax from "@aiszlab/relax";

const { Group } = Avatar;

jest.mock("@aiszlab/relax", () => ({
  __esModule: true,
  ...jest.requireActual("@aiszlab/relax"),
}));

describe("`Avatar` Component", () => {
  test("without src", () => {
    const { container, asFragment } = render(<Avatar />);

    expect(container.querySelector(".musae-avatar")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("with src, load error", () => {
    jest.spyOn(relax, "useImageLoader").mockReturnValue("error");

    const { container, queryByText, asFragment } = render(
      <Avatar src="https://aiszlab.com" alt="RJ" />,
    );

    expect(container.querySelector(".musae-avatar")).toBeInTheDocument();
    expect(queryByText("RJ")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("mock image is loaded", () => {
    jest.spyOn(relax, "useImageLoader").mockReturnValue("loaded");

    const { container, queryByText, asFragment } = render(
      <Avatar src="https://aiszlab.com" alt="RJ" />,
    );

    expect(container.querySelector(".musae-avatar")).toBeInTheDocument();
    expect(queryByText("RJ")).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("`Avatar.Group` Component", () => {
  test("in group", () => {
    const { asFragment } = render(
      <Group>
        <Avatar alt="AA" />
        <Avatar alt="BB" />
        <Avatar alt="CC" />
      </Group>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("in group, but is more than limit", () => {
    const { asFragment } = render(
      <Group max={4}>
        <Avatar alt="AA" />
        <Avatar alt="BB" />
        <Avatar alt="CC" />
        <Avatar alt="DD" />
        <Avatar alt="EE" />
        <Avatar alt="FF" />
      </Group>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
