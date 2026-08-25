import { create as $create } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const styles = $create({
  base: {
    cursor: "pointer",
    pointerEvents: "auto",
    transform: "translateX(var(--movement-x)) translateY(var(--movement-y))",
    insetInlineEnd: spacing.xxxlarge,
    insetBlockEnd: spacing.xxxlarge,

    // use higher selector
    ":not(#\\#)": {
      position: "absolute",
    },
  },

  dragged: {
    insetInlineEnd: null,
    insetBlockEnd: null,
    insetInlineStart: "var(--left)",
    insetBlockStart: "var(--top)",
  },

  icon: {
    pointerEvents: "none",
    display: "inline-flex",
  },
});

export default styles;
