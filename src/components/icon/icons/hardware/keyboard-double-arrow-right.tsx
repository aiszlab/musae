import React from "react";
import { withIcon } from "../../hoc";

const KeyboardDoubleArrowRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.7143) scale(1.7143)">
        <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="currentColor" />
        <path d="M8 0L6.59 1.41L11.17 6L6.59 10.59L8 12L14 6L8 0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default KeyboardDoubleArrowRight;
