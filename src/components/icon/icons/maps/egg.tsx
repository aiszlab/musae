import React from "react";
import { withIcon } from "../../hoc";

const Egg = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.6667, 0) scale(1.3333)">
        <path
          d="M7 0C3.5 0 0 6.33 0 11C0 14.87 3.13 18 7 18C10.87 18 14 14.87 14 11C14 6.33 10.5 0 7 0ZM7 16C4.24 16 2 13.76 2 11C2 6.91 5.07 2 7 2C8.93 2 12 6.91 12 11C12 13.76 9.76 16 7 16Z"
          fill="currentColor"
        />
        <path
          d="M8 13C7.42 13 5 12.92 5 10C5 9.45 4.55 9 4 9C3.45 9 3 9.45 3 10C3 13 4.99 15 8 15C8.55 15 9 14.55 9 14C9 13.45 8.55 13 8 13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Egg;
