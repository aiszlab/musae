import React from "react";
import { withIcon } from "../../hoc";

const ForkLeft = withIcon(({ size }) => {
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
          d="M5.41 12.59L4 14L0 10L4 6L5.41 7.41L3.83 9C5.34 8.67 7.56 9.08 9 10.36V3.83L7.41 5.42L6 4L10 0L14 4L12.59 5.41L11 3.83V18H9V14C8.27 11.42 5.93 10.53 3.83 11L5.41 12.59Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ForkLeft;
