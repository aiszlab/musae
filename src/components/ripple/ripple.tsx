import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Ripple as RippleType, RippleProps } from "../../types/ripple";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";

const styles = $create({
  ripple: {
    backgroundColor: "currentColor",
    borderRadius: sizes.infinity,
    transformOrigin: "50% 50%",
    pointerEvents: "none",
  },

  position: (props: { x: number; y: number }) => ({
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
    const styled = $props(
      styles.ripple,
      styles.position({
        x: ripple.x,
        y: ripple.y,
      }),
      styles.size({
        size: ripple.size,
      }),
    );

    return (
      <AnimatePresence key={ripple.key} mode="popLayout">
        <motion.span
          className={styled.className}
          style={styled.style}
          initial={{ transform: "scale(0)", opacity: 0.35 }}
          animate={{ transform: "scale(2)", opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => {
            onClear(ripple.key);
          }}
        />
      </AnimatePresence>
    );
  });
};

export default Ripple;
