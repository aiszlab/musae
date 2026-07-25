import React from "react";
import { withIcon } from "../../hoc";

const Web = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM2 5H12.5V8.5H2V5ZM2 10.5H12.5V14H2V10.5ZM18 14H14.5V5H18V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Web;
