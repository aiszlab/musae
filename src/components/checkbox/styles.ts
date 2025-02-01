import stylex from "@stylexjs/stylex";
import { duration, opacity, sizes, spacing } from "../theme/tokens.stylex";

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

    medium: {
      "--size": sizes.xxxsmall,
      "--check-size": sizes.xsmall,
      "--border-width": sizes.xxxxxxxxsmall,
      "--check-offset": "calc(((var(--check-size) - var(--size)) / 2 + var(--border-width)) * -1)",
    },
  }),

  layer: stylex.create({
    default: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    rippleable: (props: { color: string; backgroundColor: string }) => ({
      position: "relative",
      overflow: "hidden",
      padding: spacing.small,
      borderRadius: sizes.infinity,
      color: props.color,

      transitionProperty: "background-color",
      transitionDuration: duration.short,

      ":hover": {
        backgroundColor: props.backgroundColor,
      },
    }),
  }),

  inputer: stylex.create({
    default: {
      width: "var(--size)",
      height: "var(--size)",
      position: "relative",
      boxSizing: "border-box",
      borderRadius: sizes.xxxxxxxxsmall,
      borderWidth: "var(--border-width)",
      borderStyle: "solid",
      borderColor: "var(--on-surface-variant)",

      transitionProperty: "background-color, border-color",
      transitionDuration: duration.short,
    },

    checked: {
      backgroundColor: "var(--primary)",
      borderColor: "var(--primary)",
    },
  }),

  input: stylex.create({
    default: {
      display: "none",
    },
  }),

  check: stylex.create({
    default: {
      position: "absolute",
      width: "var(--check-size)",
      height: "var(--check-size)",
      transform: "translate(var(--check-offset), var(--check-offset))",
    },
  }),

  label: stylex.create({
    default: {
      paddingInline: spacing.xxxsmall,
    },
  }),
};

export default styles;
