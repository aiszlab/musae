import { create as $create } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const item = $create({
  more: {
    "@media (hover: hover)": {
      ":hover > [role='separator']": {
        display: "none",
      },

      ":not(:hover) > [role='button']": {
        display: "none",
      },
    },

    "@media (hover: none)": {
      ":active > [role='separator']": {
        display: "none",
      },

      ":not(:active) > [role='button']": {
        display: "none",
      },
    },
  },
});

const pagination = $create({
  base: {
    display: "flex",
    alignItems: "center",
    columnGap: spacing.xxsmall,
    listStyleType: "none",
    margin: spacing.none,
    padding: spacing.none,
  },

  sizer: {
    display: "flex",
    alignItems: "center",
  },

  range: {
    color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
    whiteSpace: "nowrap",
  },
});

const styles = {
  item,
  pagination,
};

export default styles;
