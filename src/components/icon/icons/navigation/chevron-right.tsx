import React from "react";
import { withIcon } from "../../hoc";

const ChevronRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.59, 0) scale(2)">
        <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default ChevronRight;
