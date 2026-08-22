import { create as $create } from "@stylexjs/stylex";
import { positions } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const stackLevel = $create({
  default: {
    zIndex: positions.drawer,
  },
});

const container = $create({
  default: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
  },

  modal: {
    overscrollBehavior: "contain",
    overflow: "hidden",
  },
});

const overlay = $create({
  default: {
    position: "absolute",
    inset: 0,
    pointerEvents: "auto",
    opacity: 0,
    backgroundColor: "var(--color-surface-dim)" satisfies ThemeColorVariable,
  },
});

const panel = $create({
  default: {
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

  fullscreen: {
    "@media (max-width: 904px)": {
      width: "100vw",
      height: "100vh",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
});

const body = $create({
  default: {
    flex: 1,
    overflow: "auto",
    overscrollBehavior: "contain",
  },
});

const styles = {
  stackLevel,
  container,
  overlay,
  panel,
  body,
};

export default styles;
