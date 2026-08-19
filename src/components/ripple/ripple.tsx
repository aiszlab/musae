import styles from "./styles";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import type { RippleProps } from "../../types/ripple";
import { props as $props } from "@stylexjs/stylex";

const Ripple = ({ ripples = [], onClear }: RippleProps) => {
  return ripples.map((ripple) => {
    const styled = $props(styles.ripple, styles.position, styles.size);

    return (
      <AnimatePresence key={ripple.key} mode="popLayout">
        <motion.span
          className={styled.className}
          style={{
            ...styled.style,
            "--x": ripple.x + "px",
            "--y": ripple.y + "px",
            "--size": ripple.size + "px",
          }}
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
