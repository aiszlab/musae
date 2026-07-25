import React from "react";
import { withIcon } from "../../hoc";

const FormatStrikethrough = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2) scale(1.3333)">
        <path d="M7 15H11V12H7V15ZM2 0V3H7V6H11V3H16V0H2ZM0 10H18V8H0V10Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default FormatStrikethrough;
