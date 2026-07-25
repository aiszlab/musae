import React from "react";
import { withIcon } from "../../hoc";

const FormatAlignJustify = withIcon(({ size }) => {
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
          d="M0 18H18V16H0V18ZM0 14H18V12H0V14ZM0 10H18V8H0V10ZM0 6H18V4H0V6ZM0 0V2H18V0H0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatAlignJustify;
