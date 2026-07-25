import React from "react";
import { withIcon } from "../../hoc";

const FlashlightOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.4716, 0) scale(1.1645)">
        <path
          d="M1.42 0.81L0 2.22L6.61 8.83V20H14.61V16.83L18.39 20.61L19.8 19.2L1.42 0.81ZM12.61 18H8.61V10.83L12.61 14.83V18Z"
          fill="currentColor"
        />
        <path
          d="M14.61 2V3H6.44L8.44 5H14.61V5.39L12.61 8.4V9.17L14.61 11.17V9L16.61 6V0H4.61V1.17L5.44 2H14.61Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FlashlightOff;
