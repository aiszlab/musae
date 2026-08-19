import { create as $create } from "@stylexjs/stylex";
import { spacing, duration, sizes } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const rate = {
  rate: $create({
    default: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",

      // reset rate
      listStyleType: "none",
      margin: spacing.none,
      padding: spacing.none,
    },
  }),
};

const star = {
  star: $create({
    default: {
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
  }),

  half: $create({
    default: {
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
  }),

  full: $create({
    default: {
      userSelect: "none",
    },

    checked: {
      color: "var(--color-primary)" satisfies ThemeColorVariable,
    },
  }),
};

const styles = {
  rate,
  star,
};

export default styles;
