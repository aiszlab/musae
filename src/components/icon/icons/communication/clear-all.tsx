import React from "react";
import { withIcon } from "../../hoc";

const ClearAll = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 5.3333) scale(1.3333)">
        <path d="M2 6H16V4H2V6ZM0 10H14V8H0V10ZM4 0V2H18V0H4Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default ClearAll;
