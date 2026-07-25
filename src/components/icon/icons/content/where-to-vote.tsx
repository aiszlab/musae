import React from "react";
import { withIcon } from "../../hoc";

const WhereToVote = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.4629, 0) scale(1.0671)">
        <path
          d="M8 0C3.59 0 0 3.59 0 8C0 13.57 6.96 21.34 7.26 21.67L8 22.49L8.74 21.67C9.04 21.34 16 13.57 16 8C16 3.59 12.41 0 8 0ZM8 19.47C5.82 16.86 2 11.54 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.83 9.75 17.36 8 19.47ZM6.47 10.17L4.71 8.4L3.29 9.82L6.47 13L12.48 6.99L11.07 5.57L6.47 10.17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WhereToVote;
