import React from "react";
import { withIcon } from "../../hoc";

const SwitchCamera = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM7.88 2H12.12L13.95 4H18V16H2V4H6.05"
          fill="currentColor"
        />
        <path d="M13 9H7V6.5L3.5 10L7 13.5V11H13V13.5L16.5 10L13 6.5V9Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default SwitchCamera;
