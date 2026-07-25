import React from "react";
import { withIcon } from "../../hoc";

const ThreeGMobiledata = withIcon(({ size }) => {
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
          d="M0 0V2H5V4H1V6H5V8H0V10H5C6.1 10 7 9.1 7 8V6.5C7 5.67 6.33 5 5.5 5C6.33 5 7 4.33 7 3.5V2C7 0.9 6.1 0 5 0H0ZM18 4V8C18 9.1 17.1 10 16 10H11C9.9 10 9 9.1 9 8V2C9 0.9 9.9 0 11 0H16C17.1 0 18 0.9 18 2H11V8H16V6H13.5V4H18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ThreeGMobiledata;
