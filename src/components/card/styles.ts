import { create as $create } from "@stylexjs/stylex";
import { duration, elevations, sizes, spacing } from "../theme/tokens.stylex";

/**
 * @zh Card 组件样式定义,每个 namespace 独立 $create 调用
 */
const styles = {
  card: $create({
    default: {
      position: "relative",
      overflow: "hidden",
      borderRadius: sizes.medium,
      boxSizing: "border-box",
      transitionProperty: "box-shadow, background-color, border-color",
      transitionDuration: duration.medium,

      "::after": {
        content: "''",
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        transitionProperty: "background-color",
        transitionDuration: duration.medium,
        backgroundColor: "var(--card-state-layer, transparent)",
      },
    },

    stacked: {
      display: "flex",
      flexDirection: "column",
    },

    horizontal: {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
    },

    interactive: {
      cursor: "pointer",
    },

    disabled: {
      cursor: "not-allowed",
    },

    outlined: {
      backgroundColor: "var(--color-surface)",
      borderWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline-variant)",
      boxShadow: "none",
    },

    elevated: {
      backgroundColor: "var(--color-surface-container-low)",
      borderWidth: 0,
      boxShadow: elevations["1"],
    },

    filled: {
      backgroundColor: "var(--color-surface-container-highest)",
      borderWidth: 0,
      boxShadow: "none",
    },
  }),

  elevationState: $create({
    outlinedHover: {
      boxShadow: elevations["1"],
    },
    outlinedDragged: {
      boxShadow: elevations["3"],
    },
    elevatedHover: {
      boxShadow: elevations["2"],
    },
    elevatedDragged: {
      boxShadow: elevations["4"],
    },
    filledDragged: {
      boxShadow: elevations["3"],
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
    press: {
      ":active::after": {
        backgroundColor: "var(--color-state-layer-press)",
      },
    },
  }),

  header: $create({
    default: {
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box",
      width: sizes.full,
      flexShrink: 0,

      paddingInlineStart: spacing.large,
      paddingInlineEnd: spacing.xxxxxsmall,
      paddingBlock: spacing.medium,

      gap: spacing.large,
    },

    stacked: {},

    horizontal: {
      padding: spacing.large,
      flex: "1 0 0",
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
      backgroundColor: "var(--color-primary-container)",
      color: "var(--color-on-primary-container)",
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

  headerAction: $create({
    default: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "48px",
      height: "48px",
      flexShrink: 0,
      alignSelf: "stretch",
    },
  }),

  media: $create({
    default: {
      position: "relative",
      overflow: "hidden",
    },
    stacked: {
      width: sizes.full,
      flex: "1 0 0",
      minHeight: 0,
    },
    horizontal: {
      width: "80px",
      height: sizes.full,
      flex: "0 0 auto",
      borderTopWidth: sizes.smallest,
      borderRightWidth: sizes.smallest,
      borderBottomWidth: sizes.smallest,
      borderTopStyle: "solid",
      borderRightStyle: "solid",
      borderBottomStyle: "solid",
      borderTopColor: "var(--color-outline-variant)",
      borderRightColor: "var(--color-outline-variant)",
      borderBottomColor: "var(--color-outline-variant)",
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

  headline: $create({
    default: {
      display: "flex",
      flexDirection: "column",
      gap: spacing.xxxxxsmall,
      width: sizes.full,
    },
  }),

  title: $create({
    default: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.5px",
      color: "var(--color-on-surface)",
    },
  }),

  subhead: $create({
    default: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.25px",
      color: "var(--color-on-surface-variant)",
    },
  }),

  body: $create({
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
