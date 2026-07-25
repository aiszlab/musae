import React from "react";
import { withIcon } from "../../hoc";

const Height = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(6.6667, 0) scale(1.3333)">
        <path d="M5 3.99H8L4 0L0 3.99H3V14.01H0L4 18L8 14.01H5V3.99Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Height;
