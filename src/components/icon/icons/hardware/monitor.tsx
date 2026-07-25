import React from "react";
import { withIcon } from "../../hoc";

const Monitor = withIcon(({ size }) => {
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
          d="M18 0H2C0.9 0 0 0.9 0 2V13C0 14.1 0.9 15 2 15H5L4 16V18H16V16L15 15H18C19.1 15 20 14.1 20 13V2C20 0.9 19.1 0 18 0ZM18 13H2V2H18V13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Monitor;
