import React from "react";
import { withIcon } from "../../hoc";

const ViewComfy = withIcon(({ size }) => {
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
          d="M0 0V16H20V0H0ZM2 2H18V7H2V2ZM2 14V9H6V14H2ZM8 14V9H18V14H8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ViewComfy;
