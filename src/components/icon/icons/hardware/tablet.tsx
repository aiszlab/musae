import React from "react";
import { withIcon } from "../../hoc";

const Tablet = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.2727) scale(1.0909)">
        <path
          d="M20 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H20C21.1 16 21.99 15.1 21.99 14L22 2C22 0.9 21.1 0 20 0ZM18 14H4V2H18V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Tablet;
