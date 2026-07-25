import React from "react";
import { withIcon } from "../../hoc";

const Remove = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 10.2857) scale(1.7143)">
        <path d="M14 2H0V0H14V2Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Remove;
