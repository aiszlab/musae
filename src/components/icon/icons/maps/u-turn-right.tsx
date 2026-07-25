import React from "react";
import { withIcon } from "../../hoc";

const UTurnRight = withIcon(({ size }) => {
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
          d="M0 6V18H2V6C2 3.79 3.79 2 6 2C8.21 2 10 3.79 10 6V10.17L8.41 8.58L7 10L11 14L15 10L13.59 8.59L12 10.17V6C12 2.69 9.31 0 6 0C2.69 0 0 2.69 0 6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default UTurnRight;
