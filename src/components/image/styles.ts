import { create as $create } from "@stylexjs/stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { duration, sizes, spacing } from "../theme/tokens.stylex";

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

const styles = { image, overlay, img };

export default styles;
