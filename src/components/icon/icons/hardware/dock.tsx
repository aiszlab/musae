import React from "react";
import { withIcon } from "../../hoc";

const Dock = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(5.4545, 0) scale(1.0909)">
        <path
          d="M2 22H10V20H2V22ZM10 0.00999999L2 0C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10C11.1 18 12 17.1 12 16V2C12 0.9 11.1 0.00999999 10 0.00999999ZM10 14H2V4H10V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Dock;
