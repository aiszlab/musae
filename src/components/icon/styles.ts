import { create as $create, keyframes as $keyframes } from "@stylexjs/stylex";

const loading = $keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

const styles = $create({
  icon: {
    display: "inline-flex",
    verticalAlign: "middle",
    color: "var(--color)",
  },

  clickable: {
    cursor: "pointer",
    userSelect: "none",
  },

  loading: {
    animationName: loading,
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
});

export default styles;
