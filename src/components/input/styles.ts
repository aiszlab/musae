import { create as $create } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import { ThemeColorVariable } from "../../hooks/use-theme-color-vars";

export const input_styles = $create({
  inputor: {
    display: "inline-flex",
    alignItems: "center",
    cursor: "text",
    borderRadius: sizes.xxxxxxxxxsmall,
    verticalAlign: "bottom",
    outline: sizes.none,

    minHeight: sizes.medium,
    minWidth: sizes.none,
    width: sizes.full,

    // border, for flexible, in musae, we use boxShadow replace border
    // box shadow is not added into layout
    boxShadow: `0px 0px 0px ${sizes.smallest} var(--color-outline) inset`,

    // reset input_styles
    boxSizing: "border-box",

    // layout
    margin: spacing.none,
    paddingBlock: spacing.xxxxxsmall,
    paddingInline: spacing.medium,

    // animation
    transitionProperty: "box-shadow",
    transitionDuration: duration.short,
    // fix: eliminate serrations, use gpu speed up by add `transform`
    willChange: "box-shadow, transform",

    ":focus-within": {
      boxShadow: `0px 0px 0px ${sizes.xxxxxxxxxxsmall} var(--color-primary) inset`,
    },
  },

  invalid: {
    boxShadow: `0px 0px 0px ${sizes.xxxxxxxxxxsmall} var(--color-error) inset`,

    ":focus-within": {
      boxShadow: null,
    },
  },

  input: {
    // reset input_styles
    lineHeight: "inherit",
    fontSize: "inherit",
    padding: spacing.none,
    borderWidth: sizes.none,
    backgroundColor: "transparent",
    outline: sizes.none,
    minWidth: sizes.none,
    height: sizes.auto,
    flex: 1,
  },

  disabled: {
    backgroundColor: "var(--color-on-surface-opacity-08)" satisfies ThemeColorVariable,
    color: "var(--color-on-surface-opacity-38)" satisfies ThemeColorVariable,
    boxShadow: `0px 0px 0px ${sizes.smallest} var(--color-on-surface-opacity-38) inset`,
  },
});

export default input_styles;
