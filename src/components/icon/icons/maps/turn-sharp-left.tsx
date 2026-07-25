import React from "react";
import { withIcon } from "../../hoc";

const TurnSharpLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2, 0) scale(1.3333)">
        <path
          d="M3 3.83L1.41 5.41L0 4L4 0L8 4L6.59 5.41L5 3.83V10H13C14.1 10 15 10.9 15 12V18H13V12H5C3.9 12 3 11.1 3 10V3.83Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TurnSharpLeft;
