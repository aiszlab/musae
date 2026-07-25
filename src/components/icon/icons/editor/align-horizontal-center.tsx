import React from "react";
import { withIcon } from "../../hoc";

const AlignHorizontalCenter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(1.2)">
        <path d="M8 0H10V5H18V8H10V12H15V15H10V20H8V15H3V12H8V8H0V5H8V0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default AlignHorizontalCenter;
