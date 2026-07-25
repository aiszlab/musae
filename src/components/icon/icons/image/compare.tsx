import React from "react";
import { withIcon } from "../../hoc";

const Compare = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.1818, 0) scale(1.0909)">
        <path
          d="M7 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H7V22H9V0H7V2ZM7 17H2L7 11V17ZM16 2H11V4H16V17L11 11V20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Compare;
