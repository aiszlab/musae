import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Ripple as RippleType, RippleProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { clamp } from "@aiszlab/relax";

const styles = stylex.create({
  ripple: {
    backgroundColor: "currentColor",
    borderRadius: sizes.infinity,
    transformOrigin: "center",
    pointerEvents: "none",
  },

  position: (props: Pick<RippleType, "x" | "y">) => ({
    position: "absolute",
    top: props.y,
    left: props.x,
  }),

  size: (props: Pick<RippleType, "size">) => ({
    width: props.size,
    height: props.size,
  }),
});

const Ripple = ({ ripples = [], onClear }: RippleProps) => {
  return ripples.map((ripple) => {
    const styled = stylex.props(
      styles.ripple,
      styles.position({
        x: ripple.x,
        y: ripple.y,
      }),
      styles.size({
        size: ripple.size,
      })
    );

    // animate 100px per 10ms, use the mid value
    const duration = clamp(0.01 * ripple.size, 0.2, ripple.size > 100 ? 0.75 : 0.5);

    return (
      <AnimatePresence key={ripple.key} mode="popLayout">
        <motion.span
          className={styled.className}
          style={styled.style}
          initial={{ transform: "scale(0)", opacity: 0.35 }}
          animate={{ transform: "scale(2)", opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
          onAnimationComplete={() => {
            onClear(ripple.key);
          }}
        />
      </AnimatePresence>
    );
  });
};

export default Ripple;