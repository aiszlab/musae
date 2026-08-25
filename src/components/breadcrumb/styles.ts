import { create as $create } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import { ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const navigation = $create({
  base: {
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
});

const anchor = $create({
  base: {
    textDecoration: "none",
    color: "inherit",
  },
});

const separator = $create({
  base: {
    marginInline: spacing.xxsmall,
  },
});

const breadcrumb = $create({
  base: {
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
  navigation,
  anchor,
  separator,
  breadcrumb,
};

export default styles;
