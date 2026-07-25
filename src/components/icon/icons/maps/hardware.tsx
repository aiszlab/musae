import React from "react";
import { withIcon } from "../../hoc";

const Hardware = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.3333, 0) scale(1.3333)">
        <path
          d="M14 0L11 3V0H5C2.24 0 0 2.24 0 5H5V17C5 17.55 5.45 18 6 18H10C10.55 18 11 17.55 11 17V5L14 8H16V0H14ZM9 16H7V10H9V16ZM7 8V3H2.77C3.32 2.39 4.11 2 5 2H9V8H7Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Hardware;
