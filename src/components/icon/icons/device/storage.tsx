import React from "react";
import { withIcon } from "../../hoc";

const Storage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M0 16H20V12H0V16ZM2 13H4V15H2V13ZM0 0V4H20V0H0ZM4 3H2V1H4V3ZM0 10H20V6H0V10ZM2 7H4V9H2V7Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Storage;
