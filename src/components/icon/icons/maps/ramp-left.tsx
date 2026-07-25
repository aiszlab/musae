import React from "react";
import { withIcon } from "../../hoc";

const RampLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.6667, 0) scale(1.3333)">
        <path
          d="M5 18H3V3.83L1.41 5.41L0 4L4 0L8 4L6.59 5.41L5 3.83V6C5 10.27 9.03 13.13 11 14.27L9.54 15.73C7.63 14.57 6.1 13.2 5 11.71V18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RampLeft;
