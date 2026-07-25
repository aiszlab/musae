import React from "react";
import { withIcon } from "../../hoc";

const Restaurant = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(1.2)">
        <path
          d="M13 4V12H16V20H18V0C15.24 0 13 2.24 13 4ZM8 7H6V0H4V7H2V0H0V7C0 9.21 1.79 11 4 11V20H6V11C8.21 11 10 9.21 10 7V0H8V7Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Restaurant;
