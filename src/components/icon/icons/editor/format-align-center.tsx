import React from "react";
import { withIcon } from "../../hoc";

const FormatAlignCenter = withIcon(({ size }) => {
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
          d="M4 12V14H14V12H4ZM0 18H18V16H0V18ZM0 10H18V8H0V10ZM4 4V6H14V4H4ZM0 0V2H18V0H0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatAlignCenter;
