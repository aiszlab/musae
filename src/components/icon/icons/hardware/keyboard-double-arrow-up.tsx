import React from "react";
import { withIcon } from "../../hoc";

const KeyboardDoubleArrowUp = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.7143, 0) scale(1.7143)">
        <path d="M0 12.59L1.41 14L6 9.42L10.59 14L12 12.59L6 6.59L0 12.59Z" fill="currentColor" />
        <path d="M0 6L1.41 7.41L6 2.83L10.59 7.41L12 6L6 0L0 6Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default KeyboardDoubleArrowUp;
