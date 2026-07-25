import React from "react";
import { withIcon } from "../../hoc";

const FormatIndentDecrease = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M8 14H18V12H8V14ZM0 9L4 13V5L0 9ZM0 18H18V16H0V18ZM0 0V2H18V0H0ZM8 6H18V4H8V6ZM8 10H18V8H8V10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatIndentDecrease;
