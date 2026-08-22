import { elevations, positions, sizes } from "../theme/tokens.stylex";
import { create as $create } from "@stylexjs/stylex";

const portal = $create({
  default: {
    position: "fixed",
    overflow: "hidden",
    pointerEvents: "none",
    inset: 0,
    zIndex: positions.popper,
  },

  overlay: {
    zIndex: positions.overlay,
  },
});

const dropdown = $create({
  default: {
    position: "absolute",
    backgroundColor: "var(--color-surface-container)",
    insetBlockStart: 0,
    insetInlineStart: 0,

    borderRadius: sizes.xxxxxxxsmall,
    pointerEvents: "auto",

    // animation
    willChange: "opacity",
    transitionProperty: "opacity",
    transitionDuration: "0.1s",

    // default hidden
    display: "none",
    opacity: 0,
  },

  elevation: {
    boxShadow: elevations.small,
  },
});

const arrow = $create({
  default: {
    position: "absolute",
    width: sizes.xxxxsmall,
    height: sizes.xxxxsmall,
    backgroundColor: "var(--color-surface-container)",
    transform: "rotate(45deg)",
    zIndex: positions.background,
  },
});

const styles = { portal, dropdown, arrow };

export default styles;
