import React from "react";
import { withIcon } from "../../hoc";

const FiberNew = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 7.7647) scale(1.4118)">
        <path
          d="M3.75 3.5L1.25 0H0V6H1.25V2.5L3.8 6H5V0H3.75V3.5ZM6 6H10V4.75H7.5V3.64H10V2.38H7.5V1.26H10V0H6V6ZM15.75 0V4.5H14.63V0.99H13.38V4.51H12.25V0H11V5C11 5.55 11.45 6 12 6H16C16.55 6 17 5.55 17 5V0H15.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FiberNew;
