import React from "react";
import { withIcon } from "../../hoc";

const FiveG = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 5.3333) scale(1.3333)">
        <path
          d="M13.5 6H16V8H11V2H18C18 0.9 17.1 0 16 0H11C9.9 0 9 0.9 9 2V8C9 9.1 9.9 10 11 10H16C17.1 10 18 9.1 18 8V4H13.5V6Z"
          fill="currentColor"
        />
        <path
          d="M0 6H5V8H0V10H5C6.1 10 7 9.1 7 8V6C7 4.9 6.1 4 5 4H2V2H7V0H0V6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FiveG;
