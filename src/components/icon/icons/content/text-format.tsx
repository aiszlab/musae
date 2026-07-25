import React from "react";
import { withIcon } from "../../hoc";

const TextFormat = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.8, 0) scale(1.6)">
        <path
          d="M0 13V15H14V13H0ZM4.5 8.8H9.5L10.4 11H12.5L7.75 0H6.25L1.5 11H3.6L4.5 8.8ZM7 1.98L8.87 7H5.13L7 1.98Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TextFormat;
