import React, { createElement, type FC } from "react";
import * as action from "../action";
import * as alert from "../alert";
import * as av from "../av";
import * as communication from "../communication";
import * as content from "../content";
import * as device from "../device";
import * as editor from "../editor";
import * as file from "../file";
import * as hardware from "../hardware";
import * as home from "../home";
import * as image from "../image";
import * as maps from "../maps";
import * as mock from "../mock";
import * as navigation from "../navigation";
import * as notification from "../notification";
import * as places from "../places";
import * as search from "../search";
import * as social from "../social";
import * as toggle from "../toggle";
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

const CATEGORIES: [string, Record<string, FC>][] = [
  ["action", action],
  ["alert", alert],
  ["av", av],
  ["communication", communication],
  ["content", content],
  ["device", device],
  ["editor", editor],
  ["file", file],
  ["hardware", hardware],
  ["home", home],
  ["image", image],
  ["maps", maps],
  ["mock", mock],
  ["navigation", navigation],
  ["notification", notification],
  ["places", places],
  ["search", search],
  ["social", social],
  ["toggle", toggle],
];

describe("icons", () => {
  it("all icons render (snapshot)", () => {
    const allIcons: Record<string, FC> = {};
    for (const [, mod] of CATEGORIES) {
      Object.assign(allIcons, mod);
    }
    const { asFragment } = render(<Icons>{allIcons}</Icons>);
    expect(asFragment()).toMatchSnapshot();
  });

  describe.each(CATEGORIES)("%s", (_name, mod) => {
    const names = Object.keys(mod);
    const count = names.length;

    it(`exports ${count} icons`, () => {
      expect(count).toBeGreaterThan(0);
    });

    it.each(names.slice(0, 20))("%s renders", (name) => {
      const { container } = render(createElement(mod[name]));
      const svg = container.querySelector("svg");
      expect(svg).not.toBeNull();
    });
  });

  it("all icon component names use Icon prefix", () => {
    for (const [category, mod] of CATEGORIES) {
      for (const name of Object.keys(mod)) {
        expect(name).toMatch(/^Icon/);
      }
    }
  });
});
