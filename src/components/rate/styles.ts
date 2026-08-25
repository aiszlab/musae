import { create as $create } from "@stylexjs/stylex";
import { spacing, duration, sizes } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const rate = $create({
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    // reset rate
    listStyleType: "none",
    margin: spacing.none,
    padding: spacing.none,
  },
});

const star = $create({
  base: {
    position: "relative",
    transitionProperty: "all",
    transitionDuration: duration.short,
    cursor: "pointer",
    color: "var(--color-surface-container-highest)" satisfies ThemeColorVariable,

    ":hover": {
      "@media (hover: hover)": {
        transform: "scale(1.1)",
      },
    },
  },

  disabled: {
    cursor: null,

    ":hover": {
      "@media (hover: hover)": {
        transform: null,
      },
    },
  },
});

const half = $create({
  base: {
    position: "absolute",
    width: sizes.half,
    height: sizes.full,
    insetInlineStart: 0,
    insetBlockStart: 0,
    opacity: 0,
    userSelect: "none",
    overflow: "hidden",
  },

  checked: {
    opacity: 1,
    color: "var(--color-primary)" satisfies ThemeColorVariable,
  },
});

const full = $create({
  base: {
    userSelect: "none",
  },

  checked: {
    color: "var(--color-primary)" satisfies ThemeColorVariable,
  },
});

const styles = {
  rate,
  star,
  half,
  full,
};

export default styles;
