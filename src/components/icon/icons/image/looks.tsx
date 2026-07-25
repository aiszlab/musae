import React from "react";
import { withIcon } from "../../hoc";

const Looks = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 6) scale(1.0909)">
        <path
          d="M11 4C7.14 4 4 7.14 4 11H6C6 8.24 8.24 6 11 6C13.76 6 16 8.24 16 11H18C18 7.14 14.86 4 11 4ZM11 0C4.93 0 0 4.93 0 11H2C2 6.04 6.04 2 11 2C15.96 2 20 6.04 20 11H22C22 4.93 17.07 0 11 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Looks;
