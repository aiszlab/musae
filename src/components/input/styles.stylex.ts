import { create as $create, when as $when, defineMarker } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import { ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const textFieldMarker = defineMarker();

const root = $create({
  base: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    cursor: "text",
    borderRadius: sizes.xxxxxxxxxsmall,
    verticalAlign: "bottom",
    outline: sizes.none,

    height: sizes.xxxxlarge,
    minWidth: sizes.none,
    width: sizes.full,

    // reset input_styles
    boxSizing: "border-box",

    // layout
    margin: spacing.none,
    paddingBlock: spacing.xxxxxsmall,
    paddingInline: spacing.none,
  },

  invalid: {
    boxShadow: `0px 0px 0px ${sizes.xxxxxxxxxxsmall} var(--color-error) inset`,

    ":focus-within": {
      boxShadow: null,
    },
  },

  disabled: {
    color: "var(--color-on-surface-opacity-38)" satisfies ThemeColorVariable,
  },
});

const input = $create({
  base: {
    // reset input_styles
    lineHeight: "inherit",
    fontSize: "inherit",
    paddingBlock: spacing.none,
    paddingInline: spacing.large,
    borderWidth: sizes.none,
    backgroundColor: "transparent",
    outline: sizes.none,
    minWidth: sizes.none,
    height: sizes.auto,
    flex: 1,
  },

  hasLeading: {
    paddingInlineStart: spacing.xxxxxxxxlarge,
  },

  hasTrailing: {
    paddingInlineEnd: spacing.xxxxxxxxlarge,
  },

  disabled: {
    "::placeholder": {
      color: "var(--color-on-surface-opacity-38)" satisfies ThemeColorVariable,
    },
  },
});

const leading = $create({
  base: {
    position: "absolute",
    insetBlock: spacing.none,
    insetInlineStart: spacing.large,
    display: "inline-flex",
    alignItems: "center",
  },
});

const trailing = $create({
  base: {
    position: "absolute",
    insetBlock: spacing.none,
    insetInlineEnd: spacing.large,
    display: "inline-flex",
    alignItems: "center",
  },
});

const outline = $create({
  base: {
    position: "absolute",
    inset: sizes.none,
    display: "inline-flex",
    pointerEvents: "none",
  },
});

const outlineLeading = $create({
  base: {
    boxSizing: "border-box",
    width: sizes.xxxxxsmall,

    // animation
    transitionProperty: "border",
    transitionDuration: duration.short,
    willChange: "border",

    borderStyle: "solid",
    borderColor: "var(--color-outline)" satisfies ThemeColorVariable,

    borderInlineStartWidth: sizes.smallest,
    borderInlineEndWidth: sizes.none,
    borderBlockWidth: sizes.smallest,

    borderStartStartRadius: sizes.xxxxxxxxxsmall,
    borderEndStartRadius: sizes.xxxxxxxxxsmall,

    [$when.ancestor(":focus-within", textFieldMarker)]: {
      borderInlineStartWidth: sizes.xxxxxxxxxxsmall,
      borderBlockWidth: sizes.xxxxxxxxxxsmall,
      borderColor: "var(--color-primary)" satisfies ThemeColorVariable,
    },
  },

  disabled: {
    borderColor: "var(--color-on-surface-opacity-12)" satisfies ThemeColorVariable,
  },
});

const outlineTrailing = $create({
  base: {
    boxSizing: "border-box",
    flex: 1,

    // animation
    transitionProperty: "border",
    transitionDuration: duration.short,
    willChange: "border",

    borderStyle: "solid",
    borderColor: "var(--color-outline)" satisfies ThemeColorVariable,

    borderInlineStartWidth: sizes.none,
    borderInlineEndWidth: sizes.smallest,
    borderBlockWidth: sizes.smallest,

    borderStartEndRadius: sizes.xxxxxxxxxsmall,
    borderEndEndRadius: sizes.xxxxxxxxxsmall,

    [$when.ancestor(":focus-within", textFieldMarker)]: {
      borderInlineEndWidth: sizes.xxxxxxxxxxsmall,
      borderBlockWidth: sizes.xxxxxxxxxxsmall,
      borderColor: "var(--color-primary)" satisfies ThemeColorVariable,
    },
  },

  disabled: {
    borderColor: "var(--color-on-surface-opacity-12)" satisfies ThemeColorVariable,
  },
});

const outlineNotch = $create({
  base: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    paddingInline: spacing.xxxxxsmall,
    color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,

    // animation
    transitionProperty: "border",
    transitionDuration: duration.short,
    willChange: "border",

    borderStyle: "solid",
    borderColor: "var(--color-outline)" satisfies ThemeColorVariable,

    borderInlineWidth: sizes.none,
    borderBlockWidth: sizes.smallest,

    [$when.ancestor(":focus-within", textFieldMarker)]: {
      borderBlockWidth: sizes.xxxxxxxxxxsmall,
      borderColor: "var(--color-primary)" satisfies ThemeColorVariable,
    },
  },

  labeled: {
    [$when.ancestor(":focus-within", textFieldMarker)]: {
      borderBlockStartWidth: sizes.smallest,
      borderBlockStartColor: "transparent",
    },
  },

  labeledAndHasPlaceholder: {
    borderBlockStartColor: "transparent",
  },

  disabled: {
    borderColor: "var(--color-on-surface-opacity-12)" satisfies ThemeColorVariable,
  },
});

const floatingLabel = $create({
  base: {
    position: "relative",
    top: sizes.none,
    transform: "scale(calc(4 / 3))",
    transformOrigin: "left center",

    // animation
    transitionProperty: "color, top, transform",
    transitionDuration: duration.short,
    willChange: "color, top, transform",

    [$when.ancestor(":focus-within", textFieldMarker)]: {
      color: "var(--color-primary)" satisfies ThemeColorVariable,
      top: "-50%",
      transform: "scale(1)",
    },
  },

  placeholder: {
    top: "-50%",
    transform: "scale(1)",
  },

  disabled: {
    color: "var(--color-on-surface-opacity-38)" satisfies ThemeColorVariable,
  },
});

const styles = {
  root,
  input,
  leading,
  trailing,
  outline,
  outlineLeading,
  outlineNotch,
  outlineTrailing,
  floatingLabel,
};

export default styles;
export { textFieldMarker };
