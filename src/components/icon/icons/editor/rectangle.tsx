import React from "react";
import { withIcon } from "../../hoc";

const Rectangle = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path d="M0 0V16H20V0H0ZM18 14H2V2H18V14Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Rectangle;
