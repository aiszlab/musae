import { create as $create, keyframes as $keyframes } from "@stylexjs/stylex";

const loading_loading = $keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

const styles = $create({
  loading_loading: {
    animationName: loading_loading,
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
});

export default styles;
