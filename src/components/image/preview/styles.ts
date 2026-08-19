import { create as $create } from "@stylexjs/stylex";
import { duration, spacing, positions, sizes } from "../../theme/tokens.stylex";

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
  operations: {
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

const styles = {
  preview,
  operations,
};

export default styles;
