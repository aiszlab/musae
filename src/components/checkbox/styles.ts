import stylex from "@stylexjs/stylex";
import { opacity, sizes, spacing } from "../theme/tokens.stylex";

const styles = {
  checkbox: stylex.create({
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

    variables: (props: { primaryColor: string; onPrimaryColor: string; outlineColor: string }) => ({
      "--primary-color": props.primaryColor,
      "--on-primary-color": props.onPrimaryColor,
      "--outline-color": props.outlineColor,
    }),
  }),

  trigger: stylex.create({
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
        borderRadius: spacing.xxsmall,
        transitionProperty: "all",
        transitionDuration: "0.2s",

        borderWidth: sizes.smallest,
        borderStyle: "solid",
        borderColor: "var(--outline-color)",
      },
    },

    checked: {
      "::before": {
        backgroundColor: "var(--primary-color)",
        borderColor: "var(--primary-color)",
      },

      "::after": {
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

        borderBottomWidth: sizes.xxxxxxsmall,
        borderLeftWidth: sizes.xxxxxxsmall,
        borderStyle: "solid",
        borderColor: "var(--on-primary-color)",
      },
    },

    disabled: (props: { backgroundColor: string; color: string }) => ({
      "::before": {
        backgroundColor: props.backgroundColor,
        borderColor: props.backgroundColor,
      },

      "::after": {
        borderColor: props.color,
      },
    }),

    unchecked: {
      "::before": {
        backgroundColor: null,
      },
    },
  }),

  label: stylex.create({
    default: {
      paddingInline: spacing.xsmall,
    },
  }),
};

export default styles;
