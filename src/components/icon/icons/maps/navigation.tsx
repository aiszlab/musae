import React from "react";
import { withIcon } from "../../hoc";

const Navigation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.5263, 0) scale(1.2632)">
        <path
          d="M7.5 5.27L11.78 15.7L8.31 14.17L7.5 13.81L6.69 14.17L3.22 15.7L7.5 5.27ZM7.5 0L0 18.29L0.71 19L7.5 16L14.29 19L15 18.29L7.5 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Navigation;
