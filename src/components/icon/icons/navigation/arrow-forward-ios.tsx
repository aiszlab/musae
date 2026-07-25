import React from "react";
import { withIcon } from "../../hoc";

const ArrowForwardIos = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.938, 0) scale(1.2)">
        <path d="M0 18.23L1.77 20L11.77 10L1.77 0L0 1.77L8.23 10L0 18.23Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default ArrowForwardIos;
