import React from "react";
import { withIcon } from "../../hoc";

const Bluetooth = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.374, 0) scale(1.2)">
        <path
          d="M12.71 5.71L7 0H6V7.59L1.41 3L0 4.41L5.59 10L0 15.59L1.41 17L6 12.41V20H7L12.71 14.29L8.41 10L12.71 5.71ZM8 3.83L9.88 5.71L8 7.59V3.83ZM9.88 14.29L8 16.17V12.41L9.88 14.29Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Bluetooth;
