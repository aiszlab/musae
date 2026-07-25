import React from "react";
import { withIcon } from "../../hoc";

const LocalParking = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.3333, 0) scale(1.3333)">
        <path
          d="M7 0H0V18H4V12H7C10.31 12 13 9.31 13 6C13 2.69 10.31 0 7 0ZM7.2 8H4V4H7.2C8.3 4 9.2 4.9 9.2 6C9.2 7.1 8.3 8 7.2 8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalParking;
