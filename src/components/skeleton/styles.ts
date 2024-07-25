import stylex from "@stylexjs/stylex";

const animation = stylex.keyframes({
  from: {
    backgroundPosition: "100% 50%",
  },

  "100%": {
    backgroundPosition: "0 50%",
  },
});

export const styles = stylex.create({
  animation: {
    background: "linear-gradient(90deg, rgba(0, 0, 0, 0.06) 25%, rgba(0, 0, 0, 0.15) 37%, rgba(0, 0, 0, 0.06) 63%)",
    backgroundSize: "400% 100%",
    animationName: animation,
    animationDuration: "1.5s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite",
  },
});
