import React from "react";
import { withIcon } from "../../hoc";

const FormatAlignLeft = withIcon(({ size }) => {
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
          d="M12 12H0V14H12V12ZM12 4H0V6H12V4ZM0 10H18V8H0V10ZM0 18H18V16H0V18ZM0 0V2H18V0H0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatAlignLeft;
