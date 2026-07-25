import React from "react";
import { withIcon } from "../../hoc";

const DoubleArrow = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.8182) scale(1.4545)">
        <path d="M11.5 0H7L12 7L7 14H11.5L16.5 7L11.5 0Z" fill="currentColor" />
        <path d="M4.5 0H0L5 7L0 14H4.5L9.5 7L4.5 0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default DoubleArrow;
