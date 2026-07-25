import React from "react";
import { withIcon } from "../../hoc";

const UTurnLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2, 0) scale(1.3333)">
        <path
          d="M15 6V18H13V6C13 3.79 11.21 2 9 2C6.79 2 5 3.79 5 6V10.17L6.59 8.58L8 10L4 14L0 10L1.41 8.59L3 10.17V6C3 2.69 5.69 0 9 0C12.31 0 15 2.69 15 6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default UTurnLeft;
