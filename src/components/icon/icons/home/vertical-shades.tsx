import React from "react";
import { withIcon } from "../../hoc";

const VerticalShades = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M18 16V0H2V16H0V18H20V16H18ZM12 2V16H8V2H12ZM4 2H6V16H4V2ZM14 16V2H16V16H14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VerticalShades;
