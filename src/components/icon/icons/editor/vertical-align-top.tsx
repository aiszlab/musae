import React from "react";
import { withIcon } from "../../hoc";

const VerticalAlignTop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.3333, 0) scale(1.3333)">
        <path d="M4 8H7V18H9V8H12L8 4L4 8ZM0 0V2H16V0H0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default VerticalAlignTop;
