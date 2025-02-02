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
      cursor: "not-allowed",
      opacity: opacity.thickest,
    },

    medium: {
      "--size": sizes.xxxsmall,
      "--check-size": sizes.xsmall,
      "--border-width": sizes.xxxxxxxxsmall,
      "--check-offset": "calc(((var(--check-size) - var(--size)) / 2 + var(--border-width)) * -1)",
    },
  }),

  layer: {
    default: stylex.create({
      default: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    }),

    rippleable: stylex.create({
      default: {
        position: "relative",
        overflow: "hidden",
        padding: spacing.small,
        borderRadius: sizes.infinity,

        transitionProperty: "background-color",
        transitionDuration: duration.short,

        color: "var(--primary-opacity-20)",
        ":hover": {
          backgroundColor: "var(--on-surface-opacity-08)",
        },
        ":focus": {
          backgroundColor: "var(--on-surface-opacity-12)",
        },
      },

      checked: {
        color: "var(--on-surface-opacity-20)",
        ":hover": {
          backgroundColor: "var(--primary-opacity-08)",
        },
        ":focus": {
          backgroundColor: "var(--primary-opacity-12)",
        },
      },

      invalid: {
        color: "var(--error-opacity-20)",
        ":hover": {
          backgroundColor: "var(--error-opacity-08)",
        },
        ":focus": {
          backgroundColor: "var(--error-opacity-12)",
        },
      },

      disabled: {
        color: null,
        ":hover": {
          backgroundColor: null,
        },
        ":focus": {
          backgroundColor: null,
        },
      },
    }),
  },

  inputer: {
    default: stylex.create({
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

      disabled: {
        borderColor: "var(--on-surface)",
      },
    }),

    checked: stylex.create({
      default: {
        color: "var(--on-primary)",
        borderColor: "var(--primary)",
        backgroundColor: "var(--primary)",
      },

      disabled: {
        color: "var(--surface)",
        borderColor: "var(--on-surface)",
        backgroundColor: "var(--on-surface)",
      },
    }),

    invalid: stylex.create({
      default: {
        borderColor: "var(--error)",
      },

      checked: {
        color: "var(--on-error)",
        backgroundColor: "var(--error)",
      },

      disabled: {
        color: "var(--surface)",
        borderColor: "var(--on-surface)",
        backgroundColor: "var(--on-surface)",
      },
    }),
  },

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

    invalid: {
      color: "var(--error)",
    },
  }),
};

export default styles;
