import React from "react";
import { withIcon } from "../../hoc";

const FourGMobiledata = withIcon(({ size }) => {
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
          d="M6 0H4V5H2V0H0V7H4V10H6V7H8V5H6V0ZM14 4V6H16V8H11V2H18C18 0.9 17.1 0 16 0H11C9.9 0 9 0.9 9 2V8C9 9.1 9.9 10 11 10H16C17.1 10 18 9.1 18 8V4H14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FourGMobiledata;
