import React from "react";
import { withIcon } from "../../hoc";

const EMobiledata = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(2.4)">
        <path d="M8 2V0H0V10H8V8H2V6H8V4H2V2H8Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default EMobiledata;
