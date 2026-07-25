import React from "react";
import { withIcon } from "../../hoc";

const RMobiledata = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.5, 0) scale(3)">
        <path
          d="M5.8 5.2L7 8H5L3.87 5.33H2V8H0V0H5C6.13 0 7 0.87 7 2V3.33C7 4.13 6.47 4.87 5.8 5.2ZM5 2H2V3.33H5V2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RMobiledata;
