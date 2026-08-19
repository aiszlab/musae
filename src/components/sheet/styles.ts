import { create as $create } from "@stylexjs/stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { positions } from "../theme/tokens.stylex";

const styles = $create({
  stackLevel: {
    zIndex: positions.drawer,
  },

  container: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
  },

  modal: {
    overscrollBehavior: "contain",
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    pointerEvents: "auto",
    opacity: 0,
    backgroundColor: "var(--color-surface-dim)" satisfies ThemeColorVariable,
  },

  panel: {
    position: "absolute",
    pointerEvents: "auto",
    willChange: "transform",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    transform: "var(--default-position)",
  },

  right: {
    right: 0,
    top: 0,
    bottom: 0,
    width: "var(--size)",
  },

  left: {
    left: 0,
    top: 0,
    bottom: 0,
    width: "var(--size)",
  },

  bottom: {
    bottom: 0,
    left: 0,
    right: 0,
    height: "var(--size)",
  },

  top: {
    top: 0,
    left: 0,
    right: 0,
    height: "var(--size)",
  },

  body: {
    flex: 1,
    overflow: "auto",
    overscrollBehavior: "contain",
  },
});

export default styles;
