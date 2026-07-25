import React from "react";
import { withIcon } from "../../hoc";

const Audiotrack = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4, 0) scale(1.3333)">
        <path
          d="M6 0V10.55C5.41 10.21 4.73 10 4 10C1.79 10 0 11.79 0 14C0 16.21 1.79 18 4 18C6.21 18 8 16.21 8 14V4H12V0H6ZM4 16C2.9 16 2 15.1 2 14C2 12.9 2.9 12 4 12C5.1 12 6 12.9 6 14C6 15.1 5.1 16 4 16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Audiotrack;
