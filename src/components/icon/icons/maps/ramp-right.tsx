import React from "react";
import { withIcon } from "../../hoc";

const RampRight = withIcon(({ size }) => {
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
          d="M6 18H8V3.83L9.59 5.42L11 4L7 0L3 4L4.41 5.41L6 3.83V6C6 10.27 1.97 13.13 0 14.27L1.46 15.73C3.37 14.56 4.9 13.19 6 11.7V18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RampRight;
