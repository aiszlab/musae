import React from "react";
import { withIcon } from "../../hoc";

const Numbers = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.3333) scale(1.3333)">
        <path
          d="M17.5 6L18 4H14L15 0H13L12 4H8L9 0H7L6 4H2L1.5 6H5.5L4.5 10H0.5L0 12H4L3 16H5L6 12H10L9 16H11L12 12H16L16.5 10H12.5L13.5 6H17.5ZM10.5 10H6.5L7.5 6H11.5L10.5 10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Numbers;
