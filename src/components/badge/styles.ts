import { create as $create } from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";

const styles = {
  badge: $create({
    default: {
      position: "relative",
      display: "inline-flex",
    },
  }),

  tail: $create({
    default: {
      position: "absolute",
      borderRadius: sizes.infinity,
      minWidth: sizes.xxxxsmall,
      textAlign: "center",
      boxShadow: `0 0 0 ${sizes.smallest} var(--color-on-primary)`,
      backgroundColor: "var(--color-primary)",
      color: "var(--color-on-primary)",
    },

    dot: {
      minWidth: null,
      width: sizes.xxxxxxxsmall,
      height: sizes.xxxxxxxsmall,
    },

    invisible: {
      display: "none",
    },

    "top-right": {
      top: 0,
      right: 0,
      transform: "translateX(50%) translateY(-50%)",
    },

    "top-left": {
      top: 0,
      left: 0,
      transform: "translateX(-50%) translateY(-50%)",
    },

    "bottom-right": {
      bottom: 0,
      right: 0,
      transform: "translateX(50%) translateY(50%)",
    },

    "bottom-left": {
      bottom: 0,
      left: 0,
      transform: "translateX(-50%) translateY(50%)",
    },
  }),
};

export default styles;
