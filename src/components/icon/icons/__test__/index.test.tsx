import React, { createElement, type FC } from "react";
import { action, alert, content, hardware, navigation, image, toggle, mock } from "../index";
import { render } from "@testing-library/react";

const Icons = ({ children }: { children: Record<string, FC> }) => {
  return (
    <div>
      {Object.keys(children).map((key) => {
        return createElement(children[key], { key });
      })}
    </div>
  );
};

describe("icons", () => {
  it("action icons render", () => {
    const { asFragment } = render(<Icons>{action}</Icons>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("alert icons render", () => {
    const { asFragment } = render(<Icons>{alert}</Icons>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("content icons render", () => {
    const { asFragment } = render(<Icons>{content}</Icons>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("hardware icons render", () => {
    const { asFragment } = render(<Icons>{hardware}</Icons>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("navigation icons render", () => {
    const { asFragment } = render(<Icons>{navigation}</Icons>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("image icons render", () => {
    const { asFragment } = render(<Icons>{image}</Icons>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("toggle icons render", () => {
    const { asFragment } = render(<Icons>{toggle}</Icons>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("mock icons render", () => {
    const { asFragment } = render(<Icons>{mock}</Icons>);
    expect(asFragment()).toMatchSnapshot();
  });
});
