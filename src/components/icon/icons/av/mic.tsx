import React from "react";
import { withIcon } from "../../hoc";

const Mic = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.1579, 0) scale(1.2632)">
        <path
          d="M7 12C8.66 12 10 10.66 10 9V3C10 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3V9C4 10.66 5.34 12 7 12Z"
          fill="currentColor"
        />
        <path
          d="M12 9C12 11.76 9.76 14 7 14C4.24 14 2 11.76 2 9H0C0 12.53 2.61 15.43 6 15.92V19H8V15.92C11.39 15.43 14 12.53 14 9H12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Mic;
