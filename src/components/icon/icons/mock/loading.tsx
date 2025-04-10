import React from "react";
import { withIcon } from "../../hoc";
import { create as $create, props as $props, keyframes as $keyframes } from "@stylexjs/stylex";

const loading = $keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

const styles = $create({
  loading: {
    animationName: loading,
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
});

const Loading = withIcon((props) => {
  const styled = $props(styles.loading);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 1024 1024"
      fill="none"
      className={styled.className}
      style={styled.style}
    >
      <path
        clipRule="evenodd"
        d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
});

export default Loading;
