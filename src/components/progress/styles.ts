import { create as $create } from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const linear = $create({
  progress: {
    width: sizes.full,
    height: sizes.xxxxxxxxxsmall,
    backgroundColor: "var(--color-primary-container)" satisfies ThemeColorVariable,
    borderRadius: sizes.infinity,
  },

  segment: {
    width: "var(--width)",
    height: sizes.full,
    borderRadius: sizes.infinity,
    backgroundColor: "var(--color-primary)" satisfies ThemeColorVariable,
  },
});

const circular = $create({
  progress: {
    transform: "rotate(-90deg)",
  },

  shape: {
    r: "var(--radius)",
    cx: `calc(var(--radius) + (${sizes.xxxxxxxxxsmall} / 2))`,
    cy: `calc(var(--radius) + (${sizes.xxxxxxxxxsmall} / 2))`,
    strokeWidth: sizes.xxxxxxxxxsmall,
    strokeLinecap: "round",
  },

  segment: {
    strokeDasharray: "var(--segment-perimeter) var(--segment-perimeter)",
    strokeDashoffset: "var(--segment-offset)",
  },
});

const styles = {
  linear,
  circular,
};

export default styles;
