import { create as $create, keyframes as $keyframes } from "@stylexjs/stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const skeleton_animation = $keyframes({
  from: {
    backgroundPosition: "100% 50%",
  },

  "100%": {
    backgroundPosition: "0 50%",
  },
});

const styles = $create({
  skeleton: {
    backgroundColor: "var(--color-shadow-opacity-08)" satisfies ThemeColorVariable,
  },

  skeleton_animation: {
    backgroundColor: null,
    backgroundImage:
      "linear-gradient(90deg, var(--color-shadow-opacity-08) 25%, var(--color-shadow-opacity-16) 37%, var(--color-shadow-opacity-08) 63%)",
    backgroundSize: "400% 100%",
    animationName: skeleton_animation,
    animationDuration: "1.5s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite",
  },
});

export default styles;
