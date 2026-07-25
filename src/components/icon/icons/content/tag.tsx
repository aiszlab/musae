import React from "react";
import { withIcon } from "../../hoc";

const Tag = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.5)">
        <path
          d="M16 6V4H12V0H10V4H6V0H4V4H0V6H4V10H0V12H4V16H6V12H10V16H12V12H16V10H12V6H16ZM10 10H6V6H10V10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Tag;
