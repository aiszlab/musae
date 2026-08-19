import { create as $create } from "@stylexjs/stylex";
import { spacing, sizes } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const list = $create({
  default: {
    // reset ul list
    margin: spacing.none,
    padding: spacing.none,
    listStyleType: "none",
  },

  hidden: {
    display: "none",
  },
});

const node = {
  node: $create({
    default: {
      display: "flex",
      alignItems: "center",
      gap: spacing.xxxxxsmall,

      paddingBlock: spacing.xxsmall,
      paddingLeft: `calc(${spacing.medium} + var(--level) * ${spacing.xxxlarge})`,
    },
  }),

  expander: $create({
    default: {
      width: 24,
      height: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "transform 0.3s",
      userSelect: "none",
    },

    expanded: {
      transform: "rotate(90deg)",
    },
  }),

  title: $create({
    default: {
      paddingInline: spacing.xxxxxsmall,
      borderRadius: sizes.xxxxxxxxxsmall,
      backgroundColor: {
        ":hover": {
          "@media (hover: hover)": "var(--color-surface-container)" satisfies ThemeColorVariable,
        },
      },
      cursor: "default",
    },

    selected: {
      backgroundColor: "var(--color-surface-container)" satisfies ThemeColorVariable,
      color: "var(--color-primary)" satisfies ThemeColorVariable,
    },

    selectable: {
      cursor: "pointer",
    },
  }),
};

const styles = {
  list,
  node,
};

export default styles;
