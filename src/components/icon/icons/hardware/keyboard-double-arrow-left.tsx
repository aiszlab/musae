import React from "react";
import { withIcon } from "../../hoc";

const KeyboardDoubleArrowLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.7143) scale(1.7143)">
        <path d="M12.59 12L14 10.59L9.42 6L14 1.41L12.59 0L6.59 6L12.59 12Z" fill="currentColor" />
        <path d="M6 12L7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default KeyboardDoubleArrowLeft;
