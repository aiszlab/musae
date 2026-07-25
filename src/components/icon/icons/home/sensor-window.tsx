import React from "react";
import { withIcon } from "../../hoc";

const SensorWindow = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path
          d="M14 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V2C16 0.9 15.1 0 14 0ZM14 2V9H10V8H6V9H2V2H14ZM2 18V11H14V18H2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SensorWindow;
