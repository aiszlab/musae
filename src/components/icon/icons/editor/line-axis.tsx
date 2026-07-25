import React from "react";
import { withIcon } from "../../hoc";

const LineAxis = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3) scale(1.2)">
        <path
          d="M20 3.43L18.59 2.02L14.56 6.55L7.5 0L0 7.51L1.5 9.01L7.64 2.86L13.23 8.04L11.5 9.99L7.5 5.99L0 13.5L1.5 15L7.5 8.99L11.5 12.99L14.69 9.4L18.59 13.01L20 11.6L16.02 7.9L20 3.43Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LineAxis;
