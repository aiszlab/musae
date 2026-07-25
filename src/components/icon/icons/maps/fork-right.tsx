import React from "react";
import { withIcon } from "../../hoc";

const ForkRight = withIcon(({ size }) => {
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
          d="M8.59 12.59L10 14L14 10L10 6L8.59 7.41L10.17 9C8.66 8.67 6.44 9.08 5 10.36V3.83L6.59 5.42L8 4L4 0L0 4L1.41 5.41L3 3.83V18H5V14C5.73 11.42 8.07 10.53 10.17 11L8.59 12.59Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ForkRight;
