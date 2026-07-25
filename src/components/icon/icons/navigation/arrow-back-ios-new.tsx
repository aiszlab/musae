import React from "react";
import { withIcon } from "../../hoc";

const ArrowBackIosNew = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.938, 0) scale(1.2)">
        <path d="M11.77 1.77L10 0L0 10L10 20L11.77 18.23L3.54 10L11.77 1.77Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default ArrowBackIosNew;
