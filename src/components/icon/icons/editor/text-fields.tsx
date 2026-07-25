import React from "react";
import { withIcon } from "../../hoc";

const TextFields = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.5263) scale(1.2632)">
        <path d="M0 0V3H5V15H8V3H13V0H0ZM19 5H10V8H13V15H16V8H19V5Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default TextFields;
