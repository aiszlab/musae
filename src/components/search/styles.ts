import { create as $create } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import type { ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const styles = {
  container: $create({
    default: {
      display: "inline-flex",
      alignItems: "center",
      width: sizes.full,
      height: sizes.xxxxlarge,
      borderRadius: sizes.infinity,
      backgroundColor: "var(--color-surface-container-high)" satisfies ThemeColorVariable,
      boxShadow: `0px 0px 0px ${sizes.smallest} var(--color-outline) inset`,
      boxSizing: "border-box",
      paddingBlock: spacing.none,
      paddingInlineStart: spacing.xxxxxsmall,
      paddingInlineEnd: spacing.xxxxxsmall,
      gap: spacing.none,
      transitionProperty: "box-shadow, background-color",
      transitionDuration: duration.short,
      willChange: "box-shadow",

      ":focus-within": {
        boxShadow: `0px 0px 0px ${sizes.xxxxxxxxxxsmall} var(--color-primary) inset`,
      },
    },

    disabled: {
      backgroundColor: "var(--color-on-surface-opacity-08)" satisfies ThemeColorVariable,
      color: "var(--color-on-surface-opacity-38)" satisfies ThemeColorVariable,
      boxShadow: `0px 0px 0px ${sizes.smallest} var(--color-on-surface-opacity-38) inset`,
      cursor: "not-allowed",

      ":focus-within": {
        boxShadow: `0px 0px 0px ${sizes.smallest} var(--color-on-surface-opacity-38) inset`,
      },
    },

    withSearchButton: {
      paddingInlineEnd: null,
    },
  }),

  leading: $create({
    default: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: sizes.xlarge,
      height: sizes.xlarge,
      flexShrink: 0,
      color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
      marginInlineStart: spacing.medium,
    },
  }),

  input: $create({
    default: {
      ":not(#\\#)": {
        fontSize: sizes.xxxxsmall,
        boxShadow: "none",
        borderRadius: sizes.none,
        backgroundColor: "transparent",
      },

      ":focus-within:not(#\\#)": {
        boxShadow: "none",
      },
    },
  }),

  clear: $create({
    default: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: sizes.xlarge,
      height: sizes.xlarge,
      flexShrink: 0,
      borderWidth: sizes.none,
      backgroundColor: "transparent",
      color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
      cursor: "pointer",
      borderRadius: sizes.infinity,
      padding: spacing.none,
      marginInlineEnd: spacing.xxxxxsmall,

      ":hover": {
        "@media (hover: hover)": {
          backgroundColor:
            "var(--color-on-surface-variant-opacity-08)" satisfies ThemeColorVariable,
        },
      },
    },
  }),

  searchButton: $create({
    default: {
      flexShrink: 0,
      marginInlineEnd: spacing.none,
      borderTopLeftRadius: sizes.none,
      borderBottomLeftRadius: sizes.none,
      borderTopRightRadius: sizes.infinity,
      borderBottomRightRadius: sizes.infinity,
    },
  }),
};

export default styles;
