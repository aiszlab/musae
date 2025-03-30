import { create as $create } from "@stylexjs/stylex";
import { duration, opacity, sizes, spacing } from "../theme/tokens.stylex";

const styles = {
  checkbox: $create({
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
    default: $create({
      default: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    }),

    rippleable: $create({
      default: {
        position: "relative",
        overflow: "hidden",
        padding: spacing.small,
        borderRadius: sizes.infinity,

        transitionProperty: "background-color",
        transitionDuration: duration.short,

        color: "var(--color-primary-opacity-20)",
        ":hover": {
          backgroundColor: "var(--color-on-surface-opacity-08)",
        },
        ":focus": {
          backgroundColor: "var(--color-on-surface-opacity-12)",
        },
      },

      checked: {
        color: "var(--color-on-surface-opacity-20)",
        ":hover": {
          backgroundColor: "var(--color-primary-opacity-08)",
        },
        ":focus": {
          backgroundColor: "var(--color-primary-opacity-12)",
        },
      },

      invalid: {
        color: "var(--color-error-opacity-20)",
        ":hover": {
          backgroundColor: "var(--color-error-opacity-08)",
        },
        ":focus": {
          backgroundColor: "var(--color-error-opacity-12)",
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
    default: $create({
      default: {
        width: "var(--size)",
        height: "var(--size)",
        position: "relative",
        boxSizing: "border-box",
        borderRadius: sizes.xxxxxxxxsmall,

        borderWidth: "var(--border-width)",
        borderStyle: "solid",
        borderColor: "var(--color-on-surface-variant)",

        transitionProperty: "background-color, border-color",
        transitionDuration: duration.short,
      },

      disabled: {
        borderColor: "var(--color-on-surface)",
      },
    }),

    checked: $create({
      default: {
        color: "var(--color-on-primary)",
        borderColor: "var(--color-primary)",
        backgroundColor: "var(--color-primary)",
      },

      disabled: {
        color: "var(--color-surface)",
        borderColor: "var(--color-on-surface)",
        backgroundColor: "var(--color-on-surface)",
      },
    }),

    invalid: $create({
      default: {
        borderColor: "var(--color-error)",
      },

      checked: {
        color: "var(--color-on-error)",
        backgroundColor: "var(--color-error)",
      },

      disabled: {
        color: "var(--color-surface)",
        borderColor: "var(--color-on-surface)",
        backgroundColor: "var(--color-on-surface)",
      },
    }),
  },

  input: $create({
    default: {
      display: "none",
    },
  }),

  check: $create({
    default: {
      position: "absolute",
      width: "var(--check-size)",
      height: "var(--check-size)",
      transform: "translate(var(--check-offset), var(--check-offset))",
    },
  }),

  label: $create({
    default: {
      paddingInline: spacing.xxxsmall,
    },

    invalid: {
      color: "var(--color-error)",
    },
  }),
};

export default styles;
