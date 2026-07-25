import React from "react";
import { withIcon } from "../../hoc";

const Equalizer = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.5)">
        <path d="M6 16H10V0H6V16ZM0 16H4V8H0V16ZM12 5V16H16V5H12Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Equalizer;
