import React from "react";
import { withIcon } from "../../hoc";

const HMobiledata = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(2.4)">
        <path d="M8 4H2V0H0V10H2V6H8V10H10V0H8V4Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default HMobiledata;
