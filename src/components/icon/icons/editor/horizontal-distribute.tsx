import React from "react";
import { withIcon } from "../../hoc";

const HorizontalDistribute = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path d="M2 20H0V0H2V20ZM20 0H18V20H20V0ZM11.5 5H8.5V15H11.5V5Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default HorizontalDistribute;
