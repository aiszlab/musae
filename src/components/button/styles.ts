import { create as $create, type CompiledStyles, type StyleXArray } from "@stylexjs/stylex";
import { duration, elevations, sizes, spacing } from "../theme/tokens.stylex";
import type { Size } from "../../types/button";
import { $headline, $label, $title } from "../theme/theme";

type ShapeCSSProperties = Partial<Record<Size, { borderRadius: string }>>;

const styles = {
  button: $create({
    default: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.xxsmall,
      transitionProperty: "background-color, color, box-shadow",
      transitionDuration: duration.medium,
      willChange: "background-color, color, box-shadow",

      // reset styles
      borderWidth: sizes.none,
      backgroundColor: "transparent",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      cursor: "pointer",
      fontFamily: "inherit",
      boxSizing: "border-box",
      height: "fit-content",
    },

    rippleable: {
      position: "relative",
    },
  }),

  variant: $create({
    filled: {
      borderWidth: sizes.none,
      backgroundColor: "var(--color-button)",
      color: "var(--color-on-button)",

      ":hover": {
        boxShadow: elevations.xsmall,
      },
    },

    outlined: {
      borderWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-button)",
      color: "var(--color-button)",

      ":hover": {
        backgroundColor: "var(--color-button-opacity-08)",
      },
    },

    text: {
      color: "var(--color-button)",

      ":hover": {
        backgroundColor: "var(--color-button-opacity-08)",
      },
    },
  }),

  shape: {
    round: $create<ShapeCSSProperties>({
      medium: {
        borderRadius: sizes.infinity,
      },
    }),

    square: $create<ShapeCSSProperties>({
      xsmall: {
        borderRadius: sizes.xxxxxsmall,
      },

      small: {
        borderRadius: sizes.xxxxxsmall,
      },

      medium: {
        borderRadius: sizes.xxxxsmall,
      },

      large: {
        borderRadius: sizes.small,
      },

      xlarge: {
        borderRadius: sizes.small,
      },
    }),
  },

  size: $create({
    xsmall: {
      paddingBlock: spacing.xxxsmall,
      paddingInline: spacing.medium,
    },

    small: {
      paddingBlock: spacing.xsmall,
      paddingInline: spacing.large,
    },

    medium: {
      paddingBlock: spacing.large,
      paddingInline: spacing.xxlarge,
    },

    large: {
      paddingBlock: spacing.xxxxxlarge,
      paddingInline: spacing.xxxxxxxlarge,
    },

    xlarge: {
      paddingBlock: spacing.xxxxxxxlarge,
      paddingInline: spacing.xxxxxxxxxlarge,
    },
  }),

  disabled: $create({
    default: {
      color: "var(--color-on-surface-opacity-38)",
      cursor: "not-allowed",
      boxShadow: null,
      borderColor: null,
      backgroundColor: null,

      ":hover": {
        boxShadow: null,
      },
    },

    filled: {
      backgroundColor: "var(--color-on-surface-opacity-12)",
    },

    outlined: {
      borderColor: "var(--color-on-surface-opacity-38)",
    },

    text: {},
  }),
};

/**
 * `Button` `Typography`
 */
const TYPOGRAPHYS: Record<Size, StyleXArray<CompiledStyles>> = {
  xsmall: $label.large,
  small: $label.large,
  medium: $title.medium,
  large: $headline.small,
  xlarge: $headline.large,
};

export default styles;
export { TYPOGRAPHYS };
