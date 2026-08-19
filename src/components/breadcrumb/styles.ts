import { create as $create } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import { ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const item = {
  navigation: $create({
    default: {
      ":last-of-type": {
        color: "var(--color-on-surface)",
      },
    },

    link: {
      paddingInline: spacing.xxxxxsmall,
      borderRadius: sizes.xxxxxxxxxsmall,
      backgroundColor: {
        default: null,
        ":hover": {
          "@media (hover: hover)": "var(--color-surface)" satisfies ThemeColorVariable,
        },
      },
      color: {
        default: null,
        ":hover": {
          "@media (hover: hover)": "var(--color-on-surface)" satisfies ThemeColorVariable,
        },
      },
      transitionProperty: "all",
      transitionDuration: duration.short,
    },
  }),

  anchor: $create({
    default: {
      textDecoration: "none",
      color: "inherit",
    },
  }),

  separator: $create({
    default: {
      marginInline: spacing.xxsmall,
    },
  }),
};

const breadcrumb = $create({
  default: {
    color: "var(--color-on-surface-variant)",
  },

  navigations: {
    margin: spacing.none,
    padding: spacing.none,
    listStyleType: "none",
    display: "flex",
    flexWrap: "wrap",
  },
});

const styles = {
  item,
  breadcrumb,
};

export default styles;
