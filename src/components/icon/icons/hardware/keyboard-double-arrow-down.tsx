import React from "react";
import { withIcon } from "../../hoc";

const KeyboardDoubleArrowDown = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.7143, 0) scale(1.7143)">
        <path d="M12 1.41L10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41Z" fill="currentColor" />
        <path d="M12 8L10.59 6.59L6 11.17L1.41 6.59L0 8L6 14L12 8Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default KeyboardDoubleArrowDown;
