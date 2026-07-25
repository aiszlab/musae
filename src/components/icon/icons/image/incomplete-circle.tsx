import React from "react";
import { withIcon } from "../../hoc";

const IncompleteCircle = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 7.24 1.12 4.74 2.93 2.93L10 10V0C15.52 0 20 4.48 20 10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default IncompleteCircle;
