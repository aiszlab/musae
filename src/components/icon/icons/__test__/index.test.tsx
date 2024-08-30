import React, { createElement, type FC } from "react";
import * as icons from "../index";
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
  it("icons render", () => {
    const { asFragment } = render(<Icons>{icons}</Icons>);
    expect(asFragment()).toMatchSnapshot();
  });
});
