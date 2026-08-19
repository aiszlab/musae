import { create as $create } from "@stylexjs/stylex";
import { duration, elevations, positions, sizes, spacing } from "../theme/tokens.stylex";

const tour = $create({
  overlay: {
    position: "absolute",
    inset: 0,
    mixBlendMode: "hard-light",
    backgroundColor: "var(--color-surface-dim)",
    zIndex: positions.tour,
  },

  tour: {
    backgroundColor: "var(--color-on-primary)",
    flexDirection: "column",
    boxShadow: elevations.small,
    borderRadius: sizes.xxxxxxxxxsmall,
    transitionProperty: "all",
    transitionDuration: duration.short,
  },

  title: {
    paddingInline: spacing.large,
    paddingBlockStart: spacing.large,
    paddingBlockEnd: spacing.xxsmall,
  },

  description: {
    paddingInline: spacing.large,
  },

  footer: {
    paddingInline: spacing.large,
    paddingBlockStart: spacing.xxsmall,
    paddingBlockEnd: spacing.large,
  },
});

const spotlight = $create({
  spotlight: {
    backgroundColor: "#808080",
    borderRadius: sizes.xxxxxxxsmall,
    transitionProperty: "transform",
    transitionDuration: duration.short,
    willChange: "transform",
    display: "none",
  },
});

const styles = {
  tour,
  spotlight,
};

export default styles;
