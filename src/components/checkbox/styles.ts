import stylex from "@stylexjs/stylex";
import { opacity, sizes, spacing } from "../theme/tokens.stylex";

const styles = {
  checkbox: stylex.create({
    variables: (props: {
      primary: string;
      onPrimary: string;
      outline: string;
      onSurface: string;
    }) => ({
      "--primary": props.primary,
      "--on-primary": props.onPrimary,
      "--outline": props.outline,
      "--on-surface": props.onSurface,
    }),

    default: {
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      userSelect: "none",
    },

    disabled: {
      opacity: opacity.thicker,
      cursor: "not-allowed",
    },
  }),

  input: stylex.create({
    default: {
      margin: spacing.none,
      visibility: "hidden",
      cursor: "inherit",
      width: spacing.large,
      height: spacing.large,
      position: "relative",

      "::before": {
        content: "''",
        visibility: "visible",
        display: "inline-block",
        verticalAlign: "super",
        boxSizing: "border-box",
        width: sizes.xxxsmall,
        height: sizes.xxxsmall,
        borderRadius: spacing.xxxsmall,
        transitionProperty: "all",
        transitionDuration: "0.2s",

        borderWidth: sizes.smallest,
        borderStyle: "solid",
      },

      // if current node is checked, show checkmark
      ':not([aria-checked="false"])::after': {
        content: "",
        position: "absolute",
        insetBlockStart: sizes.none,
        insetInlineStart: sizes.none,

        visibility: "visible",
        boxSizing: "border-box",
        display: "block",
        width: `calc(${sizes.xxxsmall} / 2)`,
        height: `calc(${sizes.xxxsmall} / 3)`,

        transformOrigin: "50% 50%",
        transform: "translate(50%, 75%) rotate(-45deg)",

        borderTopWidth: sizes.none,
        borderRightWidth: sizes.none,
        borderBottomWidth: sizes.xxxxxxxsmall,
        borderLeftWidth: sizes.xxxxxxxsmall,
        borderStyle: "solid",
        borderColor: "var(--on-primary)",
      },

      // when node is disabled and checked, wrapper appear like disabled
      ':not([aria-disabled="false"])[aria-checked="true"]::before': {
        borderColor: "var(--on-surface)",
        backgroundColor: "var(--on-surface)",
      },

      // when node is disabled and unchecked, wrapper appear only border like disabled
      ':not([aria-disabled="false"])[aria-checked="false"]::before': {
        borderColor: "var(--on-surface)",
      },

      // when node is editable and checked, fill background
      ':not([aria-disabled="true"])[aria-checked="true"]::before': {
        backgroundColor: "var(--primary)",
        borderColor: "var(--primary)",
      },

      // when node is editable and unchecked, show only border
      ':not([aria-disabled="true"])[aria-checked="false"]::before': {
        borderColor: "var(--outline)",
      },
    },
  }),

  label: stylex.create({
    default: {
      paddingInline: spacing.xxsmall,
    },
  }),
};

export default styles;
