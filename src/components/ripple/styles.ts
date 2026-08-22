import { create as $create } from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";

const styles = $create({
  ripple: {
    backgroundColor: "currentColor",
    borderRadius: sizes.infinity,
    transformOrigin: "50% 50%",
    pointerEvents: "none",
  },

  position: {
    position: "absolute",
    top: "var(--y)",
    left: "var(--x)",
  },

  size: {
    width: "var(--size)",
    height: "var(--size)",
  },
});

export default styles;
