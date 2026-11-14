import { positions, sizes } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { create as $create } from "@stylexjs/stylex";

const portal = $create({
  base: {
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
  base: {
    position: "absolute",
    backgroundColor: "var(--color-surface)" satisfies ThemeColorVariable,
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
    filter: `drop-shadow(0 3px 3px ${"var(--color-shadow-opacity-20)" satisfies ThemeColorVariable})
             drop-shadow(0 3px 4px ${"var(--color-shadow-opacity-16)" satisfies ThemeColorVariable})
             drop-shadow(0 1px 8px ${"var(--color-shadow-opacity-12)" satisfies ThemeColorVariable})`,
  },
});

const arrow = $create({
  base: {
    position: "absolute",
    width: sizes.xxxxsmall,
    height: sizes.xxxxsmall,
    backgroundColor: "var(--color-surface)" satisfies ThemeColorVariable,
    transform: "rotate(45deg)",
    zIndex: positions.background,
  },
});

const styles = { portal, dropdown, arrow };

export default styles;
