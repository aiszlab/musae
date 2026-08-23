import { create as $create } from "@stylexjs/stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { duration, positions, sizes, spacing } from "../theme/tokens.stylex";

const image = $create({
  default: {
    display: "inline-flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
});

const overlay = $create({
  default: {
    position: "absolute",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.xxsmall,
    backgroundColor: "var(--color-surface-dim-opacity-90)" satisfies ThemeColorVariable,
    color: "var(--color-on-primary)" satisfies ThemeColorVariable,
    userSelect: "none",
    opacity: 1,
    transitionProperty: "opacity",
    transitionDuration: duration.medium,
  },

  hidden: {
    opacity: 0,
  },

  previewable: {
    cursor: "pointer",
  },
});

const img = $create({
  default: {
    width: sizes.full,
    height: sizes.full,
    objectFit: "cover",
  },
});

const preview = $create({
  image: {
    transform:
      "translate3d(0px, 0px, 0px) scale3d(calc(var(--scale) * var(--flip-x)), calc(var(--scale) * var(--flip-y)), 1) rotate(var(--rotate))",
    willChange: "transform",
    transitionProperty: "transform",
    transitionDuration: duration.short,
    pointerEvents: "auto",
  },
});

const operations = $create({
  default: {
    position: "fixed",
    zIndex: positions.image,
  },

  closer: {
    ":not(#\\#)": {
      top: spacing.xxxxxxlarge,
      right: spacing.xxxxxxlarge,
      position: "fixed",
    },
  },

  navigations: {
    position: "fixed",
    left: 0,
    right: 0,
    top: "50%",
    paddingInline: spacing.medium,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  footer: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: spacing.xxxxxxlarge,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "var(--color-on-surface)",
  },

  handlers: {
    display: "flex",
    flexDirection: "row",
    gap: spacing.xxxxxsmall,
    alignItems: "center",
    backgroundColor: "var(--color-surface)",
    borderRadius: sizes.infinity,
    paddingInline: spacing.xxxlarge,
    paddingBlock: spacing.xxxxxsmall,
  },
});

const styles = { image, overlay, img, preview, operations };

export default styles;
