import { create as $create } from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { duration } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const linear = $create({
  progress: {
    width: sizes.full,
    height: sizes.xxxxxxxxxsmall,
    backgroundColor: "var(--color-primary-container)" satisfies ThemeColorVariable,
    borderRadius: sizes.infinity,
    overflow: "hidden",
  },

  segment: {
    width: "var(--width)",
    height: sizes.full,
    borderRadius: sizes.infinity,
    backgroundColor: "var(--color-primary)" satisfies ThemeColorVariable,
    transitionProperty: "width",
    transitionDuration: duration.medium,
    "@media (prefers-reduced-motion: reduce)": {
      transitionDuration: duration.none,
    },
  },
});

const circular = $create({
  progress: {
    transform: "rotate(-90deg)",
  },

  shape: {
    r: "var(--radius)",
    cx: "24",
    cy: "24",
    strokeWidth: "var(--stroke-width)",
    strokeLinecap: "round",
  },

  segment: {
    strokeDasharray: "var(--segment-perimeter) var(--segment-perimeter)",
    strokeDashoffset: "var(--segment-offset)",
    transitionProperty: "stroke-dashoffset",
    transitionDuration: duration.medium,
    "@media (prefers-reduced-motion: reduce)": {
      transitionDuration: duration.none,
    },
  },
});

const styles = {
  linear,
  circular,
};

export default styles;
