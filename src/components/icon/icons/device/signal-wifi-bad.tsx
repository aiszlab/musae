import React from "react";
import { withIcon } from "../../hoc";

const SignalWifiBad = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.5) scale(1)">
        <path
          d="M24 4.98C20.93 1.9 16.69 0 12 0C7.31 0 3.07 1.9 0 4.98L12 17V8H20.99L24 4.98ZM19.59 10L17.5 12.09L15.41 10L14 11.41L16.09 13.5L14 15.59L15.41 17L17.5 14.92L19.59 17L21 15.59L18.92 13.5L21 11.41L19.59 10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SignalWifiBad;
