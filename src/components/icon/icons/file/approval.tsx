import React from "react";
import { withIcon } from "../../hoc";

const Approval = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path
          d="M0 14V20H16V14C16 12.9 15.1 12 14 12H2C0.9 12 0 12.9 0 14ZM14 16H2V14H14V16ZM8 0C5.24 0 3 2.24 3 5L8 12L13 5C13 2.24 10.76 0 8 0ZM8 9L5 5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5L8 9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Approval;
