import React from "react";
import { withIcon } from "../../hoc";

const FlashOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.716, 0) scale(1.2)">
        <path
          d="M15 8H11.39L13.67 10.28L15 8ZM15 0H5V1.61L11.13 7.74L15 0ZM1.41 0.86L0 2.27L5 7.27V11H8V20L11.58 13.85L15.73 18L17.14 16.59L1.41 0.86Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FlashOff;
