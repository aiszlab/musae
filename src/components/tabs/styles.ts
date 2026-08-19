import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const navigation = {
  navigation: $create({
    default: {
      borderBottomColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
      borderBottomWidth: sizes.smallest,
      borderBottomStyle: "solid",
    },
  }),

  navigator: $create({
    default: {
      position: "relative",
      overflow: "hidden",
    },

    leading: {
      "::before": {
        content: "''",
        position: "absolute",
        insetBlock: 0,
        insetInlineStart: 0,
        pointerEvents: "none",
        width: sizes.medium,
        boxShadow: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      },
    },

    trailing: {
      "::after": {
        content: "''",
        position: "absolute",
        insetBlock: 0,
        insetInlineEnd: 0,
        pointerEvents: "none",
        width: sizes.medium,
        boxShadow: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      },
    },
  }),

  list: $create({
    default: {
      display: "flex",
      width: "fit-content",
      transform: "translateX(calc(var(--offset) * -1))",
      transition: "transform 0.3s ease-in-out",
    },
  }),

  indicator: $create({
    default: {
      backgroundColor: "var(--color-primary)" satisfies ThemeColorVariable,
      position: "absolute",
      bottom: spacing.none,
      borderTopLeftRadius: sizes.xxxxxxxxxxsmall,
      borderTopRightRadius: sizes.xxxxxxxxxxsmall,
    },

    medium: {
      height: sizes.xxxxxxxxxxsmall,
    },

    small: {
      height: sizes.smallest,
    },

    large: {
      height: sizes.xxxxxxxxxsmall,
    },
  }),
};

const panels = {
  panels: $create({
    default: {
      padding: spacing.xxxlarge,
    },
  }),

  panel: $create({
    hidden: {
      display: "none",
    },
  }),
};

const tab = $create({
  button: {
    ":not(#\\#)": {
      borderRadius: 0,
    },
  },
});

const styles = {
  navigation,
  panels,
  tab,
};

export default styles;
