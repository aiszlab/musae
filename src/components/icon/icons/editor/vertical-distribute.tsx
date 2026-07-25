import React from "react";
import { withIcon } from "../../hoc";

const VerticalDistribute = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path d="M20 0V2H0V0H20ZM5 8.5V11.5H15V8.5H5ZM0 18V20H20V18H0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default VerticalDistribute;
