import { render } from "@testing-library/react";
import { Avatar } from "..";
import React from "react";
import "@testing-library/jest-dom";
import { useImageLoader } from "@aiszlab/relax";

const { Group } = Avatar;

jest.mock("@aiszlab/relax");

describe("`Avatar` Component", () => {
  test("without src", () => {
    const { container } = render(<Avatar />);
    expect(container.querySelector(".musae-avatar")).toBeInTheDocument();
  });

  test("with src", () => {
    const { container } = render(<Avatar src="https://aiszlab.com" />);
    expect(container.querySelector(".musae-avatar")).toBeInTheDocument();
  });

  test("in group", async () => {
    (useImageLoader as ReturnType<typeof jest.fn>).mockReturnValue("loaded");

    const { asFragment } = render(
      <Group>
        <Avatar
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          alt="AA"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          alt="BB"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          alt="CC"
        />
      </Group>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
