import React from "react";
import { withIcon } from "../../hoc";

const Curtains = withIcon(({ size }) => {
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
          d="M18 16V0H2V16H0V18H20V16H18ZM16 7.86C13.95 7.28 12.36 4.93 12.06 2H16V7.86ZM13.81 9C11.77 10.35 10.31 12.94 10.05 16H9.96C9.7 12.94 8.24 10.35 6.2 9C8.24 7.65 9.7 5.06 9.96 2H10.05C10.31 5.06 11.77 7.65 13.81 9ZM7.94 2C7.64 4.93 6.05 7.27 4 7.86V2H7.94ZM4 10.14C6.05 10.72 7.64 13.07 7.94 16H4V10.14ZM12.06 16C12.36 13.07 13.95 10.73 16 10.14V16H12.06Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Curtains;
