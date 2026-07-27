import { create as $create } from "@stylexjs/stylex";
import { duration, elevations, sizes, spacing } from "../theme/tokens.stylex";

const styles = {
  card: $create({
    default: {
      position: "relative",
      overflow: "hidden",
      borderRadius: sizes.medium,
      boxSizing: "border-box",
      transitionProperty: "background-color, box-shadow, border-color",
      transitionDuration: duration.medium,

      // state layer via ::after
      "::after": {
        content: "''",
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        transitionProperty: "background-color",
        transitionDuration: duration.medium,
      },
    },

    interactive: {
      cursor: "pointer",
    },

    outlined: {
      backgroundColor: "var(--color-surface)",
      borderWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline-variant)",

      "::after": {
        backgroundColor: "transparent",
      },
    },

    elevated: {
      backgroundColor: "var(--color-surface-container-low)",
      borderWidth: sizes.none,
      boxShadow: elevations.xsmall,

      "::after": {
        backgroundColor: "transparent",
      },
    },

    filled: {
      backgroundColor: "var(--color-surface-container-highest)",
      borderWidth: sizes.none,

      "::after": {
        backgroundColor: "transparent",
      },
    },
  }),

  stateLayer: $create({
    hover: {
      ":hover::after": {
        "@media (hover: hover)": {
          backgroundColor: "var(--color-state-layer-hover)",
        },
      },
    },

    focus: {
      ":focus-visible::after": {
        backgroundColor: "var(--color-state-layer-focus)",
      },
    },

    active: {
      ":active::after": {
        backgroundColor: "var(--color-state-layer-press)",
      },
    },
  }),

  header: $create({
    default: {
      display: "flex",
      alignItems: "center",
      paddingInline: spacing.large,
      paddingBlock: spacing.medium,
      paddingRight: spacing.xxxxxsmall,
      boxSizing: "border-box",
      width: sizes.full,
      minHeight: "72px",
    },
  }),

  headerContent: $create({
    default: {
      display: "flex",
      flex: "1 0 0",
      alignItems: "center",
      gap: spacing.large,
      minWidth: 0,
    },
  }),

  headerMonogram: $create({
    default: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: sizes.xlarge,
      height: sizes.xlarge,
      minWidth: sizes.xlarge,
      borderRadius: sizes.infinity,
      backgroundColor: "var(--color-primary)",
      color: "var(--color-on-primary)",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0.15px",
      overflow: "hidden",
      flexShrink: 0,
    },
  }),

  headerText: $create({
    default: {
      display: "flex",
      flexDirection: "column",
      gap: spacing.xxxxxsmall,
      minWidth: 0,
      flex: "1 0 0",
    },
  }),

  headerTitle: $create({
    default: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0.15px",
      color: "var(--color-on-surface)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  }),

  headerSubhead: $create({
    default: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.25px",
      color: "var(--color-on-surface-variant)",
    },
  }),

  media: $create({
    default: {
      position: "relative",
      width: sizes.full,
      flex: "1 0 0",
      minHeight: 0,
      overflow: "hidden",
    },

    image: {
      position: "absolute",
      inset: 0,
      width: sizes.full,
      height: sizes.full,
      objectFit: "cover",
    },
  }),

  content: $create({
    default: {
      display: "flex",
      flexDirection: "column",
      gap: spacing.xxxlarge,
      padding: spacing.large,
      boxSizing: "border-box",
      width: sizes.full,
    },
  }),

  contentTitle: $create({
    default: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.5px",
      color: "var(--color-on-surface)",
    },
  }),

  contentSubhead: $create({
    default: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.25px",
      color: "var(--color-on-surface-variant)",
    },
  }),

  contentBody: $create({
    default: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.25px",
      color: "var(--color-on-surface-variant)",
    },
  }),

  actions: $create({
    default: {
      display: "flex",
      gap: spacing.xxsmall,
      alignItems: "flex-start",
      justifyContent: "flex-end",
      width: sizes.full,
    },
  }),
};

export default styles;
