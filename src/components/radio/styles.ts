import { create as $create } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import { ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const radio = $create({
  default: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  disabled: {
    cursor: "not-allowed",
  },
});

const input = $create({
  default: {
    visibility: "hidden",
    height: sizes.xxxxsmall,
    width: sizes.xxxxsmall,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "inherit",

    // reset styles
    margin: spacing.none,

    "::after": {
      content: "''",
      visibility: "visible",
      display: "block",
      height: sizes.full,
      width: sizes.full,
      boxSizing: "border-box",
      borderWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline)" satisfies ThemeColorVariable,
      borderRadius: sizes.infinity,

      willChange: "border-color, border-width",
      transitionProperty: "border-color, border-width",
      transitionDuration: duration.short,
    },
  },

  checked: {
    "::after": {
      borderColor: "var(--color-primary)" satisfies ThemeColorVariable,
      borderWidth: sizes.xxxxxxxxxsmall,
    },
  },

  disabled: {
    "::after": {
      borderWidth: sizes.smallest,
      borderColor: "var(--color-inverse-primary)" satisfies ThemeColorVariable,
    },

    "::before": {
      content: "''",
      position: "absolute",
      visibility: "visible",
      height: sizes.xxxxxxxsmall,
      width: sizes.xxxxxxxsmall,
      backgroundColor: "var(--color-inverse-primary)" satisfies ThemeColorVariable,
      borderRadius: sizes.infinity,
    },
  },

  unckecked: {
    "::before": {
      display: "none",
    },
  },
});

const label = $create({
  default: {
    paddingInline: spacing.xxxsmall,
  },
});

const styles = { radio, input, label };

export default styles;
