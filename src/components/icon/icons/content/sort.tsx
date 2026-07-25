import React from "react";
import { withIcon } from "../../hoc";

const Sort = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4) scale(1.3333)">
        <path d="M0 12H6V10H0V12ZM0 0V2H18V0H0ZM0 7H12V5H0V7Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Sort;
